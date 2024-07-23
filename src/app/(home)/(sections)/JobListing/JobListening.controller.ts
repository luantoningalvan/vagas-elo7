import React from "react";
import api from "@/services/api";
import { Job } from "@/common/interface/Jobs";

interface JobsData {
  rows: Job[];
  count: number;
}

export function useJobListeningController() {
  const [jobs, setJobs] = React.useState<JobsData>({
    rows: [],
    count: 0,
  });

  const [filters, setFilters] = React.useState({
    page: 1,
    search: "",
  });

  const handleFetchJobs = React.useCallback(async () => {
    const response = await api.get("/jobs", {
      params: {
        page: filters.page,
        search: filters.search,
      },
    });

    setJobs(response.data);
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
    handleSearch,
    handleChangePage,
    filters,
  };
}
