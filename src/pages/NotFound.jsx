import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-brand-dark pt-28">
      <img
        src="/hero-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/88 to-brand-dark/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-brand-dark/50" />

      <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-[1280px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-10">
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Error 404</p>
        <p className="mt-5 font-display text-[6.5rem] leading-none tracking-[-0.06em] text-white sm:text-[9rem] lg:text-[11rem]">
          404
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
          This frame is missing.
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-[1.7] text-white/60">
          The page you are looking for is not in the reel. It may have moved, or it was never cut into this site.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c50e18]"
          >
            Back to Home
          </Link>
          <Link
            to="/videos"
            className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
          >
            Browse films
          </Link>
        </div>
      </div>
    </section>
  );
}
