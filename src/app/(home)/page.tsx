import { HeaderSection } from "./(sections)/Header/Header.view";
import { SellerQuoteSection } from "./(sections)/SellerQuote/SellerQuote.view";
import { MeetOurTeamSection } from "./(sections)/MeetOurTeam/MeetOurTeam.view";
import { BenefitsSection } from "./(sections)/Benefits/Benefits.view";
import { JobListingSection } from "./(sections)/JobListing/JobListing.view";

export default function Home() {
  return (
    <>
      <HeaderSection />

      <SellerQuoteSection />

      <MeetOurTeamSection />

      <BenefitsSection />

      <JobListingSection />
    </>
  );
}
