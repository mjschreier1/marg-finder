describe("Marg-Finder Application", () => {

	it("has a header component rendered with the h1 of the app title", () => {
		cy.visit("/")
		cy.get("header h1").eq(0)
      .should("contain", "Marg")
    cy.get("header h1").eq(1)
      .should("contain", "Finder")
	})

	it("renders a <ul> with at least 5 <li> when #findDrinks is clicked", () => {
    cy.get("ul li")
      .should("not.exist")
      
		cy.get("#findDrinks")
			.click()

		cy.get("ul")
			.find("li")
			.should("have.length.at.least", 5)
	})

  // it("renders a minimum of 5 margs sorted by proximity when #findDrinks is clicked", () => {
  //   cy.get("#findDrinks")
  //     .click()

  //   cy.get("ul")
  //     .find("li")
  //     .should("have.length.at.least", 5)

  //   cy.get(':nth-child(1) > .ListArea__PaddingRight__287gz > span')
  //     .then($num0 => {
  //       const num0 = $num.text().split(" ")[0]

  //       cy.get(':nth-child(2) > .ListArea__PaddingRight__287gz > span')
  //         .should($num1 => {
  //           expect($num1.text().split(" ")[0]).to.be.greaterThan(num0)
  //         })
  //     })

  //   cy.get(':nth-child(2) > .ListArea__PaddingRight__287gz > span')
  //     .then($num1 => {
  //       const num1 = $num.text().split(" ")[0];

  //       cy.get(':nth-child(3) > .ListArea__PaddingRight__287gz > span')
  //         .should($num2 => {
  //           expect($num2.text().split(" ")[0]).to.be.greaterThan(num1)
  //         })
  //     })

  //   cy.get(':nth-child(3) > .ListArea__PaddingRight__287gz > span')
  //     .then($num2 => {
  //       const num2 = $num.text().split(" ")[0];

  //       cy.get(':nth-child(4) > .ListArea__PaddingRight__287gz > span')
  //         .should($num3 => {
  //           expect($num3.text().split(" ")[0]).to.be.greaterThan(num2)
  //         })
  //     })

  //   cy.get(':nth-child(4) > .ListArea__PaddingRight__287gz > span')
  //     .then($num3 => {
  //       const num3 = $num.text().split(" ")[0];

  //       cy.get(':nth-child(5) > .ListArea__PaddingRight__287gz > span')
  //         .should($num4 => {
  //           expect($num4.text().split(" ")[0]).to.be.greaterThan(num3)
  //         })
  //     })
  // })

  it("has a map (from gmaps.js)", () => {
    cy.get("main div").eq(0)
      .should("have.attr", "class", "MargMap__Map__cHES7")
  })

  it("allows users to add a new location for a margarita", () => {
    cy.get("header #addMarg")
      .should("exist")
      .click()

    cy.get("#modal")
      .should("be.visible")

    cy.get("#modal form")
      .should("be.visible")

    cy.get("header")
      .should("exist")

    cy.get("#modal form input").eq(0)
      .should("have.attr", "name", "name")
    
    cy.get("#modal form input").eq(1)
      .should("have.attr", "name", "rating")

    cy.get("#modal form input").eq(2)
      .should("have.attr", "name", "address")

    cy.get("#modal form input").eq(0)
      .type("Machete")

    cy.get("#modal form input").eq(1)
      .type("5")

    cy.get("#modal form input").eq(2)
      .type("2817 E 3rd Ave")

    cy.get("#modal form #submitForm")
      .click()

    cy.get("#addMargSpinner")
      .should("be.visible")
    
    cy.get("#modal form p")
      .should("contain", "Marg added successfully")

    cy.exec("cd ../marg_back_end && knex seed:run")

    cy.request("GET", "http://localhost:3000/v1/establishments/20")
      .then(response => {
          expect(response.body).to.have.property("name", "machete");
          expect(response.body).to.have.property("rating", "5");
          expect(response.body).to.have.property("address", "2817 E 3rd Ave");
      })
  })

})
