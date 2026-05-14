const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: "./cypress/tests/**.*", // execute any test files in folder tests
    //specPattern: "./cypress/tests/*/*", 
    specPattern: "./cypress/api-test/*", // for api-testing
    baseUrl: "https://www.demoblaze.com/"
  },
  //set timeout for whole project
  defaultCommandTimeout: 10000
});
