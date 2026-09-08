import VideoRow from "../video/VideoRow";
import { videosByCategory } from "../../utils/constants";

export default function CommercialVideos() {
  return (
    <section className="bg-white">
      <VideoRow
        title="Commercial Videos"
        items={videosByCategory("commercial")}
        to="/categories/commercial"
        variant="landscape"
        surface="white"
      />
    </section>
  );
}
