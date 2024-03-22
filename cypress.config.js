const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    // default URL if there is a single server
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      // grab the machine index and the total number of jobs
      // from the same variables you passed to the cypress run command
      // in the CI workflow file (like .github/workflows/ci.yml)
      // and determine what baseUrl to use

      // we can simply add the job index to the baseUrl
      // or if we use more machines compute the modulo

      // IMPORTANT: return the config object
      // with the changes you made
      // (baseUrl plus changes made by cypress-split plugin)
      return config
    },
  },
})
