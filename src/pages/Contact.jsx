import ContactHero from "../components/contact/ContactHero";
import Container from "../components/common/Container";
import ProjectEnquiryForm, { ContactAside } from "../components/forms/ProjectEnquiryForm";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <section className="bg-brand-light py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:items-start">
          <ContactAside />
          <ProjectEnquiryForm />
        </Container>
      </section>
    </>
  );
}
