import 'cypress-plugin-xhr-toggle'
import 'cypress-iframe'

// seed database before running a test
beforeEach(() => {

  const noLog = { log: false }

  cy.task('seedDb', null, noLog)
  cy.window(noLog)
    .its('localStorage', noLog)
    .invoke(noLog, 'setItem', 'gtag-banner-shown', 'true')

});