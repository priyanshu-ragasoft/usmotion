import Container from "../common/Container";
import { APPROACH } from "../../utils/constants";

export default function Approach() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Creative approach</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
            Vision, mission, and how we work
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.35rem] bg-brand-navy p-8 sm:p-10">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-white/40 uppercase">Vision</p>
            <p className="mt-4 font-heading text-2xl font-bold leading-snug text-white">
              To be the production house brands trust when the film has to last.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-black/6 bg-brand-light p-8 sm:p-10">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-navy/35 uppercase">Mission</p>
            <p className="mt-4 font-heading text-2xl font-bold leading-snug text-brand-navy">
              Make cinematic work with clear direction, rigorous production, and an in-house finish.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {APPROACH.map((item, index) => (
            <article key={item.title} className="rounded-[1.35rem] border border-black/6 p-7">
              <p className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-navy/30">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
