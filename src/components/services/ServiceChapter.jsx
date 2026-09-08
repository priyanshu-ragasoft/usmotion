import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function ServiceChapter({ service, index }) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <section className={index % 2 === 0 ? "bg-white" : "bg-brand-light"}>
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className={reversed ? "lg:order-2" : ""}>
          <p className="font-heading text-[11px] font-semibold tracking-[0.28em] text-brand-navy/30">{number}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            {service.title}
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-brand-muted">{service.copy}</p>

          <ul className="mt-8 space-y-3">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-brand-navy/85">
                <span className="h-px w-6 shrink-0 bg-brand-red" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to={service.relatedTo}
            className="mt-8 inline-flex text-sm font-semibold text-brand-navy underline-offset-4 hover:underline"
          >
            See related films
          </Link>
        </div>

        <div className={`overflow-hidden rounded-[1.15rem] ${reversed ? "lg:order-1" : ""}`}>
          <img src={service.image} alt="" className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]" />
        </div>
      </Container>
    </section>
  );
}
