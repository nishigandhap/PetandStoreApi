const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: 'cypress/e2e/**/*.js'

  },

  env: {

    petUrl: 'https://petstore.swagger.io/v2/pet/',
    storeUrl: 'https://petstore.swagger.io/v2/store/'
  }
});
