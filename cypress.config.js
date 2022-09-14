const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    defaultCommandTimeout: 6000,
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://demo.podium.tools/qa-webchat-lorw/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
