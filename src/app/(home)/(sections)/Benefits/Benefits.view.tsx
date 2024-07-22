import Image from "next/image";
import styles from "./Benefits.module.css";

import { Link, Container } from "@/components";

export function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <Container>
        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Image
              src="/image-icon.png"
              alt="Ícone de joinha"
              width={136}
              height={136}
            />
          </div>
          <h4>Resultados</h4>
          <p>
            Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
            malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed
            id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque
            finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.
          </p>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Image
              src="/thumbs-up-icon.png"
              alt="Ícone de joinha"
              width={136}
              height={136}
            />
          </div>
          <h4>Qualidade de vida</h4>
          <p>
            Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
            malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.
          </p>

          <Link>dignissim quis</Link>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitIcon}>
            <Image
              src="/vault-icon.png"
              alt="Ícone de joinha"
              width={136}
              height={136}
            />
          </div>
          <h4>Nosso valores</h4>
          <p>
            Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
            malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed
            id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque
            finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.
          </p>
        </div>
      </Container>
    </section>
  );
}
