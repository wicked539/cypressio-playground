describe('Urlaubsverwaltung Acceptance Tests', function() {
  it('Logs into the Urlaubsverwaltung', function() {
    cy.visit('https://urlaubsverwaltung-demo.synyx.de')

	cy.url().should('include', '/login')

    // For some reason, using the acutal HTML form to login does not work...
    //cy.get('#username').type('testUser')
    //cy.get('#password').type('secret')

    //cy.get('button').click()
    
    // ...so we manually login by POSTing the credentials...
    cy.request({
        method: 'POST',
        url: '/login',
        form: true,
        body: {
          username: 'testUser',
          password: 'secret'
        }
	})

	// ...and pointing the browser to the login success page
	cy.visit('https://urlaubsverwaltung-demo.synyx.de/web/staff/1/overview')
  })
})