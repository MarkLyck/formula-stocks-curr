import testPass from '../../testPass'

describe('Trades', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type(testPass)
    cy.get('button[type="submit"]').click()
    cy.contains('Portfolio yields')
    cy.get('button[data-test-id="trades-menu-btn"]').click()
    cy.wait(500)
    cy.contains('Trades this month')
    cy.contains('you need to be subscribed').should('not.exist')
    cy.get('button[data-test-id="plan-change-btn"]').click()
    cy.get('button[data-test-id="premium-plan-btn"]').click()
    cy.contains('you need to be subscribed')
  })
})
