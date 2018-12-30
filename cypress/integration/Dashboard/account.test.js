import testPass from '../../testPass'

describe('Account', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type(testPass)
    cy.get('button[type="submit"]').click()
    cy.contains('Portfolio yields')

    // My accunt should load
    cy.get('button[data-test-id="account-menu-btn"]').click()
    cy.wait(500)
    cy.contains('My Account')

    // cancel subscription
    // cy.contains('Cancel subscription').click()
    // cy.contains('Your subscription is ending on')

    // reactivate subscription
    // cy.contains('Reactivate subscription').click()
    // cy.contains('your subscription will end').should('not.exist')
  })
})
