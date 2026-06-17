"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "Executive Summary" },
  { id: "section-2", label: "Regulatory Framework" },
  { id: "section-3", label: "Governance Structure" },
  { id: "section-4", label: "KYC & CDD Procedures" },
  { id: "section-5", label: "Transaction Monitoring" },
  { id: "section-6", label: "Risk-Based Approach" },
  { id: "section-7", label: "Sanctions & Travel Rule" },
  { id: "section-8", label: "Cyber Security" },
  { id: "section-9", label: "Staff Training" },
  { id: "section-10", label: "Predicate Offenses" },
  { id: "section-11", label: "Record Keeping" },
  { id: "section-12", label: "Penalties & Enforcement" },
  { id: "section-13", label: "Reporting & Liaison" },
  { id: "conclusion", label: "Conclusion" },
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
      {number && <span className="text-primary text-sm font-medium shrink-0 font-inter">{number}</span>}
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-sm font-inter border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map((h) => (
              <th key={h} className="text-left py-3 pr-5 text-white/50 font-medium whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/6">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="py-3 pr-5 text-white/60 leading-relaxed align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AMLPolicy() {
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
            <h1 className="text-3xl sm:text-4xl font-medium text-white">AML &amp; Compliance Policy</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit Technologies Private Limited</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Report Date: 09 February 2026</p>
            <p>Review Frequency: Annual</p>
            <p>Reviewed By: Compliance &amp; Risk Function</p>
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
        <main className="flex-1 min-w-0 max-w-3xl">

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-8">
            <SectionTitle number="01" title="Executive Summary" />
            <Para>
              This comprehensive policy document outlines Qatobit Private Limited's commitment to complying with Anti-Money Laundering (AML),
              Counter-Terrorist Financing (CTF), and other related regulatory requirements as mandated by the Financial Intelligence Unit — India (FIU-IND)
              under the Prevention of Money Laundering Act (PMLA), 2002, and applicable sectoral guidelines for Virtual Digital Asset Service Providers (VDASPs).
            </Para>

            <SubTitle title="Objective" />
            <Ul items={[
              "Establish a robust framework for detecting and preventing money laundering and terrorist financing risks.",
              "Ensure compliance with FIU-IND registration requirements and regulatory expectations.",
              "Implement effective Know Your Customer (KYC) and Customer Due Diligence (CDD) procedures.",
              "Conduct comprehensive transaction monitoring and suspicious activity identification.",
              "Maintain operational transparency and regulatory adherence across all business units.",
              "Mitigate reputational and legal risks through proactive compliance measures.",
            ]} />

            <SubTitle title="Overall Assessment" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Regulatory Alignment", "Framework aligns with current FIU-IND guidelines (January 2026)."],
                ["Control Effectiveness", "Structured governance with designated roles ensures operational compliance."],
                ["Enhancement Areas", "Crypto-specific transaction monitoring and advanced risk scoring require continuous refinement."],
                ["Risk Coverage", "Comprehensive policies address crypto-specific AML/CTF risks including wallet and bank transactions."],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="02" title="Regulatory Framework & Applicability" />

            <SubTitle title="Legal Basis" />
            <Ul items={[
              "Prevention of Money Laundering Act (PMLA), 2002",
              "Unlawful Activities (Prevention) Act (UAPA), 1967 — for CTF provisions",
              "FIU-IND Guidelines for VDASPs (issued 07 January 2026, 3rd Revision as of 15 September 2025)",
              "FATF Recommendations on AML/CFT for Virtual Assets",
              "Sanctions Regime: UN Security Council Consolidated List, OFAC, and other competent authority designations",
            ]} />

            <SubTitle title="Scope & Applicability" />
            <Para>This policy applies to:</Para>
            <Ul items={[
              "All employees, contractors, and consultants of Qatobit Private Limited",
              "All business units engaged in Virtual Digital Asset (VDA) operations",
              "All customers and counterparties transacting on Qatobit platforms",
              "Third-party service providers and custodians involved in VDA transactions",
              "Directors, officers, and board-level governance structures",
            ]} />

            <SubTitle title="Reporting Obligations" />
            <Para>Qatobit Private Limited, as a VDASP, is obligated to:</Para>
            <Ul items={[
              "Register on FINGate 2.0 (FIU-IND digital reporting portal)",
              "Submit Suspicious Transaction Reports (STRs) within stipulated timelines",
              "File Currency Transaction Reports (CTRs) for transactions exceeding ₹10 lakh in cash equivalents",
              "Maintain detailed transaction reconstruction records per Travel Rule requirements",
              "Comply with sanctions screening at account opening and on an ongoing basis",
            ]} />
          </section>

          <Divider />

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="03" title="Organizational Structure & Governance" />

            <SubTitle title="Board-Level Commitment" />
            <Ul items={[
              "Providing adequate resources and budget for AML/CTF compliance infrastructure",
              "Approving annual compliance risk assessments and policy updates",
              "Overseeing the appointment of key compliance officers",
              "Reviewing compliance metrics and violations quarterly",
              "Ensuring escalation procedures for serious breaches to senior management",
            ]} />

            <SubTitle title="Designated Director (DD)" />
            <Para>
              A Designated Director must be appointed at board or senior management level, responsible for overall AML/CTF governance and regulatory liaison,
              and must act as the primary contact point with FIU-IND.
            </Para>
            <Ul items={[
              "Ensure organizational commitment to compliance",
              "Approve all critical AML/CTF policies and procedures",
              "Oversee Principal Officer performance and audit findings",
              "Report to board on compliance status quarterly",
            ]} />

            <SubTitle title="Principal Officer (PO)" />
            <Para>
              Must possess minimum 3 years of AML/KYC compliance experience in financial services or the crypto sector.
              Appointment must be disclosed to FIU-IND during VDASP registration. Cannot be relieved of duties without prior FIU-IND notification.
            </Para>
            <Para className="mt-3">
              Reporting structure: Direct reporting line to the Designated Director (Mr. Kumar Sonu) or equivalent senior management authority (Mrs. Kumari Jaya).
              Must have unrestricted access to all customer, transaction, and operational data.
            </Para>

            <SubTitle title="Core PO Responsibilities" />
            <Ul items={[
              "Design and implement organization-wide AML/CTF policies and procedures",
              "Oversee KYC/CDD processes and customer risk assessments",
              "Monitor transaction patterns and identify suspicious activities",
              "Coordinate STR preparation and timely filing with FIU-IND",
              "Conduct ongoing staff training and awareness programs",
              "Interface with FIU-IND on regulatory matters and audit responses",
              "Maintain compliance documentation and audit trails",
              "Review and report compliance metrics to senior management monthly",
            ]} />

            <SubTitle title="Compliance Team Structure" />
            <div className="mt-4 rounded-xl border border-white/8 bg-white/3 p-5 font-inter text-sm text-white/60 space-y-1">
              <p className="text-white/80 font-medium">Designated Director</p>
              <p className="pl-4 text-white/40">↓</p>
              <p className="pl-4 text-white/80 font-medium">Principal Officer</p>
              {[
                "KYC / Onboarding Manager",
                "Transaction Monitoring Analyst",
                "Risk & Sanctions Screening Officer",
                "Audit & Controls Specialist",
                "Compliance Support Staff",
              ].map((role) => (
                <p key={role} className="pl-8 text-white/50">· {role}</p>
              ))}
            </div>

            <SubTitle title="Board Audit Committee" />
            <Ul items={[
              "Quarterly review of AML/CTF compliance reports — testing of systems (transaction monitoring/CDD) and identified gaps.",
              "Annual assessment of compliance program effectiveness — rigorous review of AML/CFT policies and procedures.",
              "Oversight of audit findings and remediation actions — ensuring management develops action plans for identified issues.",
              "Approval of compliance budget and resource allocation — sufficient budget, technology, and staff for compliance function.",
            ]} />
          </section>

          <Divider />

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="04" title="Customer Due Diligence (CDD) & KYC Procedures" />
            <Para>
              Qatobit adopts a comprehensive, risk-based KYC approach aligned with FIU-IND guidelines for VDASPs.
            </Para>

            <SubTitle title="Mandatory Information at Onboarding" />
            <Para>Personal Information:</Para>
            <Ul items={[
              "Full legal name (including any aliases or alternative names)",
              "Date of birth and nationality",
              "Permanent and current residential address",
              "Contact details (email, mobile number, residential phone)",
              "Occupation and nature of business (if self-employed/business owner)",
            ]} />
            <Para className="mt-4">Identity Verification — Primary Documentation (one required):</Para>
            <Ul items={[
              "PAN (Permanent Account Number) — mandatory for all Indian customers",
              "Government-issued photo ID: Passport, Voter ID, Driving License, or Aadhaar",
            ]} />
            <Para className="mt-4">Enhanced Verification — Live KYC:</Para>
            <Ul items={[
              "Mandatory live selfie with liveliness detection (eye-blink or head movement) to prevent deepfake or static image fraud",
              "Geographic tracking: latitude, longitude, timestamp, and IP address capture during selfie submission",
              "OTP verification for registered email and mobile number",
              "Penny-drop verification: confirmation of bank account via a ₹1 test transaction",
            ]} />

            <SubTitle title="Beneficial Ownership (for Organisations)" />
            <Ul items={[
              "Company incorporation certificate (COI) and GST registration",
              "Memorandum & Articles of Association or equivalent",
              "Board resolution authorizing designated signatories",
              "Beneficial ownership structure — all persons holding ≥25% beneficial interest",
              "Ultimate Beneficial Owner (UBO) documentation",
              "Director and Authorized Signatory identity verification (same as personal KYC)",
            ]} />

            <SubTitle title="Risk Categories" />
            <Table
              headers={["Risk Level", "Profile"]}
              rows={[
                ["Low", "Established salaried employees, verified employment/residential history, individual transaction volumes within normal parameters, no adverse media or sanctions matches."],
                ["Medium", "Self-employed professionals or business owners, moderate transaction volumes with occasional large transfers, patterns consistent with declared occupation."],
                ["High", "High-risk business sectors (remittance, precious metals, casinos, ATMs), PEP designation or close associates, jurisdictions with high ML risk, previous sanctions matches or adverse media."],
                ["Extreme", "Confirmed sanctions designation (UNSC, OFAC, UK, EU), known or suspected terrorist financing links, entities in prohibited jurisdictions, links to organized crime."],
              ]}
            />

            <SubTitle title="Enhanced Due Diligence (EDD) for High-Risk Customers" />
            <Para>Enhanced Verification:</Para>
            <Ul items={[
              "In-person verification with government-issued photo ID",
              "Video KYC with third-party verification service",
              "Detailed beneficial ownership verification",
              "Source of funds declaration and verification",
              "Enhanced background screening including adverse media searches",
              "Periodic re-verification (6-monthly for high-risk, 12-monthly for medium-risk)",
            ]} />
            <Para className="mt-4">Periodic Review Schedule:</Para>
            <Ul items={[
              "High-risk customers: 6-monthly risk reassessment",
              "Medium-risk customers: 12-monthly risk reassessment",
              "Low-risk customers: 24-monthly risk reassessment",
            ]} />

            <SubTitle title="Annual Re-KYC Requirements" />
            <Para>
              FIU-IND mandate (effective 2024): all customers must undergo re-KYC annually, irrespective of risk rating.
              Customers receive re-KYC notices 30 days before expiry. Online re-KYC through portal with document upload.
              Accounts suspended after 60 days if re-KYC is not completed. Non-responsive customers escalated to senior management.
            </Para>

            <SubTitle title="Ongoing Customer Due Diligence (OCDD)" />
            <Ul items={[
              "Monthly review of transaction activity against declared business/income profile",
              "Quarterly risk profile reassessment based on transaction patterns",
              "Immediate escalation if activity deviates significantly from baseline",
              "Seasonal adjustment for business customers with cyclical revenue patterns",
              "Automated alerts for unusual account activity (behavioral anomalies)",
            ]} />
          </section>

          <Divider />

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="05" title="Transaction Monitoring & Suspicious Activity Detection" />

            <SubTitle title="Automated Monitoring Thresholds" />
            <Table
              headers={["Transaction Type", "Threshold", "Action"]}
              rows={[
                ["Single cash/fiat deposit", "₹10 lakh", "File Currency Transaction Report within 7 days"],
                ["Suspicious transaction (any amount)", "Risk-scored alert", "Review for STR within 24 hours"],
                ["High-risk customer transaction", "₹5 lakh+", "Enhanced review and documentation"],
                ["Structuring pattern (daily deposits <₹10L aggregating ₹10L+/week)", "Pattern detected", "Immediate STR consideration"],
                ["Rapid wallet transfers", ">5 transfers/day, <1 hour apart", "Behavioral analysis and escalation"],
              ]}
            />

            <SubTitle title="Behavioral Triggers" />
            <Ul items={[
              "Sudden change in transaction frequency or volume from established baseline",
              "Rapid movement of funds through multiple wallets",
              "Round-trip transfers (send out → receive back within hours)",
              "Late-night/early-morning transaction patterns (typical of illicit activity)",
              "Transactions to high-risk jurisdictions or jurisdictions with weak AML frameworks",
              "Beneficiary account changes after months of consistent patterns",
            ]} />

            <SubTitle title="Crypto-Specific Triggers" />
            <Ul items={[
              "Mixing service or tumbler usage detection (wallet analysis)",
              "Transactions to known ransomware wallet addresses",
              "Dark web marketplace interactions",
              "Bridge/swap transactions to convert between asset types rapidly",
              "Peer-to-peer (P2P) transaction aggregation from multiple sources",
            ]} />

            <SubTitle title="Transaction Verification Procedure" />
            <div className="mt-4 space-y-3">
              {[
                ["Step 1 – Initial Screening", "Automated system flags transaction; captures amount, date/time, originator, beneficiary, asset type; screens beneficiary wallet/account against sanctions lists; performs transaction route analysis."],
                ["Step 2 – Customer Verification", "Verify identity against stored KYC data; confirm authorization by genuine account holder; assess transaction consistency with customer profile; review transaction history for patterns."],
                ["Step 3 – Documentation & Evidence", "Preserve transaction hash/ID; document all supporting communications; create timestamped audit trail; maintain evidence for regulatory inspection."],
                ["Step 4 – Risk Assessment", "Assign risk score (low/medium/high); determine if STR criteria are met; document inclusion/exclusion rationale; escalate high-risk assessments to Principal Officer."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{step}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <SubTitle title="STR Filing Criteria" />
            <Para>A transaction must be reported as suspicious (STR) to FIU-IND if any of the following apply:</Para>
            <Ul items={[
              "Suspected Money Laundering — proceeds from any predicate offense (drug trafficking, cybercrime, corruption, fraud, etc.)",
              "Suspected Terrorist Financing — funds destined for terrorist activities, organizations, or designated individuals/entities",
              "Structuring/Smurfing — multiple transactions structured to avoid reporting thresholds",
              "Beneficial Ownership Concealment — patterns suggesting deliberate obfuscation of true beneficiary",
              "Sanctions Evasion — transaction routed through unusual paths to circumvent sanctions screening",
              "Unexplained Wealth — customer transaction volume unexplained by declared income or business",
              "High-Risk Jurisdiction Transactions — transfers to/from high-risk or non-cooperative jurisdictions",
              "Crypto Mixing/Laundering Indicators — wallet analytics reveal tumbler or privacy service usage",
              "Ransomware-Linked Addresses — funds sent to known ransomware attacker wallets",
              "Regulatory Counterparty — transaction involves entities under sanctions, frozen assets, or regulatory action",
            ]} />

            <SubTitle title="STR Preparation & Filing" />
            <Para>Each STR must include transaction ID, date/time, and asset type; originator details (name, wallet/account, PAN/KYC ID);
              beneficiary details (name, wallet/account, country); transaction amount and currency; and complete transaction route (if multi-hop).
            </Para>
            <Para className="mt-3">Filing Timeline:</Para>
            <Ul items={[
              "STR prepared within 24 hours of transaction flagging",
              "Filed on FINnet 2.0 within 7 calendar days of detection (or within 30 days if more investigation needed, with supplementary filing)",
              "Filed without advance notice to customer or counterparty (regulatory requirement)",
              "Complete filing documentation maintained with Principal Officer authorization",
            ]} />

            <SubTitle title="Currency Transaction Report (CTR) Filing" />
            <Para>Reportable transactions:</Para>
            <Ul items={[
              "Cumulative cash/fiat deposits exceeding ₹10 lakh in a calendar week",
              "Cross-border wire transfers (SWIFT) exceeding ₹10 lakh",
              "Convertible virtual assets purchased with cash exceeding ₹10 lakh",
              "Multiple transactions aggregating to ₹10 lakh+ to avoid reporting threshold",
            ]} />
            <Para className="mt-3">
              CTR filed within 7 calendar days of transaction. Filed on FINnet 2.0 by Principal Officer or authorized compliance officer. Cumulative submissions weekly to FIU-IND.
            </Para>
          </section>

          <Divider />

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="06" title="Risk-Based Approach (RBA) to Compliance" />
            <Para>
              Qatobit adopts a risk-based approach recognizing that money laundering and terrorist financing risks vary significantly across customer segments.
              Not all transactions or customers present equal risk. Proportionate compliance measures optimize regulatory effectiveness and operational efficiency.
              Customer risk rating determines applicable CDD, monitoring, and reporting procedures.
            </Para>

            <SubTitle title="Risk Assessment Matrix" />
            <Table
              headers={["Factor", "Low Risk", "Medium Risk", "High Risk"]}
              rows={[
                ["Customer Type", "Salaried individual, established business", "Self-employed professional, SME", "High-risk business sector (remittance, precious metals, casino)"],
                ["Transaction Volume", "<₹5 lakh/month", "₹5–50 lakh/month", ">₹50 lakh/month"],
                ["Geography", "India, low-risk countries", "Emerging markets", "FATF Grey List, high ML risk jurisdictions"],
                ["PEP Status", "No PEP links", "Distant PEP connection", "Direct/immediate family PEP"],
                ["Compliance History", "Clean record", "Minor inconsistencies", "Previous sanctions match, adverse media"],
              ]}
            />
          </section>

          <Divider />

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="07" title="Sanctions Screening & Travel Rule Compliance" />

            <SubTitle title="Sanctions Lists Screened" />
            <Para>UNSC Consolidated List (Mandatory):</Para>
            <Ul items={[
              "UN Security Council Financial Sanctions Target List — updated daily",
              "Coverage: individual persons, legal entities, groups, organizations",
              "Screening frequency: real-time at account opening and monthly for ongoing customers",
            ]} />
            <Para className="mt-4">Additional Lists:</Para>
            <Ul items={[
              "UK Sanctions List",
              "EU Consolidated Sanctions List",
              "OFAC (Office of Foreign Assets Control) SDN List",
              "EU High-Risk Third Countries List (for jurisdictional screening)",
            ]} />
            <Para className="mt-4">Jurisdictional Risk Assessment:</Para>
            <Ul items={[
              "FATF Grey List and non-cooperative jurisdictions",
              "Countries with known ML/TF risk (country risk assessment matrix)",
              "Sanctioned jurisdictions (North Korea, Iran, Syria, Crimea, etc.)",
              "Jurisdictions with weak AML/CFT frameworks",
            ]} />

            <SubTitle title="Account Opening Screening Procedure" />
            <div className="mt-4 space-y-3">
              {[
                ["Step 1 – Initial Verification (Pre-KYC)", "Customer name, DOB, nationality checked against UNSC Consolidated List. Exact match algorithm with tolerance for alternative spellings/name variations. Wildcard search for common name elements. Result documented with timestamp."],
                ["Step 2 – Enhanced Verification (Potential Matches)", "Manual review of matched entry details (designation date, offense description, entity type). Verify customer information against designation details. Request additional information if required (alternative addresses, passport number)."],
                ["Step 3 – Positive Match Response", "IMMEDIATE HALT: account opening suspended. FIU-IND notified within 24 hours. Any funds identified frozen and reported per Section 23(1) of PMLA. Complete record of matched entry, screening process, and regulatory notification maintained."],
              ].map(([step, detail]) => (
                <div key={step} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{step}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <SubTitle title="Travel Rule Compliance" />
            <Para>For all VDA transfers, VDASPs must collect and transmit:</Para>
            <Para className="mt-3">Originator Information Required:</Para>
            <Ul items={[
              "Full legal name",
              "Wallet address or account identifier",
              "Residential address or account registration address",
              "Unique customer identifier (PAN for India)",
              "Date of birth (if available)",
            ]} />
            <Para className="mt-4">Beneficiary Information Required:</Para>
            <Ul items={[
              "Full legal name",
              "Wallet address or account receiving assets",
              "Beneficiary entity name (if different from receiving address holder)",
              "Country of beneficiary",
              "Unique customer identifier (if available)",
            ]} />
            <Para className="mt-4">
              Information must be transmitted before or during the VDA transfer. Counterparty VDASP must receive complete originator/beneficiary data.
              Records maintained for transaction reconstruction per audit requirements.
            </Para>

            <SubTitle title="Travel Rule Non-Compliance Handling" />
            <Para>Received transfer without Travel Rule data:</Para>
            <Ul items={[
              "Transfer held in suspense account pending information receipt",
              "Counterparty contacted immediately with information request",
              "Escalation to FIU-IND if counterparty fails to provide information within 5 business days",
              "STR considered if information cannot be verified",
            ]} />
          </section>

          <Divider />

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-8">
            <SectionTitle number="08" title="Cyber Security & Data Protection" />

            <SubTitle title="CERT-In Audit Requirement" />
            <Para>
              Per FIU-IND guidelines (2026), Qatobit must obtain a CERT-In Empaneled Auditor Certificate covering all critical risk domains:
              governance, compliance, access control, insider risk, infrastructure security (network, endpoints, cloud), application security
              (AML systems, KYC platform, wallet security), third-party and API security, and incident detection readiness.
            </Para>
            <Ul items={[
              "Audit completed by 31 December each year",
              "Audit scope proportionate to Qatobit's operational size and transaction volume",
              "Audit certificate submitted to FIU-IND within 15 days of completion",
              "Remediation of identified vulnerabilities completed within 90 days",
            ]} />

            <SubTitle title="Data Protection Measures" />
            <Para>Data Storage:</Para>
            <Ul items={[
              "Customer KYC and transaction data encrypted at rest (AES-256 minimum)",
              "Database access restricted to authorized compliance personnel only",
              "Segregation of development/testing environments from production systems",
            ]} />
            <Para className="mt-4">Data Transmission:</Para>
            <Ul items={[
              "All data in transit encrypted via TLS 1.2 or higher",
              "API calls use OAuth 2.0 or equivalent authentication",
              "Third-party data sharing via encrypted channels only",
            ]} />
            <Para className="mt-4">Access Controls:</Para>
            <Ul items={[
              "Role-based access control (RBAC) with least privilege principle",
              "Multi-factor authentication (MFA) for all compliance system access",
              "Regular access reviews (quarterly) with immediate removal of lapsed access",
              "Privileged Access Management (PAM) for superuser/admin access",
            ]} />
            <Para className="mt-4">Incident Response:</Para>
            <Ul items={[
              "Data breach notification to affected customers within 72 hours",
              "FIU-IND notification for breaches affecting AML/CTF data within 24 hours",
              "Root cause analysis and remediation plan documented",
              "Post-incident audit to prevent recurrence",
            ]} />
          </section>

          <Divider />

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-8">
            <SectionTitle number="09" title="Staff Training & Awareness" />

            <SubTitle title="Mandatory AML/CTF Training" />
            <Para>All Employees:</Para>
            <Ul items={[
              "Onboarding training within 7 days of joining",
              "Annual refresher training (minimum 4-hour session)",
              "Role-specific training for compliance, KYC, and operations teams",
            ]} />
            <Para className="mt-4">Training Content:</Para>
            <Ul items={[
              "AML/CTF regulatory framework and FIU-IND requirements",
              "Qatobit's AML/CTF policies and procedures",
              "Customer due diligence and KYC process",
              "Transaction monitoring and STR filing",
              "Sanctions screening procedures",
              "Crypto-specific money laundering typologies and detection",
              "Case studies of recent regulatory actions and enforcement",
              "Consequences of non-compliance (personal liability, penalties, criminal exposure)",
            ]} />

            <SubTitle title="Role-Specific Competency" />
            <Para>Compliance Officers:</Para>
            <Ul items={[
              "Advanced AML/CTF and PMLA knowledge",
              "Crypto transaction analysis and blockchain forensics",
              "Risk assessment and customer profiling",
              "STR preparation and regulatory liaison",
            ]} />
            <Para className="mt-4">KYC/Onboarding Team:</Para>
            <Ul items={[
              "Enhanced CDD procedures and documentation requirements",
              "PEP screening and beneficial ownership verification",
              "Live KYC technology (facial recognition, liveliness detection)",
              "Document verification and fraud detection",
            ]} />
            <Para className="mt-4">Transaction Monitoring Analysts:</Para>
            <Ul items={[
              "Behavioural analytics and transaction pattern recognition",
              "Blockchain analysis tool proficiency",
              "Sanctions screening procedures",
              "STR documentation and justification",
            ]} />

            <SubTitle title="Audit & Testing" />
            <Ul items={[
              "Annual competency assessment for all staff",
              "Scenario-based testing on suspicious transaction identification",
              "Mock STR filings reviewed for accuracy",
              "Sanctions screening test records maintained",
            ]} />
          </section>

          <Divider />

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-8">
            <SectionTitle number="10" title="Predicate Offenses & PMLA Coverage" />
            <Para>
              Qatobit identifies and reports transactions suspicious of proceeds from the following predicate offenses.
              STR filing does NOT require definitive proof — report on reasonable suspicion that a transaction involves proceeds from a predicate offense.
              Investigation responsibility lies with law enforcement/FIU-IND.
            </Para>
            <Ul items={[
              "Drug trafficking (NDPS Act violations)",
              "Corruption and bribery (Prevention of Corruption Act)",
              "Cybercrime and fraud (IPC, IT Act)",
              "Human trafficking (ITPA)",
              "Wildlife trafficking (Wildlife Protection Act)",
              "Organized crime (UAPA)",
              "Extortion and illegal arms trading",
              "Tax evasion and financial fraud",
              "Counterfeit currency and securities fraud",
            ]} />
          </section>

          <Divider />

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-8">
            <SectionTitle number="11" title="Record Keeping & Documentation" />
            <Para>All records retained for a minimum of 7 years.</Para>

            <SubTitle title="Customer Records" />
            <Ul items={[
              "KYC documents and ongoing CDD files",
              "Identification documents and address verification",
              "Beneficial ownership documentation",
              "Risk assessment ratings and reassessment records",
              "All KYC update/re-KYC records",
            ]} />

            <SubTitle title="Transaction Records" />
            <Ul items={[
              "Complete transaction details (originator, beneficiary, amount, asset, date/time)",
              "Transaction screening results and sanctions check outcomes",
              "Supporting documentation and justification for transaction approval",
              "Travel Rule information exchanged",
              "Blockchain transaction hash/proof of settlement",
            ]} />

            <SubTitle title="STR/CTR Records" />
            <Ul items={[
              "STR filing copy and FIU-IND confirmation receipt",
              "Supporting investigation files and red flag documentation",
              "CTR filing records and cash deposit verification",
              "Correspondence with FIU-IND and regulatory responses",
            ]} />

            <SubTitle title="Compliance Documentation" />
            <Ul items={[
              "Internal audit reports and findings",
              "Staff training records and compliance certifications",
              "Policy update history with Board approvals",
              "Third-party audit certificates and compliance reviews",
              "Data breach incident reports and remediation records",
            ]} />

            <SubTitle title="Document Quality Standards" />
            <Ul items={[
              "Scanned documents in PDF format (minimum 300 DPI resolution)",
              "Original documents retained for critical/high-value transactions",
              "Metadata preserved (date uploaded, uploaded by, system timestamps)",
              "Access logs maintained for sensitive records",
              "Indexing system enabling rapid retrieval for regulatory inspection",
            ]} />
          </section>

          <Divider />

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-8">
            <SectionTitle number="12" title="Penalties & Enforcement" />

            <SubTitle title="Internal Escalation Matrix" />
            <Table
              headers={["Level", "Violation", "Consequence"]}
              rows={[
                ["Level 1 – Minor", "Documentation deficiency, minor training gap", "Verbal/written warning, retraining"],
                ["Level 2 – Moderate", "Missed re-KYC deadline, incomplete transaction review", "Suspension of bonus, written warning"],
                ["Level 3 – Major", "STR filing delay >7 days, unauthorized transaction approval", "Suspension, termination review"],
                ["Level 4 – Critical", "Falsified KYC, regulatory reporting violation, customer data theft", "Immediate termination, law enforcement referral"],
              ]}
            />

            <SubTitle title="FIU-IND Regulatory Penalties" />
            <Ul items={[
              "Non-compliance with STR filing: ₹25,000 per violation (PMLA Section 75)",
              "Deficient KYC documentation: ₹5,000–₹10,000 per instance",
              "Failure to file CTR: ₹10,000 per violation",
              "Sanctions screening breach: ₹50,000+ per incident",
              "Cumulative liability for repeated violations",
            ]} />

            <SubTitle title="Potential License Action" />
            <Ul items={[
              "Suspension of VDASP registration (temporary)",
              "Cancellation of VDASP registration (permanent)",
              "Restraint from operating VDA services pending investigation",
            ]} />
          </section>

          <Divider />

          {/* Section 13 */}
          <section id="section-13" className="scroll-mt-8">
            <SectionTitle number="13" title="Reporting & Regulatory Liaison" />

            <SubTitle title="Monthly Report to Principal Officer" />
            <Ul items={[
              "Transaction volume and average transaction value",
              "New customer onboarding volume and approval rate",
              "STR/CTR filings submitted and status",
              "Customer risk profile distribution",
              "High-risk transaction alerts and follow-up status",
              "Compliance exceptions and violations (if any)",
            ]} />

            <SubTitle title="Quarterly Report to Board" />
            <Ul items={[
              "Executive summary of compliance status",
              "Key performance indicators (KPIs) and metrics",
              "Regulatory inspection findings (if any)",
              "Audit recommendations and remediation progress",
              "Budget utilization for compliance infrastructure",
              "Risk assessment and emerging compliance challenges",
            ]} />

            <SubTitle title="FIU-IND Liaison" />
            <Ul items={[
              "VDASP registration on FINnet 2.0 (prerequisite for operations)",
              "Disclosure of Designated Director and Principal Officer details",
              "Annual compliance certification by Principal Officer",
              "Prompt response to FIU-IND information requests (within 15 days unless extended)",
              "Notification of Principal Officer changes or compliance policy updates",
            ]} />

            <SubTitle title="Inspection Readiness" />
            <Ul items={[
              "Designated compliance officer assigned as FIU-IND liaison",
              "All documentation organized and indexed for rapid retrieval",
              "Senior management prepared for inspection meetings",
              "Compliance staff trained on inspection protocols",
            ]} />
          </section>

          <Divider />

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-8">
            <SectionTitle title="Conclusion & Commitment Statement" />
            <Para>
              Qatobit Private Limited is committed to maintaining the highest standards of AML/CTF compliance, protecting the integrity of the Indian financial system,
              and safeguarding its operations from money laundering and terrorist financing risks.
            </Para>

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
              <p className="text-white font-medium text-sm">Our Commitment</p>
              <Ul items={[
                "Full regulatory compliance with FIU-IND mandates and PMLA requirements",
                "Robust customer due diligence and ongoing monitoring",
                "Transparent reporting and cooperation with regulatory authorities",
                "Continuous improvement of compliance controls and procedures",
                "Accountability of leadership and all staff in fulfilling compliance obligations",
              ]} />
            </div>

            <div className="mt-8 rounded-xl border border-white/8 bg-white/3 p-6 space-y-2">
              <p className="text-white/80 text-sm font-medium">Approved By</p>
              <p className="text-white/50 text-sm font-inter">Senior Management / Board of Directors</p>
              <p className="text-white/50 text-sm font-inter">Qatobit Technologies Private Limited</p>
              <p className="text-white/50 text-sm font-inter">Report Date: 09 February 2026</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
