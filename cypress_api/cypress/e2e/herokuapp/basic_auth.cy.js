describe('Basic Authentication Test', function () {
  it('Successfully login by appending username and password in URL', () => {
       cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
   })

   it('Successfully login by appending username and password in URL', function () {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.');
  })
  
  it('Successfully login using headers', function () {
       cy.visit("https://the-internet.herokuapp.com/basic_auth", {
           headers: {
               authorization: 'Basic YWRtaW46YWRtaW4='
           },
           failOnStatusCode: false
       })
       cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
   })
})
