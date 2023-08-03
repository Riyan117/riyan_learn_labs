describe('Login to OrangeHRM', () => {
    it('should successfully login with valid credentials', () => {
  
      // Custom Commands OrangeHRM
      cy.OrangeHRM('Admin', 'admin123');
  
      // Assertions setelah login berhasil
      cy.get('.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard');
    });
  });
  