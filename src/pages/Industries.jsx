import IndustriesHero from "../components/industries/IndustriesHero";
import IndustryGrid from "../components/industries/IndustryGrid";
import Container from "../components/common/Container";
import StartProject from "../components/home/StartProject";

export default function Industries() {
  return (
    <>
      <IndustriesHero />
      <section className="bg-brand-light py-16 sm:py-24">
        <Container>
          <IndustryGrid />
        </Container>
      </section>
      <StartProject />
    </>
  );
}
