import Container from "../common/Container";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy pt-28">
      <img src="/hero-banner-2.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />

      <Container className="relative py-20 sm:py-28">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-white/50 uppercase">Start a project</p>
        <h1 className="mt-4 max-w-[12ch] font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Begin with the brief
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-white/65 sm:text-lg">
          Commercials, brand films, fashion, product, and documentary work — from the first conversation through the final grade.
        </p>
      </Container>
    </section>
  );
}
