import { SERVICES } from "../utils/constants";
import ServicesHero from "../components/services/ServicesHero";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceChapter from "../components/services/ServiceChapter";
import StartProject from "../components/home/StartProject";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceProcess />
      {SERVICES.map((service, index) => (
        <div key={service.id} id={service.id} className="scroll-mt-24">
          <ServiceChapter service={service} index={index} />
        </div>
      ))}
      <StartProject />
    </>
  );
}
