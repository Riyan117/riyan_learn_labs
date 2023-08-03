describe('Pengujian Login dan Logout di Zero Webapp', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/')
    })
  
    it('Login dengan data yang tidak valid', () => {
      // Klik pada link "Sign in" untuk membuka halaman login
      cy.get('#signin_button').click();
  
      // Masukkan data login yang tidak valid
      cy.get('#user_login').type('username_tidak_valid')
      cy.get('#user_password').type('password_tidak_valid')
  
      // Klik pada tombol "Sign in"
      cy.get('input[type="submit"]').click()
  
      // Assertion: Memastikan pesan error ditampilkan ketika login dengan data tidak valid
      cy.contains('Login and/or password are wrong.').should('be.visible')
    })
  
    it('Login dengan data yang valid dan logout', () => {
      // Klik pada link "Sign in" untuk membuka halaman login
      cy.get('#signin_button').click();
  
      // Masukkan data login yang valid
      cy.get('#user_login').type('username')
      cy.get('#user_password').type('password')
  
      // Klik pada tombol "Sign in"
      cy.get('input[type="submit"]').click()
  
      // Assertion: Memastikan login berhasil dengan memverifikasi nama pengguna di halaman utama
      cy.contains('Cash Accounts').should('be.visible')
  
      // Logout dari akun
      cy.get('.icon-user').click();
      cy.contains('Logout').click();
  
      // Assertion: Memastikan berhasil logout dan kembali ke halaman login
      cy.url().should('eq', 'http://zero.webappsecurity.com/index.html');
    })
  })
  