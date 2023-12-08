describe('My First Cypress Test', () => {
    // It block defines a test case
    it('Visits a website and asserts element existence', () => {
      // Visit a website (replace with your website URL)
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('have.text','Username')
    });
  });
  
