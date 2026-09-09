import Container from "../common/Container";
import { CLIENTS } from "../../utils/constants";

export default function AboutClients() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <Container>
        <p className="text-center text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Trusted by</p>
        <h2 className="mt-4 text-center font-heading text-3xl font-bold tracking-[-0.03em] text-brand-navy sm:text-5xl">
          Selected collaborations
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="flex h-[4.75rem] items-center justify-center rounded-2xl border border-black/6 bg-white sm:h-20"
            >
              <span className="font-heading text-sm font-bold tracking-[0.22em] text-brand-navy/40 uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
