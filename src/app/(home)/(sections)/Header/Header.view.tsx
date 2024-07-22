import styles from "./Header.module.css";

import { Link, Container } from "@/components";

export function HeaderSection() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBg}>
        <h2>trabalhe na elo7</h2>
      </div>

      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          viverra orci. Praesent consequat dolor tellus, eget viverra risus
          hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque
          libero eu eros sagittis.
        </p>

        <hr />

        <Link href="#vagas">vagas em aberto</Link>
      </Container>
    </header>
  );
}
