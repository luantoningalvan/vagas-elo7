import { render, screen, waitFor } from "@testing-library/react";
import { getJobsSuccess, resetMocks } from "../../../../common/mocks/requests";
import { JobListingSection } from "./JobListing.view";

describe("useJobJobListingController", () => {
  afterEach(() => {
    resetMocks();
  });

  it("should fetch jobs on init", async () => {
    getJobsSuccess();

    render(<JobListingSection />);

    await waitFor(() => {
      expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    });
  });
});
