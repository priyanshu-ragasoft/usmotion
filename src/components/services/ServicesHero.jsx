import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark pt-28">
      <img src="/laptop.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />

      <Container className="relative py-20 sm:py-28">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">What we do</p>
        <h1 className="mt-4 max-w-[14ch] font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          From first frame to final grade
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-white/65 sm:text-lg">
          One production house across pre-production, production, and post — so the film stays coherent from concept through delivery.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex min-h-12 items-center rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c50e18]"
        >
          Start a Project
        </Link>
      </Container>
    </section>
  );
}
