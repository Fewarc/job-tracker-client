describe("Go to login page", () => {
  it("renders go to login button", () => {
    cy.visit("/");
    cy.get('[data-testid="go-to-login-button"]').should("exist");
  });

  it("can click go to login button", () => {
    cy.visit("/");
    cy.get('[data-testid="go-to-login-button"]').click();
    cy.url().should("include", "/login");
  });
});
