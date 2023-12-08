describe("session", () => {
  beforeEach("Visit the site", () => {
    
    cy.loginSession();
  });

  it("Visits a website and asserts element existence", () => {
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    // );

    cy.get(":nth-child(5) > .oxd-main-menu-item").click;
  });

  it("test", () => {
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    // );
    cy.get(":nth-child(7) > .oxd-main-menu-item").should('contain')
  });
});
