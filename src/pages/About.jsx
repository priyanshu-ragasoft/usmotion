import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import OurStory from "../components/about/OurStory";
import Approach from "../components/about/Approach";
import Capabilities from "../components/about/Capabilities";
import Team from "../components/about/Team";
import AboutClients from "../components/about/AboutClients";
import Locations from "../components/about/Locations";
import StartProject from "../components/home/StartProject";

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <Approach />
      <Capabilities />
      <Team />
      <AboutClients />
      <Locations />
      <StartProject />
    </>
  );
}
