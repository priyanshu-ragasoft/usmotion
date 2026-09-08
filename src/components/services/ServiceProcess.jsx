import Container from "../common/Container";
import { SERVICES } from "../../utils/constants";

export default function ServiceProcess() {
  return (
    <section className="border-y border-black/6 bg-brand-light">
      <Container className="grid divide-y divide-black/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {SERVICES.map((service, index) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="px-2 py-7 text-center transition hover:bg-white sm:py-9"
          >
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-red">
              0{index + 1}
            </p>
            <p className="mt-2 font-heading text-lg font-bold text-brand-navy">{service.title}</p>
            <p className="mt-1 text-sm text-brand-muted">{service.description}</p>
          </a>
        ))}
      </Container>
    </section>
  );
}
