import { cardsLoadRandomly } from "evilCode";

it.only('Find an element on page', () => {

  cy.visit('/board/1')

  // find last card
  cy.get('[data-cy=card]')
    .last()

  cy.contains('[data-cy=card]', 'Soap')
    .parents('[data-cy=list]')

});

it('Dealing with flaky situations', () => {

  cardsLoadRandomly(3000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .last()
    .should('contain.text', 'Soap')

});