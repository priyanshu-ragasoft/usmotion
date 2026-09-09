import { Link } from "react-router-dom";
import Container from "../common/Container";
import { SERVICES } from "../../utils/constants";

export default function Capabilities() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Capabilities</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
            Pre-production through the final grade
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.id} className="rounded-[1.35rem] bg-white p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{service.description}</p>
              <ul className="mt-6 space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-navy/85">
                    <span className="h-px w-5 shrink-0 bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
        >
          Start a project with the studio
        </Link>
      </Container>
    </section>
  );
}
