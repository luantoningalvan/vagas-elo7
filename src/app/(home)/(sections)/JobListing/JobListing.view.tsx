"use client";

import styles from "./JobListing.module.css";
import { SearchIcon } from "@/components/icons/searchIcon";
import { Container } from "@/components";
import { useJobJobListingController } from "./JobListing.controller";
import { Pagination } from "@/components/Pagination/Pagination.view";
import { JOBS_PER_PAGE } from "@/common/constant/pagination";

export function JobListingSection() {
  const {
    handleSearch,
    handleFetchJobs,
    handleChangePage,
    jobs,
    filters,
    loading,
    error,
  } = useJobJobListingController();

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

        {!!error && (
          <div className={styles.errorStatus}>
            <p>Ocorreu um erro ao carregar as vagas. Tente novamente.</p>

            <button
              onClick={handleFetchJobs}
              className={styles.retryButton}
              disabled={loading}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!error && (
          <div>
            <div className={styles.jobsList}>
              {jobs.rows.map((job) => (
                <div key={job.title} className={styles.jobRow}>
                  <h4>{job.title}</h4>
                  <p>{job.location}</p>
                </div>
              ))}
            </div>

            {loading && (
              <div className={styles.loadingStatus}>
                <p>Carregando vagas...</p>
              </div>
            )}

            {jobs.count > JOBS_PER_PAGE && (
              <Pagination
                total={jobs.count}
                page={filters.page}
                perPage={JOBS_PER_PAGE}
                onChange={(page) => handleChangePage(page)}
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
