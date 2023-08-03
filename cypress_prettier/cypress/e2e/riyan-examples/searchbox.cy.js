describe('Pencarian Kata di Website Zero', () => {
    it('Mengunjungi halaman beranda dan mencari kata "example"', () => {
      cy.visit('http://zero.webappsecurity.com/')
  
      // Cari elemen input untuk pencarian dan masukkan kata "example"
      cy.get('#searchTerm').type('online')
  
      // Submit form pencarian
      cy.get('form').submit()
  
      // Assertion: Pastikan kata "online" muncul dalam hasil pencarian
      cy.contains('h2', 'Search Results:').should('be.visible')
      
    })
  })
  