import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import CategoryGrid from "../components/categories/CategoryGrid";

export default function Categories() {
  return (
    <section className="bg-brand-light pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Browse"
          title="Categories"
          description="Commercial, brand, corporate, product, fashion, and more — every film filed by the work it does."
        />
        <CategoryGrid />
      </Container>
    </section>
  );
}
