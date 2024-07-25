import React from "react";
import api from "@/services/api";
import { Job } from "@/common/interface/Jobs";

interface JobsData {
  rows: Job[];
  count: number;
}

export function useJobJobListingController() {
  const [jobs, setJobs] = React.useState<JobsData>({
    rows: [],
    count: 0,
  });

  const [filters, setFilters] = React.useState({
    page: 1,
    search: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleFetchJobs = React.useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/jobs", {
        params: {
          page: filters.page,
          ...(filters.search && { search: filters.search }),
        },
      });

      setError("");
      setJobs(response.data);
    } catch (error) {
      setError((error as Error)?.message);
    } finally {
      setLoading(false);
    }
  }, [filters.page, filters.search]);

  const handleSearch = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);

      setFilters({
        page: 1,
        search: data.get("search") as string,
      });
    },
    []
  );

  const handleChangePage = React.useCallback((page: number) => {
    setFilters((state) => ({
      ...state,
      page,
    }));
  }, []);

  React.useEffect(() => {
    handleFetchJobs();
  }, [handleFetchJobs]);

  return {
    jobs,
    handleFetchJobs,
    handleSearch,
    handleChangePage,
    filters,
    loading,
    error,
  };
}
