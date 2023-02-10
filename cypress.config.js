const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.js'
  },
  env: {

    petUrl: 'https://petstore.swagger.io/v2/pet/',
    storeUrl: 'https://petstore.swagger.io/v2/store/'
  }
});
