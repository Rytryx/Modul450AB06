/// <reference types="cypress" />

describe('Google Test', () => {
    it('should open Google and search for "Cypress"', () => {
      // Besuche die Google-Startseite
      cy.visit('https://www.20min.ch/');

      // Klicke auf den "Ich stimme zu"-Button
      cy.get('#onetrust-accept-btn-handler').click();
  
      // Überprüfe, ob der Google-Suchbar vorhanden ist
      cy.get('sc-99b3a5c-1 fgLGdv').should('exist');
  
      // Gib den Suchbegriff "Cypress" ein und drücke Enter
      cy.get('#APjFqb').type('Cypress{enter}');
    });
  });
  
  