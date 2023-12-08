// cypress/integration/all-hooks-example.js

describe('All Hooks Example', () => {
    before(() => {
      // Code to run once before all tests
      cy.log('Before All Tests');
    });
  
    beforeEach(() => {
      // Code to run before each test
      cy.log('Before Each Test');
    });
  
    afterEach(() => {
      // Code to run after each test
      cy.log('After Each Test');
    });
  
    after(() => {
      // Code to run once after all tests
      cy.log('After All Tests');
    });
  
    it('Test 1', () => {
      cy.log('Test 1');
      // Test 1 logic
    });
  
    it('Test 2', () => {
      cy.log('Test 2');
      // Test 2 logic
    });
  
    it('Test 3', () => {
      cy.log('Test 3');
      // Test 3 logic
    });
  });
  