/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Sign in form', () => {
  cy.visit('https://www.asos.com/')
  cy.get('#myAccountDropdown')
  .click()
  .find('a[data-testid="signin-link"]')
  .should('be.visible')
  .and('have.text','Sign In')
  .click()
  cy.get('#EmailAddress')
  .type('newuser31@mail.com')
  cy.get('#Password')
  .type('Password123')
  cy.get('#signin')
  .click()

})
