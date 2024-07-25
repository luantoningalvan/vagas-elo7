import {
  GET_JOBS_RESPONSE_MOCK,
  GET_JOBS_RESPONSE_MOCK_PG2,
} from "../../src/common/mocks/responses";

describe("template spec", () => {
  it("should visit page", () => {
    cy.intercept(
      {
        method: "GET",
        hostname: "localhost",
        pathname: "/jobs",
        query: {
          page: "1",
        },
      },
      {
        statusCode: 200,
        body: GET_JOBS_RESPONSE_MOCK,
      }
    ).as("getJobsPage1");

    cy.visit("http://localhost:3000");

    cy.wait("@getJobsPage1");

    // find jobs link
    cy.get("a[href='#vagas']").click();
  });

  it("should search for a job and paginate", () => {
    cy.intercept(
      {
        method: "GET",
        hostname: "localhost",
        pathname: "/jobs",
        query: {
          page: "1",
        },
      },
      {
        statusCode: 200,
        body: GET_JOBS_RESPONSE_MOCK,
      }
    ).as("getJobsPage1");

    cy.intercept(
      {
        method: "GET",
        hostname: "localhost",
        pathname: "/jobs",
        query: {
          page: "2",
        },
      },
      {
        statusCode: 200,
        body: GET_JOBS_RESPONSE_MOCK_PG2,
      }
    ).as("getJobsPage2");

    cy.visit("http://localhost:3000");

    cy.wait("@getJobsPage1");

    // find jobs link
    cy.get("input[data-testid=search-input]").type("dev").type("{enter}");

    cy.wait("@getJobsPage1");

    // find pagination
    cy.get("button").contains("2").click();

    cy.wait("@getJobsPage2");
  });

  it("should display an error message", () => {
    cy.intercept(
      {
        method: "GET",
        hostname: "localhost",
        pathname: "/jobs",
      },
      {
        statusCode: 500,
      }
    ).as("getJobsError");

    cy.visit("http://localhost:3000");

    cy.wait("@getJobsError");

    // find for error message
    cy.get("p").contains(
      "Ocorreu um erro ao carregar as vagas. Tente novamente."
    );
  });
});
