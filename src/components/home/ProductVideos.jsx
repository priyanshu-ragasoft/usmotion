import VideoRow from "../video/VideoRow";
import { videosByCategory } from "../../utils/constants";

export default function ProductVideos() {
  return (
    <section className="bg-brand-light">
      <VideoRow
        title="Product Videos"
        items={videosByCategory("product")}
        to="/categories/product"
        variant="square"
        surface="light"
      />
    </section>
  );
}
