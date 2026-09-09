import { Link } from "react-router-dom";
import LegalLayout, { LegalSection, LegalFooterNote } from "../components/legal/LegalLayout";
import { STUDIO_CONTACT } from "../utils/constants";

const CONTENTS = [
  { id: "agreement", title: "Agreement to terms" },
  { id: "studio", title: "The studio" },
  { id: "enquiries", title: "Enquiries and quotations" },
  { id: "production", title: "Production agreements" },
  { id: "content", title: "Intellectual property" },
  { id: "portfolio", title: "Portfolio use" },
  { id: "players", title: "Third-party services" },
  { id: "conduct", title: "Acceptable use" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "law", title: "Governing law" },
  { id: "general", title: "General" },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="8 September 2026"
      intro="These Terms & Conditions govern access to the US Motion Studio website and any enquiry submitted through it. They do not constitute a production, licensing, or services agreement. Production work is undertaken only under a separate written contract."
      contents={CONTENTS}
    >
      <LegalSection id="agreement" number="01" title="Agreement to terms">
        <p>
          By accessing this website you agree to these Terms and to our{" "}
          <Link to="/privacy">Privacy Policy</Link>. If you do not agree, you must discontinue use of the site.
        </p>
      </LegalSection>

      <LegalSection id="studio" number="02" title="The studio">
        <p>
          US Motion Studio provides video production, creative direction, cinematography, and post-production
          for commercial, brand, fashion, product, and related work. Registered contact:{" "}
          <a href={STUDIO_CONTACT.emailHref}>{STUDIO_CONTACT.email}</a>, {STUDIO_CONTACT.phone}. Principal
          production base: Los Angeles, California.
        </p>
      </LegalSection>

      <LegalSection id="enquiries" number="03" title="Enquiries and quotations">
        <p>
          Submission of the Start a Project form is an invitation to treat. It does not create a binding
          production agreement, reserve a shoot date, or fix a fee. Any estimate or treatment we issue is
          indicative until confirmed in writing. We may decline an enquiry at our discretion.
        </p>
      </LegalSection>

      <LegalSection id="production" number="04" title="Production agreements">
        <p>
          All commissioned work is governed by a separate production agreement covering scope, schedule, fees,
          usage, credits, insurance, and delivery. In the event of conflict, that agreement prevails over these
          website Terms.
        </p>
      </LegalSection>

      <LegalSection id="content" number="05" title="Intellectual property">
        <p>
          Films, stills, motion graphics, copy, trademarks, and the design of this website are owned by US
          Motion Studio or by clients and collaborators who have licensed them. You may view materials for
          personal or internal evaluation only. Reproduction, scraping, downloading for reuse, public
          performance, or commercial exploitation without prior written consent is prohibited.
        </p>
      </LegalSection>

      <LegalSection id="portfolio" number="06" title="Portfolio use">
        <p>
          Unless a production agreement states otherwise, the studio may exhibit completed work, stills, and
          behind-the-scenes material in its reel, website, and professional credentials. Client confidential
          information shared in an enquiry will be treated as confidential and not published.
        </p>
      </LegalSection>

      <LegalSection id="players" number="07" title="Third-party services">
        <p>
          The site may embed or link to YouTube, Vimeo, Instagram, maps, or other services. Those providers
          operate under their own terms and privacy notices. US Motion Studio is not responsible for their
          content, availability, or data practices.
        </p>
      </LegalSection>

      <LegalSection id="conduct" number="08" title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>interfere with, probe, or overload the website or its servers</li>
          <li>submit false, abusive, or automated enquiries</li>
          <li>harvest contact details or scrape films and metadata</li>
          <li>introduce malware or attempt unauthorised access</li>
        </ul>
        <p>We may suspend access if we reasonably believe these Terms have been breached.</p>
      </LegalSection>

      <LegalSection id="disclaimer" number="09" title="Disclaimer">
        <p>
          The website is provided “as is” and “as available”. We take care to keep credits, project notes, and
          contact details accurate, but we do not warrant completeness, uninterrupted access, or freedom from
          errors. Nothing on this site is legal, financial, or production advice.
        </p>
      </LegalSection>

      <LegalSection id="liability" number="10" title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, US Motion Studio and its officers, employees, and contractors
          shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for
          loss of profits, data, or goodwill, arising from use of this website. Our aggregate liability in
          connection with the website shall not exceed one hundred U.S. dollars (USD 100). Nothing in these
          Terms excludes liability that cannot be excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" number="11" title="Indemnity">
        <p>
          You agree to indemnify and hold harmless US Motion Studio from claims, damages, and reasonable legal
          fees arising from your misuse of the website or your breach of these Terms.
        </p>
      </LegalSection>

      <LegalSection id="law" number="12" title="Governing law">
        <p>
          These Terms are governed by the laws of the State of California, United States, excluding conflict-of-law
          rules. Exclusive venue shall be the state or federal courts located in California, except where
          mandatory consumer protections in your jurisdiction provide otherwise.
        </p>
      </LegalSection>

      <LegalSection id="general" number="13" title="General">
        <p>
          If any provision is held unenforceable, the remainder remains in effect. These Terms are the entire
          agreement regarding use of the website and supersede prior website terms. We may revise these Terms;
          the effective date will be updated. Continued use after a revision constitutes acceptance. You may
          not assign your rights under these Terms without our consent.
        </p>
      </LegalSection>

      <LegalFooterNote>
        For notices under these Terms, contact{" "}
        <a href={STUDIO_CONTACT.emailHref}>{STUDIO_CONTACT.email}</a>. Related document:{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </LegalFooterNote>
    </LegalLayout>
  );
}
