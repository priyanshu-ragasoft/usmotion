import { Link } from "react-router-dom";
import Container from "../common/Container";
import { SERVICES } from "../../utils/constants";

export default function IndustryServices({ serviceIds }) {
  const related = SERVICES.filter((service) => serviceIds.includes(service.id));

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Related services</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy sm:text-4xl">How we make the work</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="rounded-2xl border border-black/8 bg-brand-light p-6 transition hover:border-brand-navy/20"
            >
              <h3 className="font-heading text-xl font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{service.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
