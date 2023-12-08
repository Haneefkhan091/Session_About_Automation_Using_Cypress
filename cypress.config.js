const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 100000,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  viewportHeight:1280,
  viewportWidth:800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
  },
});
