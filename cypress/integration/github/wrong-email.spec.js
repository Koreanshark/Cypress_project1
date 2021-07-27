/// <reference types="Cypress" />

it('Sign uo form', () => {
  cy.visit('https://github.com/')
  cy.viewport(1300, 660)
  cy.get('button[type="submit"]').click()
  cy.wait(2000)
  cy.get('label[for="email"]').should('be.visible')
  .should('include.text', 'Enter your email')
  cy.get('#email').type('wrong-email')
  cy.get('#email-err').should('be.visible')

  })
