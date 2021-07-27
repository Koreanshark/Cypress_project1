/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

// it('fails to visit website 1', function () {
//   cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
// })



it('Main menu eq', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.viewport(1300, 660)
  cy.get('.mainNav').find('span').eq('0')
  .should('have.text', ' ראשי')
  cy.get('.mainNav').find('span').eq('1')
  .should('have.text', ' +ynet')
  cy.get('.mainNav').find('span').eq('2')
  .should('have.text', ' חדשות')
  cy.get('.mainNav').find('span').eq('3')
  .should('have.text', ' ספורט')
  cy.get('.mainNav').find('span').eq('4')
  .should('have.text', ' כלכלה')
  cy.get('.mainNav').find('span').eq('5')
  .should('have.text', ' תרבות')
  cy.get('.mainNav').find('span').eq('6')
  .should('have.text', 'רכילות')
  cy.get('.mainNav').find('span').eq('7')
  .should('have.text', ' בריאות')
  cy.get('.mainNav').find('span').eq('8')
  .should('have.text', ' רכב')
  cy.get('.mainNav').find('span').eq('9')
  .should('have.text', ' דיגיטל')
  cy.get('#wcm_MenuDisplay')
  .should('have.text', 'עוד')
})

it('Logo img eq', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('[aria-label="Page Logo"]')
})

it('Weather icon is visible', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('#main_header_weather').should('be.visible')
})

it('Header top eq', () => {
  cy.visit('https://www.ynet.co.il/home/0,7340,L-8,00.html')
  cy.get('.flashText').should('have.text', 'מבזקים')
  cy.get('.redMailText').should('have.text', 'המייל האדום')
})
