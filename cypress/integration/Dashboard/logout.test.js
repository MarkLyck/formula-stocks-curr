import testPass from '../testPass'

describe('Log out', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type(testPass)
    cy.get('button[type="submit"]').click()
    cy.contains('Portfolio yields')

    cy.get('button[data-test-id="logout-menu-btn"]').click()
    cy.wait(500)
    // click Welcome article
    cy.contains('A better way to invest')
  })
})
