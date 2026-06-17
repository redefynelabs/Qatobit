"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "Introduction" },
  { id: "section-2", label: "Definitions" },
  { id: "section-3", label: "Eligibility" },
  { id: "section-4", label: "Account & KYC" },
  { id: "section-5", label: "Services" },
  { id: "section-6", label: "AML/CFT Compliance" },
  { id: "section-7", label: "Fees & Charges" },
  { id: "section-8", label: "Risk Disclosure" },
  { id: "section-9", label: "Security & Wallets" },
  { id: "section-10", label: "Structured Products" },
  { id: "section-11", label: "User Obligations" },
  { id: "section-12", label: "Suspension & Termination" },
  { id: "section-13", label: "Limitation of Liability" },
  { id: "section-14", label: "Intellectual Property" },
  { id: "section-15", label: "Data Privacy" },
  { id: "section-16", label: "Governing Law" },
  { id: "section-17", label: "Modifications" },
  { id: "section-18", label: "Contact" },
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

function Clause({ id, children }: { id: string; children: React.ReactNode }) {
  return <p className="text-white/40 text-xs font-inter font-medium mb-1">{id} &nbsp;<span className="text-white/55 font-normal text-sm leading-7">{children}</span></p>;
}

export default function TermsAndConditions() {
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
            <h1 className="text-3xl sm:text-4xl font-medium text-white">Terms &amp; Conditions</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit Technologies Private Limited</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Effective Date: June 2026</p>
            <p>Governed by laws of India</p>
            <p>Jurisdiction: Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 py-12 flex gap-12 lg:gap-16">
        {/* TOC */}
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

          <section id="section-1" className="scroll-mt-8">
            <SectionTitle number="1" title="Introduction and Acceptance" />
            <div className="space-y-3">
              <Clause id="1.1">These Terms and Conditions ("Terms") govern your access to and use of the Qatobit platform, including our website (www.qatobit.com), mobile apps, wallets, and services ("Platform").</Clause>
              <Clause id="1.2">By registering or using the Platform, you ("User") agree to these Terms, Privacy Policy, AML/KYC Policy, Risk Disclosure, and Indian laws (including PMLA 2002 and FIU-IND guidelines).</Clause>
              <Clause id="1.3">Discontinue use if you disagree. We may update Terms with notice via Platform/email; continued use implies acceptance.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="2" title="Definitions" />
            <div className="space-y-3">
              <Clause id="2.1"><strong className="text-white/70">VDAs:</strong> Cryptocurrencies/digital assets per Indian regulations.</Clause>
              <Clause id="2.2"><strong className="text-white/70">Account:</strong> Your verified user profile.</Clause>
              <Clause id="2.3"><strong className="text-white/70">Wallet:</strong> The digital wallet service provided by Qatobit for storage of VDAs.</Clause>
              <Clause id="2.4"><strong className="text-white/70">INR:</strong> Indian Rupees.</Clause>
              <Clause id="2.5"><strong className="text-white/70">Structured Product or Baskets:</strong> AI-curated VDA portfolios offered by Qatobit.</Clause>
              <Clause id="2.6"><strong className="text-white/70">CTR/STR:</strong> Cash Transaction Report / Suspicious Transaction Report per PMLA Rules.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="3" title="Eligibility" />
            <div className="space-y-3">
              <Clause id="3.1">You must be 18+, a resident of India (or an approved jurisdiction), not sanctioned/PEP without disclosure, and legally capable of entering contracts.</Clause>
              <Clause id="3.2">Prohibited: Restricted countries or those on sanctions lists. Qatobit verifies via CKYCR and reserves the right to refuse service.</Clause>
              <Clause id="3.3">Qatobit reserves the right to refuse service at its sole discretion.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="4" title="Account Registration and KYC/CDD" />
            <div className="space-y-3">
              <Clause id="4.1">Provide accurate details; complete FIU-mandated KYC (Aadhaar/PAN/Digilocker, selfie, address proof).</Clause>
              <Clause id="4.2">EDD requests must be responded to within 7 days.</Clause>
              <Clause id="4.3">Ongoing monitoring applies; false information leads to suspension/termination and STR filing.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="5" title="Services" />
            <Para>Qatobit provides the following FIU-IND compliant services:</Para>
            <Ul items={[
              "INR to VDA Purchases — buy diversified crypto baskets (Bitcoin, Ethereum, Solana) via UPI/IMPS.",
              "Crypto-to-Crypto Trading — seamless spot trading with real-time charts on web/mobile.",
              "Custodial Wallet Services — secure multi-signature cold wallets (offline storage), hot/warm for liquidity.",
              "Structured Crypto Baskets — AI-optimized, auto-rebalanced portfolios for beginners.",
            ]} />
            <Para className="mt-4">INR and crypto withdrawal services may be enabled in future phases subject to regulatory approvals.</Para>
          </section>

          <Divider />

          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="6" title="Compliance with AML/CFT Laws" />
            <Para>Qatobit, as an FIU-IND registered VASP, fully complies with:</Para>
            <Ul items={[
              "Prevention of Money Laundering Act, 2002 (PMLA) & Rules",
              "FIU-IND VDA Guidelines (2026) including Travel Rule",
              "FATF Recommendations for Virtual Assets",
              "CKYCR reporting and CERT-In cybersecurity mandates",
            ]} />
            <div className="mt-5 space-y-3">
              <Clause id="6.2">All user transactions undergo real-time AI-driven monitoring for FIU-IND red flags including structuring, velocity patterns, high-volume outliers, and sanctions matches.</Clause>
              <Clause id="6.3">Qatobit files CTRs (₹10L+ transactions) and STRs immediately to FIU-IND without user notification, as mandated by PMLA Section 12.</Clause>
              <Clause id="6.4">Enhanced Due Diligence (EDD) triggered automatically; requires source-of-funds verification (7-day response required).</Clause>
              <Clause id="6.5">Travel Rule compliance: All VDA transfers include originator/beneficiary data per FIU standards.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="7" title="Fees and Charges" />
            <Para>All fees are transparent, competitive, and GST-inclusive. The complete fee schedule is available in real-time at qatobit.com/fees and on the Platform dashboard. Fees may be revised with 30 days' advance notice.</Para>

            <SubTitle title="7.1 – Account Opening & KYC" />
            <Para>Account opening and KYC verification are completely free.</Para>

            <SubTitle title="7.2 – INR Deposits" />
            <Ul items={[
              "INR deposits via NEFT, IMPS, and UPI are free of charge.",
              "Card-based or payment gateway deposits may attract third-party gateway charges not set, controlled, or retained by Qatobit.",
              "Minimum INR deposit: ₹200.",
            ]} />

            <SubTitle title="7.3 – INR Withdrawals" />
            <Ul items={[
              "Platform fee: 0.5% of withdrawal amount, minimum ₹50 per transaction (subject to 18% GST).",
              "Minimum INR withdrawal: ₹100.",
              "Instant IMPS transfers for amounts up to ₹2,00,000 (subject to banking partner availability).",
              "TDS: 1% deducted at source under Section 194S of the Income Tax Act, 1961. TDS certificates issued quarterly.",
            ]} />

            <SubTitle title="7.4 – Crypto Deposits" />
            <Para>Zero platform fee on all crypto deposits. Blockchain network fees are determined by the respective network and not retained by Qatobit.</Para>

            <SubTitle title="7.5 – Crypto Withdrawals" />
            <Para>No additional platform surcharge. Users pay only the applicable blockchain network fee displayed in real-time at the point of transaction. Qatobit does not add any markup to network fees.</Para>
            <Ul items={[
              "BTC Withdrawal: Network fee only — no platform surcharge.",
              "ETH Withdrawal: Network fee only — no platform surcharge.",
              "USDT (TRC20) Withdrawal: Network fee only — no platform surcharge.",
            ]} />

            <SubTitle title="7.6 – Spot Trading Fees" />
            <Ul items={[
              "Maker Fee (Limit Orders): 0% per transaction.",
              "Taker Fee (Market Orders): 0.03%–0.50% per transaction.",
              "GST: 18% on platform fee only, fully included in displayed fees.",
              "TDS: 1% deducted on sell transactions under Section 194S (statutory government mandate).",
            ]} />

            <SubTitle title="7.7 – Futures Trading Fees (Planned)" />
            <Ul items={[
              "Futures Maker Fee: Targeting 0.007%–0.05%.",
              "Futures Taker Fee: Targeting 0.0075%–0.03%.",
              "Maximum Leverage: Up to 100x.",
              "Promotional zero-fee futures periods may be offered at Qatobit's discretion.",
            ]} />

            <SubTitle title="7.8 – VIP & Volume Loyalty Programme" />
            <Para>A volume-based VIP fee tier programme will be introduced. Tier thresholds, reduced fee rates, and eligibility criteria will be published at qatobit.com/fees.</Para>

            <SubTitle title="7.9 – Statutory Taxes (Government Mandate)" />
            <Para>The following are mandated by the Government of India — not fees charged by Qatobit:</Para>
            <Ul items={[
              "TDS: 1% on every sale or transfer of VDAs under Section 194S, Income Tax Act, 1961. TDS certificates issued quarterly.",
              "Income Tax on VDA Gains: 30% flat tax on net gains under Section 115BBH. This is the User's personal tax obligation — Qatobit does not deduct income tax at platform level.",
              "GST: 18% on Qatobit's platform service fees under CGST/SGST Act, 2017. Applied on fee amounts only, not on the value of trades or assets. All displayed fees are GST-inclusive.",
            ]} />

            <SubTitle title="7.10 – Fee Revision Policy" />
            <Ul items={[
              "Platform fees may be revised with minimum 30 days' advance written notice via registered email and Platform notification.",
              "Statutory tax rates are set by the Government of India and take immediate effect as mandated by law.",
              "Continued use after the 30-day notice period constitutes acceptance of revised fees.",
              "Archived fee schedules maintained at qatobit.com/fees for compliance audit trails.",
            ]} />
          </section>

          <Divider />

          <section id="section-8" className="scroll-mt-8">
            <SectionTitle number="8" title="Risk Disclosure" />
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-primary text-xs font-medium mb-3 uppercase tracking-wide">Important Risk Warning</p>
              <div className="space-y-3">
                <Clause id="8.1">VDAs are extremely volatile assets capable of 50–90% price swings within hours or days.</Clause>
                <Clause id="8.2">Prices fluctuate rapidly and unpredictably due to market sentiment, regulatory news, and whale activity.</Clause>
                <Clause id="8.3">Users may suffer partial or total loss of capital; past crashes (e.g., Bitcoin –70% in 2022) show no recovery is guaranteed.</Clause>
                <Clause id="8.4">Qatobit provides no investment advice, financial recommendations, legal opinions, or tax guidance whatsoever.</Clause>
                <Clause id="8.5">All trading decisions, basket allocations, and VDA transactions are made entirely at the User's sole risk and discretion.</Clause>
              </div>
            </div>
          </section>

          <Divider />

          <section id="section-9" className="scroll-mt-8">
            <SectionTitle number="9" title="Security and Wallet Services" />
            <div className="space-y-3">
              <Clause id="9.1">Qatobit provides enterprise-grade custodial wallets secured by multi-signature protocols, biometric 2FA, address whitelisting, and withdrawal delays.</Clause>
              <Clause id="9.2">User assets are segregated across secure storage tiers: 95%+ in cold storage (air-gapped), 4% warm storage (MPC), 1% hot wallets for liquidity.</Clause>
              <Clause id="9.3">While reasonable safeguards are implemented, Qatobit cannot guarantee absolute security against nation-state attacks or unknown zero-days.</Clause>
              <Clause id="9.4">Users expressly acknowledge cybersecurity risks (phishing, SIM swaps, malware) and accept sole responsibility for securing login credentials and enabling all mandatory security features.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-10" className="scroll-mt-8">
            <SectionTitle number="10" title="Structured Products and Baskets" />
            <div className="space-y-3">
              <Clause id="10.1">Qatobit Baskets are AI-optimized, pre-defined VDA portfolios automatically rebalanced monthly.</Clause>
              <Clause id="10.2">Baskets remain fully exposed to underlying VDA market risks including 50–90% drawdowns and total loss potential.</Clause>
              <Clause id="10.3">Qatobit provides no guarantee of profits, dividends, or capital protection; users bear 100% market risk.</Clause>
              <Clause id="10.4">Past basket performance does not indicate future results due to crypto volatility.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-11" className="scroll-mt-8">
            <SectionTitle number="11" title="User Obligations" />
            <Para>Users shall strictly comply with all obligations including:</Para>
            <Ul items={[
              "Use the Platform only for lawful purposes under Indian law (PMLA 2002, IT Act 2000).",
              "Not engage in money laundering, terrorist financing, or other fraudulent activities.",
              "Not misuse the Platform through unauthorized API access, DDoS attacks, or account sharing.",
              "Complete EDD requests within 7 days and maintain accurate KYC information.",
            ]} />
            <Para className="mt-4">Users bear sole responsibility for all Account activities, transactions, and compliance failures, including STR/CTR filings triggered by their behavior.</Para>
          </section>

          <Divider />

          <section id="section-12" className="scroll-mt-8">
            <SectionTitle number="12" title="Suspension and Termination" />
            <Para>Qatobit reserves the right to immediately suspend or permanently terminate Accounts for:</Para>
            <Ul items={[
              "Regulatory compliance — FIU-IND orders, PMLA investigations, court directives, sanctions listing.",
              "Suspicious activities — structuring, velocity patterns, high-volume outliers, chain-hopping, sanctions/PEP matches.",
              "Material breach of Terms — false KYC, EDD non-response, prohibited activities, API abuse.",
              "National security risks or CERT-In cybersecurity directives.",
            ]} />

            <SubTitle title="Freeze Triggers" />
            <Ul items={[
              "Security: phishing attempts, SIM swaps, unauthorized logins.",
              "Legal Holds: court orders or FIU-IND directives for STR investigations.",
            ]} />

            <SubTitle title="Termination Effects" />
            <Ul items={[
              "Permanent Account closure.",
              "Data retention per PMLA (5+ years).",
              "No refunds during freeze periods.",
              "Right to set-off against liabilities.",
            ]} />
            <Para className="mt-4">Users receive notification post-freeze (except court-sealed cases); appeal process available via <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a> within 7 days.</Para>
          </section>

          <Divider />

          <section id="section-13" className="scroll-mt-8">
            <SectionTitle number="13" title="Limitation of Liability" />
            <Para>To the maximum extent permitted by Indian law, Qatobit shall not be liable for:</Para>
            <Ul items={[
              "Any market losses, VDA price volatility, or investment performance.",
              "Technical interruptions, platform downtime, or service unavailability.",
              "Cybersecurity incidents, hacks, or exploits beyond Qatobit's reasonable control.",
              "User errors, unauthorized access due to compromised credentials, or phishing losses.",
              "Force majeure events (regulatory changes, natural disasters, network failures).",
            ]} />
            <div className="mt-5 space-y-3">
              <Clause id="13.2">Qatobit's maximum aggregate liability shall not exceed the total fees paid by the User in the preceding 6 months, regardless of claim type (contract, tort, negligence).</Clause>
              <Clause id="13.3">No indirect, consequential, special, or punitive damages are recoverable, including lost profits, data loss, or trading opportunities.</Clause>
              <Clause id="13.4">This limitation survives termination; users expressly waive all statutory protections to the extent permitted under Indian law.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-14" className="scroll-mt-8">
            <SectionTitle number="14" title="Intellectual Property" />
            <div className="space-y-3">
              <Clause id="14.1">All Platform content (text, graphics, logos, AI algorithms), software, trademarks, and proprietary technology belong exclusively to Qatobit Private Limited.</Clause>
              <Clause id="14.2">Unauthorized use, reproduction, distribution, reverse engineering, scraping, or creating derivative works is strictly prohibited and subject to legal action under Indian Copyright Act 1957 and Trademarks Act 1999.</Clause>
              <Clause id="14.3">User Content License: Users grant Qatobit a perpetual, worldwide, royalty-free license to use submitted data (KYC docs, transaction feedback) for compliance, analytics, and platform improvement, per Privacy Policy.</Clause>
              <Clause id="14.4">Third-party names (Bitcoin®, Ethereum®) are used descriptively only; all rights belong to respective owners. No endorsement implied.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-15" className="scroll-mt-8">
            <SectionTitle number="15" title="Data Privacy" />
            <Para>User data (KYC documents, transaction history, device fingerprints) shall be processed strictly per Qatobit's Privacy Policy and applicable Indian laws:</Para>
            <Ul items={[
              "Digital Personal Data Protection Act, 2023 (DPDP) — consent-based processing, data minimization.",
              "PMLA 2002 — 5+ year retention for FIU-IND/CTR/STR compliance.",
              "IT Act 2000 — cybersecurity incident reporting to CERT-In within 6 hours.",
            ]} />

            <SubTitle title="Data Usage Categories" />
            <Ul items={[
              "Compliance: PAN/Aadhaar hashing for sanctions screening, transaction pattern analysis.",
              "Analytics: Anonymized aggregate data for AML model training (velocity detection).",
              "Operations: Device/IP clustering for mule network detection.",
            ]} />

            <SubTitle title="User Rights (DPDP Act)" />
            <Ul items={[
              "Access personal data via dashboard.",
              "Request correction/deletion (post-PMLA retention period).",
              "Withdraw consent (impacts service access).",
            ]} />

            <Para className="mt-4">Third-Party Sharing: FIU-IND/ED (STRs/CTRs only), CKYCR (KYC), cloud providers (AWS/GCP with DPA). No marketing data sales. International transfers are GDPR/FIU-compliant.</Para>
          </section>

          <Divider />

          <section id="section-16" className="scroll-mt-8">
            <SectionTitle number="16" title="Governing Law and Jurisdiction" />
            <div className="space-y-3">
              <Clause id="16.1">These Terms shall be governed exclusively by the laws of India, including the Indian Contract Act 1872, PMLA 2002, DPDP Act 2023, and Information Technology Act 2000.</Clause>
              <Clause id="16.2">Courts at Chennai, Tamil Nadu shall have exclusive jurisdiction over all disputes arising from these Terms, Account activities, or Platform usage. Users expressly waive objections to venue or personal jurisdiction.</Clause>
              <Clause id="16.3">Dispute Resolution Process (Mandatory Pre-Court): Internal Escalation via <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a> with 7-day resolution target.</Clause>
              <Clause id="16.4">Class actions prohibited; all disputes individual only. Arbitration awards are final and binding. Costs borne by losing party.</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-17" className="scroll-mt-8">
            <SectionTitle number="17" title="Modifications" />
            <div className="space-y-3">
              <Clause id="17.1">Qatobit reserves the right to amend these Terms, Privacy Policy, AML/KYC Policy, or Fee Schedule at any time to reflect regulatory changes, security enhancements, or service expansions.</Clause>
              <Clause id="17.2">Users will receive notification of material changes via email to registered address, prominent Platform banner (30 days minimum notice), and dashboard alerts.</Clause>
              <Clause id="17.3">Continued Platform access after the posted effective date constitutes binding acceptance of revised Terms. Users may terminate Account without penalty within 30 days of notification if they disagree.</Clause>
              <Clause id="17.4">Specific examples requiring amendment notice include fee structure changes, new AML monitoring thresholds, KYC document requirements (post-FIU circulars), and service restrictions (sanctions updates).</Clause>
              <Clause id="17.5">Archived versions maintained at qatobit.com/legal/terms-archive for compliance audit trails (5-year PMLA retention).</Clause>
            </div>
          </section>

          <Divider />

          <section id="section-18" className="scroll-mt-8">
            <SectionTitle number="18" title="Contact Information" />
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <p className="text-white font-medium">Qatobit Private Limited</p>
              <p className="text-white/55 text-sm font-inter">No: 8, Third Floor, Akshaya HQ, OMR Road, Kazhipattur, Kanchipuram – 603103</p>
              <p className="text-white/55 text-sm font-inter">
                Email: <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a>
              </p>
              <p className="text-white/55 text-sm font-inter">Chennai, Tamil Nadu, India</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
