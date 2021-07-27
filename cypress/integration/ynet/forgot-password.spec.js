/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const getIframeBody = () => {
  return cy
  .get('iframe[src="https://premium.ynet.co.il/web/login"]')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
}

it('forgot password', () => {
  cy.visit('https://www.ynet.co.il/')
  cy.viewport(1300, 660)
  cy.get('.loginBtn').click()
  cy.wait(5000);
  getIframeBody().find('.forgot-pass').find('a')
  .click()
  getIframeBody().find('#forgot-password')
  .find('.input-wrapper').find('input[name="email"]', { timeout: 10000 })
  .type('example@mail.com')

  getIframeBody().find('#forgot-password')
  .find('.submit-btn')
  .click()

  getIframeBody().find('.customer-service-comment')
  .should('be.visible').and('contain.text', 'לכל בעיה ניתן לפנות ')
  getIframeBody().find('.customer-service-comment').find('a')
  .should('be.visible').and('have.text', 'לשירות הלקוחות')
})
