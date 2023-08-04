///<reference types="cypress" />

describe('Automation API pokeapi', () => {

    it('successfully validated response', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')

        // response header
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')

        // response body
        cy.get('@pokemon').its('body')
            .should('not.be.empty')
            .its('name')
            .should('eq', 'ditto')

        // response code
        cy.get('@pokemon').its('status').should('equal', 200)
        
    }) 
})
