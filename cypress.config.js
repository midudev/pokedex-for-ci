const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    supportFile: false,
    video: false,
    screenshotOnRunFailure: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5000',
    viewportWidth: 1280,
    viewportHeight: 720
  },
})
