const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({

  
  projectId: 'v3xzcf',

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      configureAllureAdapterPlugins(on, config)
      return config;

    },

    env: {
      allure: true,
      senha: '1234',
      baseUrl: 'https://seubarriga.wcaquino.me/login',
    },
    experimentalRunAllSpecs: true,
  },

  video: true,    
  watchForFileChanges: false,

  setupNodeEvents(on, config) {
    return require("./cypress/plugins/index.js")(on, config);
  },
});
