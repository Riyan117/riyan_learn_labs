/// <reference types="cypress" />

describe('Working with inputs', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/login.html');
    });
  
    it('Should fill username', () => {
      cy.get('input#user_login').clear();
      cy.get('input#user_login').type('username');
    });
  
    it('Should fill password', () => {
      cy.get('input[name="user_password"]').clear();
      cy.get('input[name="user_password"]').type('password');
      cy.get('input[name="user_remember_me"]').check();
    });
  });
  