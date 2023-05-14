# DEVELOPERS GUIDE

This document explains the development guide to the new users participating in the development of the project.

## IMPORTANT NOTE

Use terminal to perform `git commit` action to see proper error messages. Integrated Commit feature in IDE's like WebStorm
might not show detailed errors if we encounter any `(It's much easier to view errors in terminal)`. The reason is that we have
set up `husky` for running some scripts to check the `Code Format, ESLinting, TSConfiguration Standards` before committing, and if some scripts generate error, it is easier to debug.

### Configurations

1. Setup prettier as a code formatter during the development of this project.
2. TypeScript's configuration are set in [tsconfig.json](tsconfig.json). Update as per the requirements.
3. [ESLint](.eslintrc.json) and [Prettier](prettier.config.js) are used to provide better development experience and consistence code.
4. Husky configurations are set in [Husky](.husky/pre-commit).
5. Global media assets are set on [public](public) folder at the root level and [assets](src/assets) folder inside `src`.
6. Copy [.env.example](.env.example) file, rename it to `.env`, and add appropriate environment variables there. `[NOTE: If any new environment variable is added to the project, do not forget to add it in .env.example file as well]`

### Directory Structure

1. All the `.ts, .js, .tsx, .jsx` code are inside the [src](src) directory.
2. [assets](src/assets) directory includes all the static css, images, and svg.
3. [components](src/components) directory includes all the reusable components, stories, and tests (i.e. common and other components).
    1. [components/icons](src/components/icons) directory includes all the custom svg icons.
    2. [components/ui](src/components/ui) directory includes all the custom shared UI.
    3. [components/media-render](src/components/media-render) includes all the media used in project.
4. [configs](src/configs) directory includes all the configurations used in the app.
5. [constants](src/constants) directory includes all the constants related to bird details. Feel free to add other constants to this directory.
6. [containers](src/containers) directory includes all the main view, stories, and tests for each specific pages.
7. [layout](src/layout) directory includes common shared design in all the pages.
8. [lib](src/lib) directory includes all custom `hooks` and `wallet` connection required for the project.
    1. [lib/hooks](src/lib/hooks) directory includes all custom hooks.
9. [models](src/models) directory includes all dtos, enums, and types.
10. [pages](src/pages) directory includes actual pages.
11. [store](src/store) directory includes configurations for redux store and other app specific reducers, actions, and types.
12. [types](src/types) directory includes common types.
13. [utils](src/utils) directory includes all the essentials, and custom utilities files.
