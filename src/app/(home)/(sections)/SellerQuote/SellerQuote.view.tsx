import Image from "next/image";
import styles from "./SellerQuote.module.css";

import { Container } from "@/components";

export function SellerQuoteSection() {
  return (
    <section className={styles.sellerQuoteSection}>
      <Container>
        <Image
          src="/seller-quote.png"
          alt="Mulher trabalhando com artesanato sob uma mesa"
          width={644}
          height={264}
        />
        <div>
          <h3>Palavra da vendedora</h3>
          <span>Sed rutrum condimentum</span>
          <q>
            Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
            malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed
            id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque
            finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam
            mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue
            neque nulla vehicula purus.
          </q>
        </div>
      </Container>
    </section>
  );
}
