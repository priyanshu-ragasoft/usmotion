import Container from "../common/Container";

export default function Manifesto() {
  return (
    <section className="bg-brand-light pt-6 pb-16 sm:pt-8 sm:pb-20">
      <Container>
        <div className="flex items-center gap-3">
          <span className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-navy/30">01</span>
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">The studio</p>
        </div>

        <h2 className="mt-6 max-w-[18ch] font-heading text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-brand-navy sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Films made to hold the frame.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
          US Motion Studio is a production house for brands that need cinema — concept, direction,
          and finish with the same standard from the first frame to the final grade.
        </p>
      </Container>
    </section>
  );
}
