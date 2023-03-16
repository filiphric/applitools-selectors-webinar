it('selecting board element', () => {

  cy.visit('/')

  cy.get('h2')
  cy.get('.board') // class
  cy.get('#board-1') // id
  cy.get('[data-cy=board-item]') // attribute

  cy.contains('My Shopping') // text
  cy.contains('My') // find the first one
  cy.contains('.board', 'My') // specify element to find

});
