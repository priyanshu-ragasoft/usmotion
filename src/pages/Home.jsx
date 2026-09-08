import Hero from "../components/home/Hero";
import Manifesto from "../components/home/Manifesto";
import ReelsStrip from "../components/home/ReelsStrip";
import TrendingNow from "./Frame";
import FeaturedOriginals from "./Feature";
import SelectedWork from "../components/home/SelectedWork";
import CommercialVideos from "../components/home/CommercialVideos";
import BrandVideos from "../components/home/BrandVideos";
import CorporateVideos from "../components/home/CorporateVideos";
import ProductVideos from "../components/home/ProductVideos";
import ServicesPreview from "../components/home/ServicesPreview";
import IndustriesPreview from "../components/home/IndustriesPreview";
import Clients from "../components/home/Clients";
import AboutPreview from "../components/home/AboutPreview";
import StartProject from "../components/home/StartProject";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ReelsStrip />
      <TrendingNow />
      <FeaturedOriginals />
      <SelectedWork />
      <CommercialVideos />
      <BrandVideos />
      <CorporateVideos />
      <ProductVideos />
      <ServicesPreview />
      <IndustriesPreview />
      <Clients />
      <AboutPreview />
      <StartProject />
    </>
  );
}
