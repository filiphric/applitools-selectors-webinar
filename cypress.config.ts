import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {

    },
    scrollBehavior: false,
    baseUrl: 'http://localhost:3000'
  }
});
