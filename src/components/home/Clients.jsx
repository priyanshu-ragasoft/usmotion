import { CLIENTS } from "../../utils/constants";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

export default function Clients() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden bg-brand-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Collaborations"
          title="Trusted by brands in motion"
          align="center"
        />
      </Container>

      <div className="relative mt-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-light to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-light to-transparent sm:w-28" />
        <div className="brand-marquee flex w-max gap-3 pr-3">
          {loop.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex h-[4.75rem] w-[11.5rem] shrink-0 items-center justify-center rounded-2xl border border-black/6 bg-white sm:h-20 sm:w-52"
            >
              <span className="font-heading text-sm font-bold tracking-[0.22em] text-brand-navy/40 uppercase sm:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
