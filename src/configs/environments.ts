import getConfig from "next/config";
const config = getConfig();
let publicRuntimeConfig: any = {};
if (config && config.publicRuntimeConfig) {
  publicRuntimeConfig = config.publicRuntimeConfig;
}
const environments = {
  API_URL: publicRuntimeConfig.API_URL,
};

export default environments;
