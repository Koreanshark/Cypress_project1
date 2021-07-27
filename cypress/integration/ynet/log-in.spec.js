/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



it('Log-in button', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.viewport(1300, 660)
  cy.get('.loginBtn').should('be.visible').should('have.text', 'התחברות')
  .click()
})

it('log-in type email and password', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.viewport(1300, 660)
  cy.get('.loginBtn').click()
  getIframeBody().find(".login-title").should('be.visible')
  getIframeBody().find('input[name="email"]').eq('0')
  .type('example@mail.com')
  getIframeBody().find('input[name="password"]')
  .type('123456Aa.')
  getIframeBody().find('.submit-btn').eq('0')
  .click()
  getIframeBody().find('.wrong-details').should('be.visible')
  .and('have.text', 'הדואר האלקטרוני או הסיסמה שהוזנו אינם קיימים במערכת')

})


const getIframeBody = () => {
  return cy
  .get('iframe[src="https://premium.ynet.co.il/web/login"]')
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
}

// it('log-in type email and password', () => {
//   cy.visit('https://premium.ynet.co.il/web/login')
//   cy.get('input[name="email"]').eq('0')
//   .type('example@mail.com')
//   cy.get('input[name="password"]')
//   .type('123456Aa.')
//   cy.get('.submit-btn').eq('0')
//   .click()
//   cy.get('.wrong-details').should('be.visible')
//   .and('have.text', 'הדואר האלקטרוני או הסיסמה שהוזנו אינם קיימים במערכת')
// })

it('log-in wrong email', () => {
  cy.visit('https://premium.ynet.co.il/web/login')
  cy.get('input[name="email"]').eq('0')
  .type('123456')
  cy.get('input[name="password"]').click()
  cy.get('.input-wrapper').find('label')
  .should('be.visible').and('have.text', 'יש להזין כתובת דוא"ל תקינה')
})
