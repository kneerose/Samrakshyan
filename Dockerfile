# Install dependencies only when needed
FROM node:16 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./

RUN corepack enable
RUN yarn install

# Rebuild the source code only when needed
FROM node:16 AS builder
ARG BASE_DEPLOY_PATH=
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN BASE_DEPLOY_PATH=${BASE_DEPLOY_PATH} yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16 AS runner
RUN groupadd --gid 1001 nodejs && useradd  --gid 1001 --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/yarn.lock ./yarn.lock

USER nextjs
EXPOSE 3000

VOLUME /app/.next/cache

CMD [ "./node_modules/.bin/next", "start"]
