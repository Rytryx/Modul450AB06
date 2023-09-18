/// <reference types="cypress" />

describe('Google Test', () => {
    it('should open Google and search for "Cypress"', () => {
      // Besuche die Google-Startseite
      cy.visit('https://www.google.com');

      // Klicke auf den "Ich stimme zu"-Button
      cy.get('#L2AGLb').click();
  
      // Überprüfe, ob der Google-Suchbar vorhanden ist
      cy.get('#APjFqb').should('exist');
  
      // Gib den Suchbegriff "Cypress" ein und drücke Enter
      cy.get('#APjFqb').type('Cypress{enter}');
    });
  });
  
  