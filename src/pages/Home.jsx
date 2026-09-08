import Hero from "../components/home/Hero";
import Manifesto from "../components/home/Manifesto";
import TrendingNow from "./Frame";
import FeaturedOriginals from "./Feature";
import SelectedWork from "../components/home/SelectedWork";
import Catalogue from "../components/home/Catalogue";
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
      <TrendingNow />
      <FeaturedOriginals />
      <SelectedWork />
      <Catalogue />
      <ServicesPreview />
      <IndustriesPreview />
      <Clients />
      <AboutPreview />
      <StartProject />
    </>
  );
}
