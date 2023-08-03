describe('DuckDuckGo Search', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com/');
  });

  it('performs a search using fixture', () => {
    cy.fixture('searchQuery').then((searchQuery) => {
      cy.get('[aria-label="Search with DuckDuckGo"]').as('searchInput');
      cy.get('@searchInput')
        .type(`${searchQuery.query}{enter}`)
    });
  });
});
