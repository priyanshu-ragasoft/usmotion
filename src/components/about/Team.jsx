import Container from "../common/Container";
import { TEAM } from "../../utils/constants";

export default function Team() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Team</p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
            Departments that hold the film
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-brand-muted">
            Direction, camera, production, and finish work as one crew — so the idea survives the set and the cut.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.role} className="group overflow-hidden rounded-[1.35rem] bg-brand-light">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 font-heading text-lg font-bold text-white">
                  {member.role}
                </h3>
              </div>
              <p className="p-5 text-sm leading-relaxed text-brand-muted">{member.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
