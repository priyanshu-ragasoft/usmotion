import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_VIDEOS, videoPoster } from "../../utils/constants";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

const WORK = FEATURED_VIDEOS.slice(0, 3).map((video) => ({
  ...video,
  image: videoPoster(video),
}));

export default function SelectedWork() {
  const [lead, ...rest] = WORK;

  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Portfolio"
          title="Selected work"
          description="Recent films shaped through concept, production, and post — made to hold on a large screen."
          actionTo="/videos"
          actionLabel="View all films"
        />

        <Link to={`/videos/${lead.id}`} className="group relative block overflow-hidden rounded-[1.35rem] bg-neutral-200">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={lead.image}
              alt={lead.title}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 sm:p-10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/65 uppercase">{lead.category}</p>
                <h3 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">{lead.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{lead.description}</p>
              </div>
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy transition group-hover:bg-brand-red group-hover:text-white sm:inline-flex">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2">
          {rest.map((item) => (
            <Link
              key={item.id}
              to={`/videos/${item.id}`}
              className="group relative overflow-hidden rounded-[1.35rem] bg-neutral-200"
            >
              <div className="relative aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-white/65 uppercase">{item.category}</p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
