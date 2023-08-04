const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://gorest.co.in'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
