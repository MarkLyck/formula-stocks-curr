import testPass from '../../testPass'

describe('AI Reports', () => {
  it('should load', () => {
    cy.server()
    cy.visit('localhost:3000')

    // Login
    cy.contains('Login').click()
    cy.get('#email').type('test@formulastocks.com')
    cy.get('#password').type(testPass)
    cy.get('button[type="submit"]').click()
    cy.contains('Portfolio yields')

    // go to AI Reports
    cy.get('button[data-test-id="AI reports-menu-btn"]').click()
    cy.wait(500)

    // should see AI Reports page
    cy.contains('AI Investment reports')

    // find IBM
    cy.get('input[type="text"]').type('IB', { delay: 0 })
    cy.contains('IBM').click()

    // check that AI Score page loaded
    cy.contains('AI Score')

    // Check score boxes are clickable.
    cy.contains('Reward').click()
    cy.contains('Higher values, indicates better odds')

    // test Onboarding
    cy.contains('How do I use this').click()

    // should show onboarding
    cy.contains('Skip Intro')
    cy.get('button[data-test-id="next-onboarding-btn"]').click()

    // onboarding page 2
    cy.contains('Internal Rate of Return')
    cy.get('button[data-test-id="next-onboarding-btn"]').click()
    cy.get('button[data-test-id="next-onboarding-btn"]').should('not.exist')
  })
})
