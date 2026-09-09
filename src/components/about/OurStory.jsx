import Container from "../common/Container";

export default function OurStory() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[1.35rem]">
          <img src="/laptop1.png" alt="" className="aspect-[16/11] w-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Our story</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
            Built to hold the frame
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-brand-muted">
            The studio started with a simple demand: brand films should feel like cinema, not leftover content.
            That meant owning the process — writing, shooting, cutting, and finishing under one roof.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-brand-muted">
            Years of commercials, fashion films, and corporate work shaped a house style: precise light,
            measured pace, and a finish that still holds on a large screen.
          </p>
        </div>
      </Container>
    </section>
  );
}
