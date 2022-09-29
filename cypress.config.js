const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
    specPattern: 'cypress/integration/app.cy.js',
    video: false
  }
})
