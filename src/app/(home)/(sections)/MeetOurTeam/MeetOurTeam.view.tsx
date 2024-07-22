import Image from "next/image";
import styles from "./MeetOurTeam.module.css";

import { Container } from "@/components";

export function MeetOurTeamSection() {
  return (
    <section className={styles.meetOurTeamSection}>
      <Container>
        <h3>Conheça nosso time fora de série</h3>

        <div className={styles.teamMembersGrid}>
          <Image
            src="/team-member-1.png"
            alt="Foto de uma colaboradora mulher"
            width={320}
            height={183}
          />
          <Image
            src="/team-member-2.png"
            alt="Foto de uma colaboradora mulher"
            width={320}
            height={183}
          />
          <Image
            src="/team-member-3.png"
            alt="Foto de uma colaboradora mulher"
            width={320}
            height={183}
          />
          <Image
            src="/team-member-4.png"
            alt="Foto de uma colaboradora mulher"
            width={320}
            height={183}
          />
        </div>
      </Container>
    </section>
  );
}
