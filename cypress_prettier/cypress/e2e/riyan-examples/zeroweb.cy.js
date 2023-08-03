beforeEach(() => {
	cy.visit("http://zero.webappsecurity.com/index.html");
  });
  
  it("should display login form", () => {
	cy.get('#signin_button').should('be.visible');
	cy.get('#signin_button').click();
	cy.get('#login_form').should('be.visible');
  });
  
  it("should allow user to login", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Cash Accounts').should('be.visible');
  });
  
  it("should navigate to account summary page", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Account Summary').click();
	cy.url().should('include', 'account-summary.html');
	cy.contains('Savings').should('be.visible');
  });
  
  it("should display pay bills form", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Pay Bills').click();
	cy.url().should('include', 'pay-bills.html');
	cy.contains('Add New Payee').should('be.visible');
  });
  
  it("should make a payment successfully", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Pay Bills').click();
	cy.get('#sp_payee').select('Apple');
	cy.get('#sp_account').select('Loan');
	cy.get('#sp_amount').type('100');
	cy.get('#sp_date').type('2023-07-15');
	cy.get('#sp_description').type('Payment for services', { force: true });
	cy.get('#pay_saved_payees').click();
	cy.contains('The payment was successfully submitted.').should('be.visible');
  });
  
  it("should display find transactions form", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Account Activity').click();
	cy.get('h2.board-header').should('contain.text', 'Show Transactions').should('be.visible');
  });  
  
  it("should display my money map", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('My Money Map').click();
	cy.get('tspan').contains('OutFlow Chart').should('be.visible');
  });
  
  it("should display online statement", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.contains('Online Statements').should('be.visible');
  });
  
  it("should display logout alert", () => {
	cy.get('#signin_button').click();
	cy.get('#user_login').type('username');
	cy.get('#user_password').type('password');
	cy.get('input[name="submit"]').click();
	cy.get('.icon-user').click();
	cy.contains('Logout').click();
	cy.url().should('eq', 'http://zero.webappsecurity.com/index.html');
  });