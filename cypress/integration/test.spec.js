// describe('Integration test with visual testing', function() {
//   it('Loads the homepage', function() {
//     // Load the page or perform any other interactions with the app.
//     cy.visit('http://localhost:8000/');

//     // Take a snapshot for visual diffing
//     cy.percySnapshot();
//   })
// )}

describe("visual testing", () => {
  it("loads homepage", () => {
    cy.visit("http://localhost:8000/");
    cy.percySnapshot();
  });
  it("loads brands page", () => {
    cy.visit("http://localhost:8000/brands");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads adjustable page", () => {
    cy.visit("http://localhost:8000/adjustable");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads accessories page", () => {
    cy.visit("http://localhost:8000/accessories");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads financing page", () => {
    cy.visit("http://localhost:8000/financing");
    cy.percySnapshot();
  });
  it("loads blog page", () => {
    cy.visit("http://localhost:8000/blog");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads about page", () => {
    cy.visit("http://localhost:8000/about");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads current sale page", () => {
    cy.visit("http://localhost:8000/current-sale");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads warranty page", () => {
    cy.visit("http://localhost:8000/warranty");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads sitemap page", () => {
    cy.visit("http://localhost:8000/sitemap");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads policies page", () => {
    cy.visit("http://localhost:8000/policies");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads tempurpedic page", () => {
    cy.visit("http://localhost:8000/brands/tempurpedic");
    cy.wait(500);
    cy.percySnapshot();
  });
  it("loads stearns page", () => {
    cy.visit("http://localhost:8000/brands/stearns");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads sealy page", () => {
    cy.visit("http://localhost:8000/brands/sealy");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads esc-mattress-center-wins-best-mattress-store-in-snohomish-county page", () => {
    cy.visit(
      "http://localhost:8000/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county",
    );
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads adjustable TEMPUR-Ergo-Extend page", () => {
    cy.visit("http://localhost:8000/adjustable/TEMPUR-Ergo-Extend");
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads (brands sealy) Golden-Elegance-Blakeslee-Firm page", () => {
    cy.visit(
      "http://localhost:8000/brands/sealy/Golden-Elegance-Blakeslee-Firm",
    );
    cy.wait(1000);
    cy.percySnapshot();
  });
  it("loads stearns landing page", () => {
    cy.visit("http://localhost:8000/landing/stearns");
    cy.wait(1000);
    cy.percySnapshot();
  });
});
