describe("Marg-Finder Application", () => {

	it("has a header component rendered with the h1 of the app title", () => {
		cy.visit("/")
		cy.get("header h1")
			.should("contain", "Margarita-Finder")
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

	it("displays an error message prompting the user to enable geo-location if #findDrinks is clicked with geo-location disabled", () => {
		cy.request("GET", "http://localhost:3000/margs/undefined/undefined")
			.then(response => {
        expect(response.body).to.have.property("message", "Please enable geo-location and try again")
      })
  })

  it("renders a minimum of 5 margs sorted by proximity when #findDrinks is clicked", () => {
    cy.get("#findDrinks")
      .click()

    cy.get("ul")
      .find("li")
      .should("have.length.at.least", 5)

    cy.get("ul li span").eq(0)
      .then($num0 => {
        const num0 = $num.text()

        cy.get("ul li span").eq(0)
          .should($num1 => {
            expect($num1.text()).to.be.greaterThan(num0)
          })
      })

    cy.get("ul li span").eq(1)
      .then($num1 => {
        const num1 = $num.text()

        cy.get("ul li span").eq(2)
          .should($num2 => {
            expect($num2.text()).to.be.greaterThan(num1)
          })
      })

    cy.get("ul li span").eq(2)
      .then($num2 => {
        const num2 = $num.text()

        cy.get("ul li span").eq(3)
          .should($num3 => {
            expect($num3.text()).to.be.greaterThan(num2)
          })
      })

    cy.get("ul li span").eq(3)
      .then($num3 => {
        const num3 = $num.text()

        cy.get("ul li span").eq(4)
          .should($num4 => {
            expect($num4.text()).to.be.greaterThan(num3)
          })
      })
  })

  it("has a map (from gmaps.js)", () => {
    cy.get("#map")
      .should("exist")
  })

  it("has at least 5 pin images rendered on the map", () => {
    cy.get("#map img")
      .should("have.length.at.least", 5)
  })

  // Apologies to anyone reading the janky code that follows, as Cypress does not play well with the maps library we used.
  it("renders an info bubble on the map when a pin is clicked", () => {
    expect(confirm("Are info bubbles present on the map when a pin is clicked?")).to.equal(true)
  })

  it("renders an h2 with the establishment name and an img with the rating in the info bubble when a pin is clicked", () => {
    expect(confirm("Does the map render an h2 with the establishment name and an img with the rating in the info bubble when a pin is clicked?")).to.equal(true)
  })

  it("dismounts the info bubble from the DOM when the 'X' is clicked", () => {
    expect(confirm("Does the info bubble dismount from the DOM when the 'X' is clicked?")).to.equal(true)
  })

  it("renders a modal over the page with the page darkened in the background when the 'More Info' button on the info bubble is clicked", () => {
    expect(confirm("Does a modal render over the page with the page darkened in the background when the 'More Info' button on the info bubble is clicked?")).to.equal(true)
  })

  it("renders an h2 with the establishment name, an img with the rating, a p-tag with the address, a p-tag with the phone number (or 'Phone Number Unavailable'), a p-tag with the website link (or 'Website Link Unavailable'), and a p-tag with the marg description (or 'No Description Available') in the modal", () => {
    expect(confirm("Does the modal include an h2 with the establishment name, an img with the rating, a p-tag with the address, a p-tag with the phone number (or 'Phone Number Unavailable'), a p-tag with the website link (or 'Website Link Unavailable'), and a p-tag with the marg description (or 'No Description Available')?")).to.equal(true)
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
