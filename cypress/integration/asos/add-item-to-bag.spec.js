/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Sign in - forgot password', () => {
  cy.visit('https://www.asos.com/women/shoes/boots/cat/?cid=6455&nlid=ww|shoes|shop+by+product|boots')
  cy.get('#product-200368140')
  .click()
  cy.get('select[data-id="sizeSelect"]')
  .select('EU 40')
  cy.contains('Add to bag')
  .click()
  cy.get('#miniBagDropdown')
  .click()
  cy.get('a[data-test-id="bag-link"]')
  .click()
  cy.contains('CHECKOUT')
  .click({force: true})

})
