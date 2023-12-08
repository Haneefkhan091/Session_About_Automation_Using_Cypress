describe("My First Cypress Test", () => {
  beforeEach("hooks", () => {
    cy.visit("/login");
  });

  it("Visits a website and asserts element existence", () => {
    cy.get(
      ":nth-child(2) > .oxd-wq-group > .oxd-input-group__label-wrapper > .oxd-label"
    ).should("have.text", "Username");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin",{log:false});
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123',{log:false})
    cy.get('.oxd-button').click()
  });

  it.only("Visits a website and asserts element existence", () => {

    cy.get(
      "input[placeholder='Username']"
    ).type("Admin",{log:false});
    cy.get("input[placeholder='Password']").type('admin123',{log:false})
    cy.get('.oxd-button').click({force:true})
    cy.get('.oxd-brand-banner > img',{timeout:1000}).should('not.be.visible')
  });
  // it("Visits a website and asserts element existence", () => {});



});
