it('dealing with iframes', () => {

  cy.visit('https://kitchen.applitools.com/ingredients/iframe')

  cy.iframe('#the-kitchen-table')
    .find('section')
    .should('contain.text', 'The Kitchen')

});