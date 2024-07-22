import styles from "./JobListing.module.css";

import { SearchIcon } from "@/components/icons/searchIcon";
import { Container } from "@/components";
import axios from "axios";
import { Job } from "@/common/interface/Jobs";

export async function JobListingSection() {
  const { data: jobs } = await axios.get<Job[]>("http://localhost:3000/jobs");

  return (
    <section className={styles.jobsSections}>
      <div className={styles.jobsBanner}></div>

      <Container>
        <div className={styles.jobsHeader}>
          <h3>Vagas em aberto</h3>
          <div className={styles.inputWithIcon}>
            <input type="text" placeholder="Pesquisar vagas" />
            <SearchIcon />
          </div>
        </div>

        <div className={styles.jobsList}>
          {jobs.map((job) => (
            <div key={job.title} className={styles.jobRow}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
