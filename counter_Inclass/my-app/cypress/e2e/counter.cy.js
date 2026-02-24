describe("Testing My Counter App", () => {
  const DELAY = 1500; // 1.5 Seconds

  beforeEach(() => {
    cy.visit("/");
    cy.wait(DELAY);
  });

  // ==========================================
  // SECTION 1: INITIAL STATE (3 Tests)
  // ==========================================
  describe("Checking the initial State ", () => {
    it("should display the counter component", () => {
      cy.get('[data-testid="counter-component"]').should("be.visible");
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 0"
      );
      cy.wait(DELAY);
    });

    it("should have input fields initialized to 0", () => {
      cy.get('[data-testid="value_inc"]').should("have.value", "0");
      cy.wait(DELAY);

      cy.get('[data-testid="value_dec"]').should("have.value", "0");
      cy.wait(DELAY);
    });

    it("should not render logs section initially", () => {
      cy.get('[data-testid="logs-section"]').should("not.exist");
      cy.wait(DELAY);
    });
  });

  // ==========================================
  // SECTION 2: INCREASE COUNTER (3 Tests)
  // ==========================================
  describe("Increase Counter", () => {
    it("should increase counter by entered value", () => {
      // clear and type 5
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.wait(DELAY);

      // click increase button
      cy.contains("Increase").click();
      cy.wait(DELAY);

      // verify counter updated
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 5"
      );
      cy.wait(DELAY);
    });

    it("should increase counter multiple times", () => {
      // First increase by 10
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 10"
      );
      cy.wait(DELAY);

      // Second increase by 25
      cy.get('[data-testid="value_inc"]').clear().type("25");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 35"
      );
      cy.wait(DELAY);
    });

    it("should reset input field after increase", () => {
      // enter 7
      cy.get('[data-testid="value_inc"]').clear().type("7");
      cy.wait(DELAY);

      // click increase
      cy.contains("Increase").click();
      cy.wait(DELAY);

      // verify input reset to 0
      cy.get('[data-testid="value_inc"]').should("have.value", "0");
      cy.wait(DELAY);
    });
  });

  // ==========================================
  // SECTION 3: DECREASE COUNTER (3 Tests)
  // ==========================================
  describe("Decrease Counter", () => {
    it("should decrease counter by entered value", () => {
      // enter 3
      cy.get('[data-testid="value_dec"]').clear().type("3");
      cy.wait(DELAY);

      // click decrease
      cy.contains("Decrease").click();
      cy.wait(DELAY);

      // verify counter = -3
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: -3"
      );
      cy.wait(DELAY);
    });

    it("should decrease counter from a positive value", () => {
      // first increase to 20
      cy.get('[data-testid="value_inc"]').clear().type("20");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 20"
      );
      cy.wait(DELAY);

      // now decrease by 8
      cy.get('[data-testid="value_dec"]').clear().type("8");
      cy.wait(DELAY);

      cy.contains("Decrease").click();
      cy.wait(DELAY);

      // verify counter = 12
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 12"
      );
      cy.wait(DELAY);
    });

    it("should reset input field after decrease", () => {
      // enter 5
      cy.get('[data-testid="value_dec"]').clear().type("5");
      cy.wait(DELAY);

      // click decrease
      cy.contains("Decrease").click();
      cy.wait(DELAY);

      // verify reset to 0
      cy.get('[data-testid="value_dec"]').should("have.value", "0");
      cy.wait(DELAY);
    });
  });

  // ==========================================
  // SECTION 4: LOGS FUNCTIONALITY (6 Tests)
  // ==========================================
  describe("Logs Functionality", () => {
    it("should show logs section after counter operation", () => {
      // logs section doesn't exist initially
      cy.get('[data-testid="logs-section"]').should("not.exist");
      cy.wait(DELAY);

      // create a log (increase by 5)
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // logs section should now be visible
      cy.get('[data-testid="logs-section"]').should("be.visible");
      cy.wait(DELAY);

      cy.contains("Show Logs").should("be.visible");
      cy.wait(DELAY);
    });

    it("should toggle logs visibility", () => {
      // create a log entry
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // toggle button should show "Show Logs"
      cy.contains("Show Logs").should("be.visible");
      cy.wait(DELAY);

      // show logs
      cy.contains("Show Logs").click();
      cy.wait(DELAY);

      // logs visible + button shows "Hide Logs"
      cy.get(".logs_container").should("be.visible");
      cy.wait(DELAY);

      cy.get(".logs_container .log_info").should("have.length.at.least", 1);
      cy.wait(DELAY);

      cy.contains("Hide Logs").should("be.visible");
      cy.wait(DELAY);

      // hide logs again
      cy.contains("Hide Logs").click();
      cy.wait(DELAY);

      // logs hidden + button back to "Show Logs"
      cy.get(".logs_container").should("not.exist");
      cy.wait(DELAY);

      cy.contains("Show Logs").should("be.visible");
      cy.wait(DELAY);
    });

    it("should display correct log information", () => {
      // increase by 15
      cy.get('[data-testid="value_inc"]').clear().type("15");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // show logs
      cy.contains("Show Logs").click();
      cy.wait(DELAY);

      // verify log text
      cy.get(".logs_container .log_info p")
        .first()
        .should("contain", "Previous Value = 0")
        .and("contain", "Value Added = 15")
        .and("contain", "New Value = 15");
      cy.wait(DELAY);
    });

    it("should delete log entry on click", () => {
      // create first log (+10)
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // create second log (+5)
      cy.get('[data-testid="value_inc"]').clear().type("5");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // show logs
      cy.contains("Show Logs").click();
      cy.wait(DELAY);

      // verify 2 log entries
      cy.get(".logs_container .log_info").should("have.length", 2);
      cy.wait(DELAY);

      // delete first log by clicking it
      cy.get(".logs_container .log_info").first().click();
      cy.wait(DELAY);

      // verify 1 log remains
      cy.get(".logs_container .log_info").should("have.length", 1);
      cy.wait(DELAY);
    });

    it("should hide logs section when all logs are deleted", () => {
      // create a single log
      cy.get('[data-testid="value_inc"]').clear().type("10");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // show logs
      cy.contains("Show Logs").click();
      cy.wait(DELAY);

      // delete the only log
      cy.get(".logs_container .log_info").first().click();
      cy.wait(DELAY);

      // logs section should disappear
      cy.get('[data-testid="logs-section"]').should("not.exist");
      cy.wait(DELAY);
    });
  });

  // ==========================================
  // SECTION 5: COMBINED OPERATIONS (1 Test)
  // ==========================================
  describe("Combined Operations", () => {
    it("should handle multiple increase and decrease operations", () => {
      // Increase by 50 => 50
      cy.get('[data-testid="value_inc"]').clear().type("50");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 50"
      );
      cy.wait(DELAY);

      // Decrease by 20 => 30
      cy.get('[data-testid="value_dec"]').clear().type("20");
      cy.wait(DELAY);

      cy.contains("Decrease").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 30"
      );
      cy.wait(DELAY);

      // Increase by 15 => 45
      cy.get('[data-testid="value_inc"]').clear().type("15");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 45"
      );
      cy.wait(DELAY);

      // Show logs
      cy.contains("Show Logs").click();
      cy.wait(DELAY);

      // Verify 3 log entries
      cy.get(".logs_container .log_info").should("have.length", 3);
      cy.wait(DELAY);
    });
  });

  // ==========================================
  // SECTION 6: EDGE CASES (2 Tests)
  // ==========================================
  describe("Edge Cases", () => {
    it("should not create log when clicking button with 0 value", () => {
      // Click increase without entering any value (incValue is 0 by default)
      cy.contains("Increase").click();
      cy.wait(DELAY);

      // Counter should stay at 0
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 0"
      );
      cy.wait(DELAY);

      // Logs section should NOT appear
      cy.get('[data-testid="logs-section"]').should("not.exist");
      cy.wait(DELAY);
    });

    it("should handle large numbers", () => {
      // Enter 9999 and increase
      cy.get('[data-testid="value_inc"]').clear().type("9999");
      cy.wait(DELAY);

      cy.contains("Increase").click();
      cy.wait(DELAY);

      // Verify counter shows 9999
      cy.get('[data-testid="counter-value"]').should(
        "contain",
        "Value of Counter: 9999"
      );
      cy.wait(DELAY);
    });
  });
});