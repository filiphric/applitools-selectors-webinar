it('selecting board element', () => {

  cy.visit('/')

  cy.get('.board')
  cy.get('#board-1')
  cy.get('[data-cy=board-item]')

  cy.contains('My Shopping')
  cy.contains('My')
  cy.contains('.board', 'My')

});
