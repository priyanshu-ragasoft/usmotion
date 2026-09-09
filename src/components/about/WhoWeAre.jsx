import Container from "../common/Container";
import { ABOUT_STATS } from "../../utils/constants";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Who we are</p>
            <h2 className="mt-4 max-w-[16ch] font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
              Films made with craft, not volume
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-brand-muted">
              We are a production house for brands that need cinema. Lighting, pace, performance, and finish
              stay on one line — from the first conversation through the final grade.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-brand-muted">
              Commercials, brand films, fashion, product, and documentary work are all held to the same standard.
              The brief changes. The discipline does not.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.35rem]">
            <img src="/hero-banner.png" alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/8 sm:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="bg-brand-light px-5 py-7 sm:px-6 sm:py-8">
              <p className="font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-brand-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
