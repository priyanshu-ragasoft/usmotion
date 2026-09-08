import { useSearchParams } from "react-router-dom";
import ComingSoon from "../components/common/ComingSoon";

export default function Videos() {
  const [params] = useSearchParams();
  const query = params.get("q");

  return (
    <ComingSoon
      title="Videos"
      description={
        query
          ? `Search for “${query}” will go live once the catalogue is connected.`
          : "The cinematic video catalogue is in production and will be here soon."
      }
    />
  );
}
