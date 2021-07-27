/// <reference types="Cypress" />

it('home navigation', () => {
  cy.visit('https://github.com/')
  cy.viewport(1300, 660)
  cy.get('nav[class^="home-nav-links"]').find('a').eq('0')
  .should('be.visible').and('include.text','Code')
  cy.get('nav[class^="home-nav-links"]').find('a').eq('1')
  .should('be.visible').and('include.text','Collaborate')
  cy.get('nav[class^="home-nav-links"]').find('a').eq('2')
  .should('be.visible').and('include.text','Develop')
  cy.get('nav[class^="home-nav-links"]').find('a').eq('3')
  .should('be.visible').and('include.text','Automate')
  cy.get('nav[class^="home-nav-links"]').find('a').eq('4')
  .should('be.visible').and('include.text','Secure')
  cy.get('nav[class^="home-nav-links"]').find('a').eq('5')
  .should('be.visible').and('include.text','Community')
})
