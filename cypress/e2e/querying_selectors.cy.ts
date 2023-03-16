import { cardsLoadRandomly } from "evilCode";

it.only('Find an element on page', () => {

  cy.visit('/board/1')

  // find last card
  cy.get('[data-cy=card]')
    .last()

  // find parent element
  cy.contains('[data-cy=card]', 'Soap')
    .parents('[data-cy=list]')

  // find next element
  cy.contains('[data-cy=card]', 'Milk')
    .next()

  // find next element
  cy.contains('[data-cy=card]', 'Bread')
    .prev()

});

it('Dealing with flaky situations', () => {

  cardsLoadRandomly(10000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .last()
    .should('contain.text', 'Soap')

});