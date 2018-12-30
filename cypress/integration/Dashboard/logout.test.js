describe('Log out', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type('viLeKEf4HfjRdsxdQv')
    cy.get('button[type="submit"]').click()

    cy.get('button[data-test-id="logout-menu-btn"]').click()
    // click Welcome article
    cy.contains('A better way to invest')
  })
})
