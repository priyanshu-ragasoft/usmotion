import VideoRow from "../video/VideoRow";
import { videosByCategory } from "../../utils/constants";

export default function BrandVideos() {
  return (
    <section className="bg-brand-light">
      <VideoRow
        title="Brand Videos"
        items={videosByCategory("brand")}
        to="/categories/brand"
        variant="poster"
        surface="light"
      />
    </section>
  );
}
