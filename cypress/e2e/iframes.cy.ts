it('dealing with iframes', () => {

  cy.visit('https://lit.dev/playground/#sample=docs%2Fwhat-is-lit&view-mode=preview')

  cy.get('playground-preview').shadow()
    .find('#content')
    .find('iframe', { timeout: 15000 })
    .should('be.visible')

  cy.get('playground-preview').shadow()
    .find('iframe')
    .its('0.contentDocument.body')

});