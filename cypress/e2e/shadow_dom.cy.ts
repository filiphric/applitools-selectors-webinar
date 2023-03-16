it('closes side panel that is in shadow DOM', () => {

  cy.visit('https://lit.dev/playground/#sample=docs%2Fwhat-is-lit&view-mode=preview')

  cy.get('litdev-drawer', { includeShadowDom: true })
    .find('#openCloseButton', { includeShadowDom: true })
    .click()

});