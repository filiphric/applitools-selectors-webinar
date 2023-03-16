it('check home screen', () => {

  cy.eyesOpen({
    appName: 'Trello',
  })

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('be.visible')

  cy.eyesCheckWindow({
    ignore: {
      selector: 'hide-in-applitools'
    }
  })

  cy.eyesClose()

});