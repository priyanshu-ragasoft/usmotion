import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import IndustryIntro from "../components/industries/IndustryIntro";
import IndustryProjects from "../components/industries/IndustryProjects";
import IndustryServices from "../components/industries/IndustryServices";
import StartProject from "../components/home/StartProject";
import { getIndustry, videosByIndustry } from "../utils/constants";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  if (!industry) return <NotFound />;

  const items = videosByIndustry(industry.slug);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-brand-dark pt-28">
        <img src={industry.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/50" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-[1280px] items-end px-5 pb-12 sm:px-8 sm:pb-16">
          <Link to="/industries" className="text-sm font-medium text-white/55 hover:text-white">
            All industries
          </Link>
        </div>
      </div>
      <IndustryIntro industry={industry} />
      <IndustryProjects items={items} />
      <IndustryServices serviceIds={industry.services} />
      <StartProject />
    </>
  );
}
