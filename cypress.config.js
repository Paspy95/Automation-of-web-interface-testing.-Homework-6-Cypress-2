const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4mfmes",
  e2e: {
    baseUrl:"https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
