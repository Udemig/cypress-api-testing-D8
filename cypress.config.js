const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": true,
      "html": true,
      "json": false
    },
  projectId: "4d4j6d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
