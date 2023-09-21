describe('Amazona Test', () => {
    it('should open browser and search for "Amazona"', () => {
      cy.visit('http://localhost:3000/signin');
      cy.get('#email').type('admin@example.com');
      cy.get('#password').type('1234{enter}');
    });
  });
  