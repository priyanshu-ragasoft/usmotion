import Container from "../common/Container";

export default function IndustryIntro({ industry }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Industry</p>
        <h1 className="mt-3 max-w-[12ch] font-heading text-4xl font-bold tracking-tight text-brand-navy sm:text-6xl">
          {industry.name}
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-brand-muted">{industry.intro}</p>
      </Container>
    </section>
  );
}
