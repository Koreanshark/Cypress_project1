/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Hero big title is visible', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('h1').should('be.visible')
  cy.get('.slotSubTitle')
  .should('be.visible')
})

it('Hero small titles are visible', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('h2')
  .should('be.visible')
})


it('Hero imges are visible', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('.SiteImageMedia')
  .should('be.visible')
})
