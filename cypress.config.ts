import { defineConfig } from 'cypress'
import { seedDb } from './cypress/scripts/seedDb'

export default defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', { seedDb })
    },
    env: {
      hideXhr: true
    },
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:3000',
    includeShadowDom: false
  }
});
