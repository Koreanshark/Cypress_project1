/// <reference types="Cypress" />

it('forgot password', () => {
  cy.visit('https://github.com/')
  cy.viewport(1300, 660)
  cy.contains('Sign in').click()
  cy.contains('Forgot password?').click()
  cy.get('h1').should('be.visible')
  .should('have.text', 'Reset your password')
  cy.get('#email_field').type('User123@mail.com')
  // cy.contains('Verify').click()

})
