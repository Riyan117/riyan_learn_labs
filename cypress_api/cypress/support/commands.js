// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('hitAPIgorest', () => {
  cy.request ({
    method: 'POST',
    url: Cypress.env('url') + '/public/v2/users',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 886f0aa0ace64579226dcf137d90454957a76e191a3b17391b62f4ee7fc7025c'
    },
    body: {
      "name": "Riyan",
      "gender": "male",
      "email": "riyan@eduwork.com",
      "status": "active"
    }
  }).then((response) => {
    expect(response.status).to.eq(201);
  });
});
