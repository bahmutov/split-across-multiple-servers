const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      const jobIndex = parseNumber(process.env.SPLIT_INDEX)
      const jobs = parseNumber(process.env.SPLIT)
      if (jobIndex >= 0 && jobs > 1) {
        config.baseUrl = `http://localhost:300${jobIndex}`
        console.log(
          'Job index %d of %d, using baseUrl %s',
          jobIndex,
          jobs,
          config.baseUrl,
        )
      }

      // IMPORTANT: return the config object
      return config
    },
  },
})
