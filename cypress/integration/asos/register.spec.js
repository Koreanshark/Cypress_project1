/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


it('Sign up form', () => {
  cy.visit('https://www.asos.com/')
  cy.get('#myAccountDropdown')
  .click()
  .find('a[data-testid="signup-link"]')
  .should('be.visible')
  .and('have.text','Join')
  .click()
  cy.get('input[name="Email"]')
  .type('newuser@mail.com')
  cy.get('input[name="FirstName"]')
  .type('John')
  cy.get('input[name="LastName"]')
  .type('Johnson')
  cy.get('input[name="Password"]')
  .type('Password123')
  cy.get('select[name="BirthDay"]')
  .select('1')
  cy.get('select[name="BirthMonth"]')
  .select('June')
  cy.get('select[name="BirthYear"]')
  .select('1991')
  cy.get('#male')
  .check({force: true})
  cy.get('#clear-all-checkbox-button')
  .click()
  cy.get('#promos').uncheck()
  cy.get('#newness').uncheck()
  cy.get('#lifestyle').uncheck()
  cy.get('#partner').uncheck()
  cy.get('#register')
  .click()

})
