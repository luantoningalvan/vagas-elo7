import { act, renderHook, waitFor } from "@testing-library/react";
import { useJobJobListingController } from "./JobListing.controller";
import {
  getJobsError,
  getJobsSuccess,
  resetMocks,
} from "../../../../common/mocks/requests";

describe("useJobJobListingController", () => {
  afterEach(() => {
    resetMocks();
  });

  it("should fetch jobs on init", async () => {
    getJobsSuccess();

    const { result } = renderHook(() => useJobJobListingController());

    expect(result.current).toHaveProperty("jobs");

    await waitFor(() => {
      expect(result.current.jobs.count).toBe(7);
    });
  });

  it("should be able to search for a job", async () => {
    getJobsSuccess();

    const { result, rerender } = renderHook(() => useJobJobListingController());

    const fakeForm = document.createElement("form");

    fakeForm.innerHTML = `
      <input type="text" name="search" value="Frontend Developer" />
    `;

    act(() => {
      result.current.handleSearch({
        preventDefault: jest.fn(),
        currentTarget: fakeForm,
      } as any);
    });

    rerender();

    expect(result.current.filters.search).toBe("Frontend Developer");
    expect(result.current.filters.page).toBe(1);

    await waitFor(() => {
      expect(result.current.jobs.count).toBe(7);
    });
  });

  it("should be able to change page", async () => {
    getJobsSuccess();

    const { result, rerender } = renderHook(() => useJobJobListingController());

    act(() => {
      result.current.handleChangePage(2);
    });

    rerender();

    expect(result.current.filters.page).toBe(2);

    await waitFor(() => {
      expect(result.current.jobs.count).toBe(7);
    });
  });

  it("should be display an error", async () => {
    getJobsError();

    const { result } = renderHook(() => useJobJobListingController());

    expect(result.current).toHaveProperty("jobs");

    await waitFor(() => {
      expect(result.current.error).toBe("Request failed with status code 500");
    });
  });
});
