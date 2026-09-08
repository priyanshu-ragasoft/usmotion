import Container from "../common/Container";
import VideoGrid from "../video/VideoGrid";

export default function IndustryProjects({ items }) {
  return (
    <section className="bg-brand-light py-16 sm:py-20">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Relevant projects</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy sm:text-4xl">Selected films</h2>
        <div className="mt-10">
          <VideoGrid items={items} />
        </div>
      </Container>
    </section>
  );
}
