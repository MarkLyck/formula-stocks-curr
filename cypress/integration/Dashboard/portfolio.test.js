import testPass from '../../testPass'

describe('Portfolio', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type(testPass)
    cy.get('button[type="submit"]').click()
    cy.contains('Portfolio yields')
    cy.contains('Days owned')
    cy.contains('CASH')
  })
})
