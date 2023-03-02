/// <reference types="cypress" />

describe("MyAccountPage", () => {
  beforeEach(() => {
    cy.visit("https://shop.demoqa.com/my-account");
  });

  //Test Case_Register option 1_Register using valid user credentials

  it("Register using valid user credentials", () => {
    cy.get("#reg_username").type("amraturalic");
    cy.get("#reg_email").type("amraturalic@gmail.com");
    cy.get("#reg_password").type("absmhtzjvujk");
    cy.get(".woocommerce-Button").click();
  });

  //Test Case_Login option 1_Login using valid username and password

  it("Login using valid username and password", () => {
    cy.get("#username").type("amraturalic");
    cy.get("#password").type("absmhtzjvujk");
    cy.get(":nth-child(3) > .woocommerce-button").click();
  });

  //Test Case_Login option 2_Login using valid email and password

  it("Login using valid email and password", () => {
    cy.get("#username").type("amraturalic@gmail.com");
    cy.get("#password").type("absmhtzjvujk");
    cy.get(":nth-child(3) > .woocommerce-button").click();
  });

  //Test Case_Login option 5_Login using invalid password

  it("Login using invalid password", () => {
    cy.get("#username").type("amraturalic@gmail.com");
    cy.get("#password").type("absmhahdbdz");
    cy.get(":nth-child(3) > .woocommerce-button").click();
  });
});

describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("https://shop.demoqa.com/");
  });

  //Test Case_Home page 1_Search for an existing item

  it("Search for and existing item", () => {
    cy.get(".noo-search > .icon_search").click();
    cy.get(".form-control").type("shirt").type("{enter}");
  });

  //Test Case_Home page 6_Open shop page

  it("Open shop page", () => {
    cy.get(
      ":nth-child(3) > .vc_row > .vc_col-lg-5 > .vc_column-inner > .wpb_wrapper > .noo_simple_banner > .attachment-full"
    ).click();
  });

  //Test Case_Item page 1_See item details when clicking on it

  it("See item details when clicking on it", () => {
    cy.get(".post-1497 > .noo-product-inner > h3").click();
  });
});
