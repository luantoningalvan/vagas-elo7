"use client";

import styles from "./JobListing.module.css";
import { SearchIcon } from "@/components/icons/searchIcon";
import { Container } from "@/components";
import { useJobListeningController } from "./JobListening.controller";
import { Pagination } from "@/components/Pagination/Pagination.view";
import { JOBS_PER_PAGE } from "@/common/constant/pagination";

export function JobListingSection() {
  const { handleSearch, handleChangePage, jobs, filters } =
    useJobListeningController();

  return (
    <section className={styles.jobsSections} id="vagas">
      <div className={styles.jobsBanner}></div>

      <Container>
        <div className={styles.jobsHeader}>
          <h3>Vagas em aberto</h3>
          <form onSubmit={handleSearch} role="search">
            <div className={styles.inputWithIcon} role="searchbox">
              <input
                type="text"
                placeholder="Pesquisar vagas"
                inputMode="search"
                name="search"
              />
              <SearchIcon />
            </div>
          </form>
        </div>

        <div className={styles.jobsList}>
          {jobs.rows.map((job) => (
            <div key={job.title} className={styles.jobRow}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
            </div>
          ))}
        </div>

        {jobs.count > JOBS_PER_PAGE && (
          <Pagination
            total={jobs.count}
            page={filters.page}
            perPage={JOBS_PER_PAGE}
            onChange={(page) => handleChangePage(page)}
          />
        )}
      </Container>
    </section>
  );
}
