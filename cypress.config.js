const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "pz79y6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})