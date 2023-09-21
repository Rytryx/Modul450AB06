describe('Creating Flashcard', () => {
    it('should open browser and search for "Amazona"', () => {
      cy.visit('http://localhost:9000');
      cy.get('#question').type('How long did u have for this Task?');
      cy.get('#answer').type('way to long!!!!!');
      cy.get('#add-card-button').click();
      cy.get('#card-0').should('exist');
    });
  });

describe('Editing Flashcards', () => {
    it('should open browser and search for "Amazona"', () => {
      cy.visit('http://localhost:9000');
      cy.get('#question').type('How long did u have for this Task?');
      cy.get('#answer').type('way to long!!!!!');
      cy.get('#add-card-button').click();
      cy.get('#rate-good-button-0').click();
      cy.get('#edit-card-button-0').click();
      cy.get('#input-question-0').clear();
      cy.get('#input-question-0').type('How long till the next Vacation?');
      cy.get('#input-answer-0').clear();
      cy.get('#input-answer-0').type('4 Days');
      cy.get('#save-edit-button-0').click();
      cy.get('#card-question-0').should('exist');
   });
  });

  describe('Deleting Flashcards', () => {
    it('should open browser and search for "Amazona"', () => {
      cy.visit('http://localhost:9000');
      cy.get('#question').type('How long did u have for this Task?');
      cy.get('#answer').type('way to long!!!!!');
      cy.get('#add-card-button').click();
      cy.get('#rate-good-button-0').click();
      cy.get('#delete-card-button-0').click();
      cy.get('#card-question-0').should('not.exist');
   });
  });

  describe('Showing answers to Flashcards', () => {
    it('should open browser and search for "Amazona"', () => {
      cy.visit('http://localhost:9000');
      cy.get('#question').type('How long did u have for this Task?');
      cy.get('#answer').type('way to long!!!!!');
      cy.get('#add-card-button').click();
      cy.get('#rate-good-button-0').click();
      cy.get('#toggle-answer-button-0').click();
      cy.get('#toggle-answer-button-0').click();
   });
  });
  