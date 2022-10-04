/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const modifiedConfig = {};

  if (config.userAgent === 'mobile') {
    modifiedConfig.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
    modifiedConfig.viewportWidth = 414;
    modifiedConfig.viewportHeight = 896;
  }
  else if (config.userAgent === 'desktop') {
    modifiedConfig.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59';
    modifiedConfig.viewportWidth = 1920;
    modifiedConfig.viewportHeight = 575;
  }
  // he will compound them together to one config
  return { ...config, ...modifiedConfig }
}
// --config userAgent=mobile
//--config userAgent=desktop