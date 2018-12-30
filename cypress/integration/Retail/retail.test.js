describe('Retail', () => {
  it('scroll links & dialogs', () => {
    cy.viewport(1366, 768)
    cy.server()
    cy.visit('localhost:3000')
    // check page loaded
    cy.contains('Login')
    cy.contains('Sign up')

    // check scroll links
    cy.get('a.performance').click()
    cy.wait(300)
    cy.get('a.how-it-works').click()
    cy.wait(500)
    cy.get('a.pricing').click()
    cy.wait(300)
    cy.get('a.faq-link').click()

    // check FAQ modal
    cy.contains('What do I get with a Formula Stocks subscription?')
    cy.get('button[date-test-id="close-btn"]').click()

    // check Terms and Conditions modal
    cy.get('a[date-test-id="terms-link"]').click()
    cy.contains('Please read these Terms and Conditions carefully')
    cy.get('button[date-test-id="close-btn"]').click()

    // check Privacy Policy modal
    cy.get('a[date-test-id="privacy-link"]').click()
    cy.contains('we collect the personal information you give us')
    cy.get('button[date-test-id="close-btn"]').click()

    // check login modal
    cy.contains('Login').click()
    // Check forgot password modal
    cy.contains('Forgot your password?').click()
    cy.contains('Reset Password')
    cy.get('button[data-test-id="modal-close-btn"]').click()

    // check sign up modal
    cy.contains('Sign up').click()
    cy.contains('We never share your information with third parties')
    cy.get('button[data-test-id="modal-close-btn"]').click()

    cy.contains('Start your free month').click()
    cy.contains('We never share your information with third parties')
    cy.get('button[data-test-id="modal-close-btn"]').click()

    cy.contains("I'm ready to try").click()
    cy.contains('We never share your information with third parties')
    cy.get('button[data-test-id="modal-close-btn"]').click()

    // check intercom opens
    cy.contains('Want more information? ').click()
  })
  it('Sign up modal', () => {
    cy.server()
    cy.visit('localhost:3000')
    cy.contains('Sign up').click()

    // check bad invalid email shows error
    cy.get('#email').type('bad email')
    cy.wait(50)
    cy.get('#password')
    cy.wait(50)
    cy.get('div[data-test-id="error-message"]')
    cy.contains('Invalid email address')

    // should not show an error with valid email and pw.
    cy.get('#email').type('valid@email.com')
    cy.get('#password').type('validPW123')
    cy.get('div[data-test-id="error-message"]').should('not.exist')

    cy.get('.country-select-container').click()
    cy.get('.country-select__option')
      .contains('Afghanistan')
      .click()
    cy.get('#address').should('not.exist')
    cy.get('.country-select-container').click()
    cy.get('.country-select__option')
      .contains('France')
      .click()
    cy.get('#address')
      .click()
      .type('addy 213')
    cy.get('#city')
      .click()
      .type('city')
    cy.get('#postalCode')
      .click()
      .type('6700')
    cy.get('div[data-test-id="error-message"]').should('not.exist')

    cy.get('.submit-button').click()

    // check billing modal is loading
    cy.contains('Try it free')
    cy.contains('20% VAT Tax')
    cy.contains('$10.00') // make sure tax amount is correct
    cy.get('button[type="submit"]').click()
    cy.get('div[data-test-id="error-message"]').contains('full name')
    cy.get('#name').type('Cypress Tester')
    cy.get('button[type="submit"]').click()
    cy.get('div[data-test-id="error-message"]').contains('card number')
    // card details are inside an Iframe that can't be accessed by automated
  })
})
