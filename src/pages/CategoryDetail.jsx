import { Link, useParams } from "react-router-dom";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import VideoGrid from "../components/video/VideoGrid";
import NotFound from "./NotFound";
import { getCategory, videosByCategory } from "../utils/constants";

export default function CategoryDetail() {
  const { slug } = useParams();
  const category = getCategory(slug);

  if (!category) return <NotFound />;

  const items = videosByCategory(category.slug);

  return (
    <section className="bg-brand-light pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.32em] text-brand-red uppercase">Category</p>
        <SectionHeading title={category.name} description={category.description} />
        <VideoGrid items={items} />
        <Link to="/categories" className="mt-10 inline-flex text-sm font-medium text-brand-navy/50 hover:text-brand-navy">
          All categories
        </Link>
      </Container>
    </section>
  );
}
