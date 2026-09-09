import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

import { ABOUT_STATS } from "../../utils/constants";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-navy/30">08</span>
              <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">The studio</p>
            </div>
            <h2 className="mt-4 max-w-[16ch] font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
              A production house built for cinematic work
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-brand-muted">
              We are not a content mill. US Motion Studio shapes brand films with the discipline of a
              production house — lighting, pace, performance, and finish held to one standard.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Read the studio story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[1.35rem]">
            <img src="/hero-banner.png" alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 to-transparent" />
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
