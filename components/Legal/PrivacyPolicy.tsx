"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "General Consent" },
  { id: "section-2", label: "Information Collected" },
  { id: "section-3", label: "Information Sharing" },
  { id: "section-4", label: "Data Retention" },
  { id: "section-5", label: "Security" },
  { id: "section-6", label: "Cookies" },
  { id: "section-7", label: "Your Rights" },
  { id: "section-8", label: "External Links" },
  { id: "section-9", label: "Data Protection" },
  { id: "section-10", label: "Policy Changes" },
  { id: "section-11", label: "Severability" },
  { id: "section-12", label: "Grievances" },
  { id: "contact", label: "Contact Us" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 pl-4">
      {items.map((item, i) => (
        <li key={i} className="relative pl-4 text-white/60 text-sm leading-relaxed font-inter before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ number, title }: { number?: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      {number && (
        <span className="text-primary text-sm font-medium shrink-0 font-inter">{number}</span>
      )}
      <h2 className="text-white text-xl sm:text-2xl font-medium leading-snug">{title}</h2>
    </div>
  );
}

function SubTitle({ title }: { title: string }) {
  return <h3 className="text-white/90 text-base font-medium mt-8 mb-3">{title}</h3>;
}

function Para({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-white/55 text-sm leading-7 font-inter ${className ?? ""}`}>{children}</p>;
}

function Divider() {
  return <div className="my-10 border-t border-white/8" />;
}

export default function PrivacyPolicy() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Header */}
      <div className="border-b border-white/8 px-5 sm:px-10 lg:px-16 py-20">
        <Link
          href="/legal"
          className="inline-flex items-center gap-1.5 text-white/40 hover:text-primary text-sm font-inter transition-colors mb-6"
        >
          <ChevronLeft size={14} />
          Back to Legal
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-block mb-3 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium text-white">Privacy Policy</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit Technologies Private Limited</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Effective: June 2025</p>
            <p>CIN: U62099TN2023PTC163297</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 py-12 flex gap-12 lg:gap-16">
        {/* Sticky TOC */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-8">
            <p className="text-white/30 text-xs uppercase tracking-wider font-inter mb-4">Contents</p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block text-xs font-inter py-1.5 px-3 rounded-lg transition-all duration-200 ${
                    activeSection === s.id
                      ? "text-primary bg-primary/10"
                      : "text-white/35 hover:text-white/70"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-3xl space-y-0">

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-8">
            <SectionTitle number="01" title="General Consent" />
            <Para>
              This Privacy Policy explains how Qatobit collects, stores, uses, and protects your data.
              The capitalized terms "Qatobit," "We," "Us," and "Our" refer to <strong className="text-white/80">Qatobit Technologies Private Limited</strong> (CIN: U62099TN2023PTC163297),
              located at No: 8, Third Floor Akshaya HQ, Old Mahabalipuram Road, Kazhipattur Village,
              Thiruporur Taluk, Kancheepuram District, Chennai, Tamil Nadu – 603103; its affiliates, holding companies, and assigns.
            </Para>
            <Para>
              "User," "You," "Your," and "Yourself" refer to users of the Online Platforms whose Personal Information is collected under this Privacy Policy.
              By registering on the Online Platforms or using any medium — including mobile app, website, web app, or mobile site — you consent to Our use and disclosure of Your Personal Information as outlined here.
              If you do not agree, do not register or access the Online Platforms.
            </Para>

            <SubTitle title="Personal Data and Sensitive Personal Data" />
            <Para>
              <strong className="text-white/80">Data Protection Law</strong> means any applicable data protection, security, or privacy laws, including India's IT Act 2000, DPDP Act 2023, and related regulations.
            </Para>
            <Para className="mt-3">
              <strong className="text-white/80">Personal Data</strong> means any information that identifies you directly or indirectly:
            </Para>
            <Ul items={[
              "Directly identifiable: name, government ID (PAN, Aadhaar), email, phone.",
              "Indirectly identifiable: date of birth, IP address, device ID, location data, transaction history, or household details.",
            ]} />

            <Para className="mt-4">
              <strong className="text-white/80">Sensitive Personal Data</strong> includes:
            </Para>
            <Ul items={[
              "Biometrics (e.g., facial recognition for KYC).",
              "Financial details — bank accounts, cards, payment instruments, wallet addresses.",
              "Passwords or authentication data.",
              "Physical, physiological, or mental health data (if provided).",
              "Data we process, store, or handle under lawful contracts.",
            ]} />

            <SubTitle title="Our Legal Basis for Data Processing" />
            <Para>We process your Personal Data only as permitted by law:</Para>
            <Ul items={[
              "Legitimate Interests — service communications, promotions, and events without overriding your rights. Opt out via email unsubscribe.",
              "Contractual Necessity — onboarding, executing trades, managing accounts, or fulfilling service obligations.",
              "Legal/Regulatory Compliance — DPDP Act, IT Act, PMLA for KYC/AML, FIU-IND reporting, tax requirements, or court orders.",
              "Your Consent — for optional purposes (e.g., marketing), withdrawable anytime via account settings.",
            ]} />
          </section>

          <Divider />

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="02" title="Types of Information Collected" />
            <Para>
              When you use Qatobit's Online Platforms, we collect, store, and process your Personal Data in compliance with India's DPDP Act 2023,
              IT Act 2000, and other applicable laws. We collect only data necessary for account creation, KYC verification, transactions, and ongoing use.
            </Para>

            <SubTitle title="Individual Users" />
            <Ul items={[
              "Identification Details: Full name for account registration and profile setup.",
              "National Identifiers: Government ID (PAN, Aadhaar hash, passport) for KYC/AML compliance.",
              "Contact Details: Email, phone number, postal address.",
              "Financial Data: Bank account details, tax ID, crypto wallet addresses, transaction history.",
              "Location Data: IP address or geolocation for fraud detection and jurisdiction checks.",
              "Employment/Business Info: Job title, employer (if relevant for risk profiling).",
              "Additional Info: Data from compliance reviews, support chats, surveys, or law enforcement requests.",
            ]} />

            <SubTitle title="Corporate / Institutional Users" />
            <Ul items={[
              "Entity Details: Legal name, registration number, incorporation documents, business address.",
              "Ownership Structure: Names, IDs, and ownership percentages of beneficial owners (>10%), directors, authorized signatories.",
              "Individual Data: Full KYC for key persons (as per Individual Users section above).",
              "Financials: Source of wealth/funds, projected investment amounts, business description.",
            ]} />

            <SubTitle title="How We Collect It" />
            <Ul items={[
              "Directly from You: During signup, KYC upload, transactions, or support interactions.",
              "Automatically: Device info, IP, usage logs, cookies (see Cookie Policy).",
              "Third Parties: KYC providers, liquidity partners (anonymized), public sources, credit bureaus (with your consent where required).",
            ]} />

            <SubTitle title="Consent to Communication" />
            <Para>
              By accepting this Privacy Policy, you expressly consent to receive communications from Qatobit, its affiliates, and authorized partners via email,
              SMS, phone calls, in-app messages, and push notifications. To opt out of non-essential marketing messages, use the unsubscribe link in emails,
              adjust your account dashboard settings, or email <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>.
              Transactional and service communications cannot be opted out of.
            </Para>
          </section>

          <Divider />

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="03" title="Information Sharing and Disclosure" />
            <Para>
              We share your Personal Data and Sensitive Personal Data with third parties only as necessary for our Services or legal obligations. We never sell your data.
            </Para>

            <SubTitle title="Who We Share With" />
            <Ul items={[
              "Service Providers: KYC/AML verifiers, liquidity partners (anonymized trade data only), cloud hosts, payment processors, auditors — under strict data protection contracts.",
              "Regulators/Authorities: FIU-IND, law enforcement, courts, or tax bodies for compliance (e.g., STRs under PMLA).",
              "Business Partners: Affiliates or legal successors in mergers/acquisitions (with prior notice).",
              "Professional Advisors: Lawyers and accountants for legal or audit needs.",
            ]} />

            <SubTitle title="International Transfers" />
            <Para>
              For users in supported regions, data may transfer to EU/US partners using safeguards like Standard Contractual Clauses or adequacy decisions.
              Indian residents' data primarily stays in India on compliant servers.
            </Para>

            <SubTitle title="EEA / International Users" />
            <Para>
              If you're in the European Economic Area, we process data under GDPR equivalence. Consent to transfers outside India/EEA is required for full services.
              Withdrawing consent limits trading but allows withdrawals.
            </Para>

            <SubTitle title="Cross-Border Transfers" />
            <Para>
              Your Personal Data may be transferred to and stored outside India (e.g., EU or US servers) only when lawful and necessary for contractual or legal obligations.
              Transfers comply with DPDP Act 2023, IT Act, and international standards. Recipients must provide protection equivalent to Indian laws.
              By using Qatobit, you acknowledge and consent to these transfers.
            </Para>
          </section>

          <Divider />

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="04" title="Data Retention" />
            <Para>
              Qatobit retains your Personal Data only as long as necessary for the purposes outlined here or as required by applicable laws (e.g., PMLA, DPDP Act 2023).
              We prioritize data minimization and never keep information longer than needed.
            </Para>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm font-inter border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-white/50 font-medium">Type of Data</th>
                    <th className="text-left py-3 text-white/50 font-medium">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/6">
                  {[
                    ["Personal Information (KYC, contact details)", "10 years from account closure or service end"],
                    ["Transaction Records (deposits, trades, withdrawals)", "5–8 years post-account closure, or longer if legally required"],
                    ["Monitoring/Compliance Logs (fraud alerts, STRs)", "Up to 10 years or per FIU-IND directives"],
                  ].map(([type, period]) => (
                    <tr key={type}>
                      <td className="py-3 pr-6 text-white/60 leading-relaxed">{type}</td>
                      <td className="py-3 text-white/60 leading-relaxed">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Para className="mt-4">
              Extensions: May extend by 1 year max upon request from regulators. Exceptions apply for fraud prevention, legal claims, disputes, or audit/tax obligations.
            </Para>

            <SubTitle title="Data Destruction Process" />
            <Ul items={[
              "Electronic Data: Permanently deleted from systems and backups using industry-standard secure wipe tools.",
              "No Destruction During Active Matters: Data involved in investigations, audits, litigation, or open compliance reviews is preserved.",
              "Physical Records: Shredded using cross-cut shredders if applicable.",
            ]} />
            <Para className="mt-3">
              You can request data deletion (subject to legal holds) via <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>.

            </Para>

            <SubTitle title="Children and Persons with Disabilities" />
            <Para>
              Qatobit's Online Platforms are available only to individuals aged 18 or older. We do not knowingly collect Personal Data from minors.
              For users with disabilities, services may only be accessed with a lawful guardian's direct involvement and explicit, verifiable consent.
              The guardian must provide proof of authority (e.g., court documents) during onboarding.
              Contact <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a> for assistance.
            </Para>
          </section>

          <Divider />

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="05" title="Security" />
            <Para>
              We use industry-standard measures to protect your Personal Data. However, no internet transmission or digital storage is 100% secure,
              and you acknowledge risks like potential third-party interception of transactions or account data.
            </Para>

            <SubTitle title="Our Security Practices" />
            <Ul items={[
              "Encryption & Access Controls: Data in transit uses TLS 1.3; stored data employs AES-256 encryption. Access restricted to authorized personnel on need-to-know basis.",
              "Platform Protections: Multi-factor authentication (MFA), device fingerprinting, and real-time fraud monitoring for all logins, trades, and withdrawals.",
              "Regular Audits: Independent third-party penetration testing and compliance reviews (ISO 27001 aligned).",
            ]} />

            <SubTitle title="Your Responsibilities" />
            <Ul items={[
              "Secure your device, passwords, and recovery phrases — storage of sensitive info (e.g., wallet seeds, OTPs) is your responsibility.",
              "Avoid sharing credentials or clicking suspicious links.",
              "We are not liable for losses from user negligence, unauthorized device access, or circumvented privacy settings.",
            ]} />

            <SubTitle title="Reporting Issues" />
            <Para>
              If you suspect misuse, unauthorized access, or data loss, report immediately via in-app support or email{" "}
              <a href="mailto:security@qatobit.com" className="text-primary hover:underline">security@qatobit.com</a>.
              We investigate promptly and cooperate with authorities if needed.
            </Para>
          </section>

          <Divider />

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="06" title="Cookies" />
            <Para>
              Cookies are small text files stored on your device by our website or app. They track user ID, preferences, browsing activity,
              and session data to analyze traffic and improve functionality. Most are session cookies that auto-delete when you close your browser.
            </Para>

            <SubTitle title="Types of Cookies" />
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm font-inter border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-white/50 font-medium">Type</th>
                    <th className="text-left py-3 pr-6 text-white/50 font-medium">Purpose</th>
                    <th className="text-left py-3 text-white/50 font-medium">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/6">
                  {[
                    ["Essential", "Core functionality (login, security)", "Session ID, authentication tokens"],
                    ["Analytics", "Usage insights (anonymous)", "Page views, bounce rates"],
                    ["Marketing", "Personalized ads/offers", "Ad tracking (opt-out available)"],
                  ].map(([type, purpose, examples]) => (
                    <tr key={type}>
                      <td className="py-3 pr-6 text-white/60">{type}</td>
                      <td className="py-3 pr-6 text-white/60 leading-relaxed">{purpose}</td>
                      <td className="py-3 text-white/60 leading-relaxed">{examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <SubTitle title="Third-Party Cookies" />
            <Para>
              Partners like Google Analytics may set cookies for traffic analysis. We have no control over these, but they follow their own policies.
              Google Analytics tracks anonymized usage. Opt out via Google Analytics Opt-out or browser settings.
            </Para>

            <SubTitle title="Your Choices" />
            <Ul items={[
              "Decline or delete cookies anytime via browser settings (e.g., Chrome: Settings → Privacy → Cookies).",
              "Blocking cookies may limit features like auto-login or personalized dashboards.",
              "Manage preferences in your Qatobit account settings or our Cookie Consent banner.",
            ]} />
          </section>

          <Divider />

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="07" title="Your Rights, Consent Withdrawal, and Policy Changes" />

            <SubTitle title="Your Consent and Withdrawal" />
            <Para>
              To withdraw consent, email{" "}
              <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>{" "}
              with your full name, account ID, and specific request. We stop processing within 30 days unless legally required to continue (e.g., AML records).
              Withdrawal doesn't affect prior lawful processing. Limiting consent may restrict services like trading.
            </Para>

            <SubTitle title="Your Rights Under DPDP Act and Other Laws" />
            <Ul items={[
              "Access/Correct Data: View or update info via account dashboard or request export.",
              "Erasure ('Right to be Forgotten'): Request deletion when no legal need to retain (exceptions: compliance, disputes).",
              "Portability: Get your data in machine-readable format (where automated).",
              "Restrict Processing: Limit use during disputes over accuracy or legality.",
              "Object: Challenge processing based on legitimate interests (e.g., marketing).",
            ]} />

            <SubTitle title="How to Exercise Rights" />
            <Para>
              Submit written requests to{" "}
              <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>{" "}
              including your full name, email/phone, account ID, clear description of right(s) exercised, and proof if via representative.
              We respond within 30 days (extendable to 60 for complex cases).
            </Para>

            <SubTitle title="Complaints" />
            <Para>
              Contact us first at{" "}
              <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>.
              Escalate to the Data Protection Board of India if unresolved.
            </Para>
          </section>

          <Divider />

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-8">
            <SectionTitle number="08" title="Links to Other Sites" />
            <Para>
              Qatobit's Online Platforms may include links to external websites or services (e.g., liquidity partners, KYC providers, or educational resources).
              These are provided for convenience only. Clicking these links takes you outside Qatobit's control to third-party sites.
              We do not operate, endorse, or monitor these sites.
            </Para>
            <Para className="mt-3">
              Qatobit is not responsible or liable for content, accuracy, or availability of linked sites; data collection or cookies by third parties;
              or any loss, harm, or transactions occurring on external platforms.
              Contact <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a> if you encounter suspicious links on our platform.
            </Para>
          </section>

          <Divider />

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-8">
            <SectionTitle number="09" title="Data Protection" />
            <Para>
              Qatobit complies with all applicable Data Protection Laws (DPDP Act 2023, IT Act 2000, PMLA). We report any theft, loss, or breach of Personal Data
              to regulators (FIU-IND, Data Protection Board) within required timelines.
            </Para>
            <Ul items={[
              "Data Minimization: We collect and access only necessary data for services, legal compliance, or your consent.",
              "No unauthorized sharing with third parties except as outlined in this Policy (e.g., KYC providers, authorities).",
              "Anonymized Use: Beyond this Policy, we may analyze de-identified/aggregated data for platform improvements — no re-identification.",
            ]} />
            <Para className="mt-4">
              Avoid sending Sensitive Personal Data (e.g., full card numbers, passwords, biometrics) via email or unsecured channels.
              Use in-app secure upload for KYC/banking details.
              Contact <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a> for data protection concerns.
            </Para>
          </section>

          <Divider />

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-8">
            <SectionTitle number="10" title="Changes to This Privacy Policy" />
            <Para>
              We may update this Privacy Policy to reflect legal requirements, business needs, or platform changes. We'll post the revised version on
              qatobit.com/legal/privacy-policy and notify you via email or in-app alert for material updates.
              Changes take effect immediately upon posting. Continued use after updates means you accept the new terms.
            </Para>
          </section>

          <Divider />

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-8">
            <SectionTitle number="11" title="Severability" />
            <Para>
              If any provision of this Privacy Policy is found invalid, illegal, or unenforceable by a court of competent jurisdiction,
              the remaining provisions will continue in full force and effect. The invalid part will be replaced with a valid term that achieves
              the same intent as closely as possible.
            </Para>
          </section>

          <Divider />

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-8">
            <SectionTitle number="12" title="Data Protection Officer and Grievances" />
            <Para>
              For any concerns about data collection, processing, usage, disclosure, security, this Privacy Policy, or exercising your rights:
            </Para>
            <div className="mt-5 rounded-xl border border-white/8 bg-white/3 p-5 space-y-2">
              <p className="text-white/80 text-sm font-medium">Data Protection Officer</p>
              <p className="text-white/50 text-sm font-inter">
                Email: <a href="mailto:privacy@qatobit.com" className="text-primary hover:underline">privacy@qatobit.com</a>
              </p>
              <p className="text-white/50 text-sm font-inter">Subject Line: "Privacy Policy Grievance"</p>
              <p className="text-white/50 text-sm font-inter">Include: Full name, account ID, detailed issue description, and supporting evidence.</p>
            </div>
            <Para className="mt-4">
              Our Data Protection Officer will acknowledge receipt within 3 business days and aim to resolve within 30 days.
              Escalation path: Compliance Head → Data Protection Board of India.
            </Para>
          </section>

          <Divider />

          {/* Contact */}
          <section id="contact" className="scroll-mt-8">
            <SectionTitle title="Contact Us" />
            <Para>
              For questions, concerns, or grievances about this Privacy Policy, contact our Nodal Grievance Officer:
            </Para>
            <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
              <p className="text-white font-medium">Qatobit Technologies Private Limited</p>
              <p className="text-white/55 text-sm font-inter">
                Email: <a href="mailto:grievance@qatobit.com" className="text-primary hover:underline">grievance@qatobit.com</a>
              </p>
              <p className="text-white/55 text-sm font-inter leading-relaxed">
                No: 8, Third Floor Akshaya HQ, Old Mahabalipuram Road, Kazhipattur Village,
                Thiruporur Taluk, Kancheepuram District, Chennai, Tamil Nadu – 603103
              </p>
              <p className="text-white/40 text-xs font-inter mt-2">
                We acknowledge complaints within 3 business days and resolve within 30 days per regulatory guidelines.
                Unresolved issues may be escalated to the Data Protection Board of India.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
