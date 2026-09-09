import Container from "../common/Container";
import { STUDIO_CONTACT } from "../../utils/constants";

export default function Locations() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Locations</p>
        <h2 className="mt-4 max-w-[16ch] font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
          Production across cities
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-brand-muted">
          The studio bases in Los Angeles, with crews and finishing for work wherever the film needs to be made.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {STUDIO_CONTACT.locations.map((place) => (
            <article key={place.city} className="rounded-[1.35rem] border border-black/6 bg-brand-light p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-navy">{place.city}</h3>
              <p className="mt-2 text-sm text-brand-muted">{place.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
