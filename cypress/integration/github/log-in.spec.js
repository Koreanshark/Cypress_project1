/// <reference types="Cypress" />

it('Log-in form', () => {
  cy.visit('https://github.com/')
  cy.viewport(1300, 660)
  cy.contains('Sign in').click()
  cy.get('#login_field').type('User123')
  cy.get('#password').type('password123')
  cy.get('input[name="commit"]').click()
})
