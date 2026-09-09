import CategoryRow from "./CategoryRow";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import { HOME_CATEGORY_ROWS } from "../../utils/constants";

export default function Catalogue() {
  return (
    <section className="bg-white pt-20 sm:pt-24">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Catalogue"
          title="Work by category"
          description="Commercial, brand, corporate, and product films — built as complete productions, not cutdowns."
          actionTo="/videos"
          actionLabel="View all films"
        />
      </Container>

      <div className="pb-8 sm:pb-12">
        {HOME_CATEGORY_ROWS.map((row, index) => (
          <CategoryRow
            key={row.id}
            title={row.title}
            ids={row.ids}
            categorySlug={row.id}
            surface={index % 2 === 0 ? "white" : "light"}
          />
        ))}
      </div>
    </section>
  );
}
