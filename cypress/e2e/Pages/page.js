class LoginPage {
  signin() {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  }
}

// export default new LoginPage();
export default new LoginPage();