import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { FEATURED_VIDEOS } from "../utils/constants";
import NotFound from "./NotFound";

export default function VideoDetail() {
  const { videoId } = useParams();
  const index = FEATURED_VIDEOS.findIndex((item) => item.id === videoId);
  const video = FEATURED_VIDEOS[index];

  if (!video) {
    return <NotFound />;
  }

  const previous = FEATURED_VIDEOS[index - 1];
  const next = FEATURED_VIDEOS[index + 1];
  const related = FEATURED_VIDEOS.filter((item) => item.id !== video.id).slice(0, 4);

  return (
    <article className="bg-brand-light text-brand-text">
      <section className="relative min-h-[70svh] overflow-hidden bg-brand-dark pt-28">
        <img src={video.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/55 to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1100px] flex-col justify-end px-5 pb-14 sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-red uppercase">
            {video.category}
          </p>
          <h1 className="mt-3 max-w-[16ch] font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {video.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {video.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white">
              <Play size={14} fill="currentColor" />
              Watch Film
            </span>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_280px]">
        <div>
          <h2 className="font-heading text-2xl font-bold text-brand-navy">The film</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            {video.description}
          </p>

          <h3 className="mt-10 font-heading text-lg font-bold text-brand-navy">Services</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {video.services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-sm text-brand-navy"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <dl className="h-fit rounded-2xl border border-black/8 bg-white p-6">
          <Info label="Client" value={video.client} />
          <Info label="Category" value={video.category} />
          <Info label="Industry" value={video.industry} />
          <Info label="Year" value={video.year} />
          <Info label="Runtime" value={video.duration} last />
        </dl>
      </section>

      <section className="border-t border-black/8 bg-white py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="font-heading text-2xl font-bold text-brand-navy">Related films</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link key={item.id} to={`/videos/${item.id}`} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-brand-dark">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2.5 font-heading text-sm font-semibold text-brand-navy">{item.title}</p>
                <p className="text-xs text-brand-muted">{item.category}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 border-t border-black/8 pt-8">
            {previous ? (
              <Link to={`/videos/${previous.id}`} className="group flex items-center gap-2 text-sm text-brand-navy">
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to={`/videos/${next.id}`} className="group flex items-center gap-2 text-sm text-brand-navy">
                {next.title}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </article>
  );
}

function Info({ label, value, last = false }) {
  return (
    <div className={last ? "" : "mb-4 border-b border-black/6 pb-4"}>
      <dt className="text-[10px] font-semibold tracking-[0.2em] text-brand-muted uppercase">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-brand-navy">{value}</dd>
    </div>
  );
}
