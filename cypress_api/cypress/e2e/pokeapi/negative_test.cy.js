it('Validate Negative Response', () => {
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
        failOnStatusCode: false
      }).as('pokemon')
      cy.get('@pokemon').its('status').should('equal', 404)
});
