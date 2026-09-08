import { SERVICES } from "../../utils/constants";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="What we do"
          title="From first frame to final grade"
          description="One studio across pre-production, production, and post — so the film stays coherent from concept to delivery."
          actionTo="/services"
          actionLabel="All services"
        />

        <div className="grid md:grid-cols-3 md:divide-x md:divide-black/8">
          {SERVICES.map((service, index) => (
            <article key={service.title} className="py-2 md:px-8 md:first:pl-0 md:last:pr-0">
              <p className="font-heading text-5xl font-extrabold tracking-tight text-brand-navy/10 sm:text-6xl">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-brand-navy">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{service.description}</p>
              <ul className="mt-7 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-navy/80">
                    <span className="h-px w-5 shrink-0 bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
