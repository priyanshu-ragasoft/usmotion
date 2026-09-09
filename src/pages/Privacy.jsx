import { Link } from "react-router-dom";
import LegalLayout, { LegalSection, LegalFooterNote } from "../components/legal/LegalLayout";
import { STUDIO_CONTACT } from "../utils/constants";

const CONTENTS = [
  { id: "controller", title: "Data controller" },
  { id: "collect", title: "Information we collect" },
  { id: "use", title: "How we use information" },
  { id: "legal-basis", title: "Legal basis" },
  { id: "sharing", title: "Sharing and processors" },
  { id: "cookies", title: "Cookies and analytics" },
  { id: "retention", title: "Retention" },
  { id: "security", title: "Security" },
  { id: "rights", title: "Your rights" },
  { id: "transfers", title: "International transfers" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes" },
];

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="8 September 2026"
      intro="This Privacy Policy describes how US Motion Studio collects, uses, discloses, and safeguards personal information when you visit motionusaproductions.com or submit a project enquiry. Please read it together with our Terms & Conditions."
      contents={CONTENTS}
    >
      <LegalSection id="controller" number="01" title="Data controller">
        <p>
          The data controller is US Motion Studio (“the studio”, “we”, “us”), a professional video production
          house with its principal production base in Los Angeles, California, operating worldwide.
        </p>
        <p>
          Privacy enquiries:{" "}
          <a href={STUDIO_CONTACT.emailHref}>{STUDIO_CONTACT.email}</a>
          {" · "}
          <a href={STUDIO_CONTACT.phoneHref}>{STUDIO_CONTACT.phone}</a>
        </p>
      </LegalSection>

      <LegalSection id="collect" number="02" title="Information we collect">
        <p>We collect only what is needed to run the website and to respond to professional enquiries.</p>
        <p>
          <strong>Information you provide.</strong> Through the Start a Project form we may collect name,
          company, email address, telephone number, country, project type, industry, budget range, timeline,
          and a description of the proposed film.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Our hosting, security, and analytics providers
          may receive IP address, browser and device type, referring URL, pages viewed, and approximate
          location derived from IP.
        </p>
        <p>We do not collect payment card details through this website.</p>
      </LegalSection>

      <LegalSection id="use" number="03" title="How we use information">
        <p>Personal information is used to:</p>
        <ul>
          <li>assess and respond to project enquiries</li>
          <li>operate, maintain, and improve the website</li>
          <li>measure how films and pages are discovered</li>
          <li>protect the studio, clients, and the site against misuse</li>
          <li>comply with legal, accounting, or regulatory obligations</li>
        </ul>
        <p>We do not sell personal information, and we do not use enquiry data for unsolicited marketing lists.</p>
      </LegalSection>

      <LegalSection id="legal-basis" number="04" title="Legal basis">
        <p>
          Where data-protection law requires a legal basis, we rely on: (a) steps prior to entering a contract,
          when you send an enquiry; (b) our legitimate interests in running a production house and securing the
          website; (c) consent, where you have given it; and (d) legal obligation, where applicable.
        </p>
      </LegalSection>

      <LegalSection id="sharing" number="05" title="Sharing and processors">
        <p>
          We may share information with trusted processors who host the site, deliver email, provide analytics,
          or support production administration, each bound to use the data only on our instructions. We may
          disclose information if required by law, to protect rights and safety, or in connection with a merger,
          acquisition, or transfer of studio assets.
        </p>
      </LegalSection>

      <LegalSection id="cookies" number="06" title="Cookies and analytics">
        <p>
          We may use cookies and similar technologies that are strictly necessary to operate the site, and
          optional tools for audience measurement. You may refuse non-essential cookies in your browser. Blocking
          cookies may limit some features. If a cookie banner or preference tool is present, it will control
          optional tags.
        </p>
      </LegalSection>

      <LegalSection id="retention" number="07" title="Retention">
        <p>
          Enquiry records are retained for as long as reasonably required to handle the request, maintain
          professional records, and meet legal duties, then deleted or securely archived. Server and security
          logs are kept for a shorter operational period.
        </p>
      </LegalSection>

      <LegalSection id="security" number="08" title="Security">
        <p>
          We apply appropriate technical and organisational measures, including HTTPS, access controls, and
          limited staff access to enquiry data. No method of transmission over the internet is completely
          secure; we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="rights" number="09" title="Your rights">
        <p>
          Subject to applicable law (including GDPR and the CCPA/CPRA where they apply), you may request access
          to, correction of, or deletion of personal information, restriction or objection to certain processing,
          and data portability. California residents may also request disclosure of categories of information
          collected. To exercise rights, email {STUDIO_CONTACT.email}. We may need to verify your identity.
        </p>
      </LegalSection>

      <LegalSection id="transfers" number="10" title="International transfers">
        <p>
          If you contact us from outside the United States, your information may be processed in the U.S. and
          other countries where we or our processors operate. Those countries may have different data-protection
          standards than your own.
        </p>
      </LegalSection>

      <LegalSection id="children" number="11" title="Children">
        <p>
          This website is intended for business and professional use by adults. We do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection id="changes" number="12" title="Changes">
        <p>
          We may update this Policy from time to time. The effective date at the head of this document will be
          revised when we do. Material changes will be posted on this page. Continued use of the website after
          an update constitutes acceptance of the revised Policy.
        </p>
      </LegalSection>

      <LegalFooterNote>
        This Policy should be read with our{" "}
        <Link to="/terms">Terms &amp; Conditions</Link>. For any privacy request, write to{" "}
        <a href={STUDIO_CONTACT.emailHref}>{STUDIO_CONTACT.email}</a>.
      </LegalFooterNote>
    </LegalLayout>
  );
}
