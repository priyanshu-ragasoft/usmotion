import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function StartProject() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">
      <img
        src="/hero-banner-2.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />

      <Container className="relative">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-white/50 uppercase">09 — Start a project</p>
        <h2 className="mt-5 max-w-[14ch] font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Tell us the film you want to make
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
          Commercials, brand films, fashion, product, and documentary work — from the first conversation through the final grade.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex min-h-12 items-center rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(226,16,27,0.35)] transition hover:-translate-y-0.5 hover:bg-[#c50e18]"
        >
          Start a Project
        </Link>
      </Container>
    </section>
  );
}
