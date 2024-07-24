import { GET_JOBS_RESPONSE_MOCK } from "../../src/common/mocks/responses";

describe("template spec", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        hostname: "localhost",
        pathname: "/jobs",
      },
      {
        statusCode: 200,
        body: GET_JOBS_RESPONSE_MOCK,
      }
    ).as("getJobs");
  });

  it("should visit page", () => {
    cy.visit("http://localhost:3000");

    cy.wait("@getJobs");
  });
});
