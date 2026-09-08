import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "../../utils/constants";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

export default function IndustriesPreview() {
  return (
    <section className="bg-brand-dark py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Sectors"
          title="Industries we film for"
          description="Campaigns and brand films across automotive, fashion, technology, and the categories in between."
          tone="light"
          actionTo="/industries"
          actionLabel="Explore industries"
        />

        <div className="border-t border-white/10">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              to={industry.to}
              className="group flex items-center justify-between border-b border-white/10 py-5 transition sm:py-6"
            >
              <span className="font-heading text-xl font-semibold tracking-tight text-white/80 transition group-hover:text-white sm:text-2xl">
                {industry.name}
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/25 transition group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
