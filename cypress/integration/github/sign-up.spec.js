/// <reference types="Cypress" />

it('Sign up form', () => {
  cy.visit('https://github.com/')
  cy.viewport(1300, 660)
  cy.get('button[type="submit"]').click()
  cy.wait(2000)
  // email
  cy.get('label[for="email"]').should('be.visible')
  .should('include.text', 'Enter your email')
  cy.get('#email').type('User123@mail.com')
  cy.get('button[data-continue-to="password-container"]')
  .click({force: true})
  // password
  cy.get('label[for="password"]').should('be.visible')
  .should('include.text', 'Create a password')
  cy.get('input[type="password"]').type('password123')
  cy.get('button[data-optimizely-event="click.signup_continue.password"]')
  .click({force: true})
  // login
  cy.get('label[for="login"]').should('be.visible')
  .should('include.text', 'Enter a username')
  cy.get('#login').type('testlogin0')
  cy.get('button[data-optimizely-event="click.signup_continue.username"]')
  .click({force: true})
  //opt-in
  cy.get('label[for="opt_in"]').should('be.visible')
  cy.get('#opt_in').type('n')
  cy.get('button[data-optimizely-event="click.signup_continue.opt-in"]')
  .click({force: true})
  // captcha
  // getIframeBody().find('#home_children_heading')
  // .should('be.visible')

})

const getIframeBody = () => {
  return cy
  .get('iframe[src="https://api.funcaptcha.com/fc/gc/about:blank"]')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
}
