import VideoRow from "../video/VideoRow";
import { videosByCategory } from "../../utils/constants";

export default function CorporateVideos() {
  return (
    <section className="bg-brand-dark">
      <VideoRow
        title="Corporate Videos"
        items={videosByCategory("corporate")}
        to="/categories/corporate"
        variant="landscape"
        surface="dark"
      />
    </section>
  );
}
