import { HeaderSection } from "./(sections)/Header/Header.view";
import { SellerQuoteSection } from "./(sections)/SellerQuote/SellerQuote.view";
import { MeetOurTeamSection } from "./(sections)/MeetOurTeam/MeetOurTeam.view";
export default function Home() {
  return (
    <>
      <HeaderSection />

      <SellerQuoteSection />

      <MeetOurTeamSection />
    </>
  );
}
