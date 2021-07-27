/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Sign in - forgot password', () => {
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
  cy.get('#loginErrorMessage')
  .should('be.visible')
  cy.contains('Forgot password?')
  .click()
  cy.get('h2[class="title"]')
  .should('be.visible').and('have.text','Reset your password')
  cy.get('#Email')
  .type('newuser321@mail.com')
  cy.get('#send')
  .click()
  cy.get('h2').find('span[class="qa-title"]')
  .should('be.visible').and('have.text','Reset password link sent')

})
