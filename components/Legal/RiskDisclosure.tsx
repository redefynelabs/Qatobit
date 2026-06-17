"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "Market Volatility" },
  { id: "section-2", label: "Total Capital Loss" },
  { id: "section-3", label: "FIU-IND Regulatory Risks" },
  { id: "section-4", label: "Cybersecurity Exposure" },
  { id: "section-5", label: "AML/CFT Specific Risks" },
  { id: "section-6", label: "Liquidity & Operational Limits" },
  { id: "section-7", label: "No Investment Advice" },
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

function Para({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-white/55 text-sm leading-7 font-inter ${className ?? ""}`}>{children}</p>;
}

function Divider() {
  return <div className="my-10 border-t border-white/8" />;
}

function ImpactBadge({ text }: { text: string }) {
  return (
    <div className="mt-5 rounded-lg border border-white/8 bg-white/3 px-4 py-3">
      <span className="text-white/30 text-xs font-inter font-medium uppercase tracking-wide">Impact &nbsp;</span>
      <span className="text-white/55 text-xs font-inter leading-relaxed">{text}</span>
    </div>
  );
}

export default function RiskDisclosure() {
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
            <h1 className="text-3xl sm:text-4xl font-medium text-white">Risk Disclosure</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit VDA Service Provider — FIU-IND Compliant</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Mandatory Pre-Trading Acknowledgment</p>
            <p>Required under PMLA 2002</p>
          </div>
        </div>

        {/* Critical warning banner */}
        <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/8 px-5 py-4">
          <p className="text-red-400 text-xs font-medium uppercase tracking-wide mb-1">Critical Warning</p>
          <p className="text-white/60 text-sm font-inter leading-relaxed">
            Virtual Digital Assets carry extreme risk of loss. You may lose 100% of your invested capital.
            This disclosure must be read and acknowledged before trading. Past performance is not indicative of future results.
          </p>
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
            <SectionTitle number="01" title="Market Volatility" />
            <Para>
              Virtual Digital Assets (VDAs) are subject to extreme price volatility, with potential 50–90% declines within hours or days.
            </Para>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Bitcoin", "–73% drawdown", "Nov 2021 – Jun 2022"],
                ["Terra LUNA", "–99.99% total collapse", "May 2022"],
              ].map(([asset, stat, period]) => (
                <div key={asset} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-sm font-medium">{asset}</p>
                  <p className="text-primary text-lg font-medium mt-1">{stat}</p>
                  <p className="text-white/35 text-xs font-inter mt-0.5">{period}</p>
                </div>
              ))}
            </div>
            <Para className="mt-4">No recovery is guaranteed; similar crashes remain possible at any time.</Para>
          </section>

          <Divider />

          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="02" title="Total Capital Loss" />
            <Para>Users may lose 100% of invested capital due to:</Para>
            <Ul items={[
              "Market crashes — VDA prices can drop to zero.",
              "Platform failures — exchange insolvency or technical collapse.",
              "Cybersecurity breaches — hacks despite cold storage.",
              "Regulatory interventions — FIU-IND asset freezes (up to 180 days), PMLA account termination, banking bans.",
            ]} />
            <Para className="mt-4">
              No principal protection, insurance payouts, or guarantees are provided.
              Qatobit custodial insurance covers only platform negligence — not market losses or regulatory holds.
            </Para>
          </section>

          <Divider />

          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="03" title="FIU-IND Regulatory Risks" />
            <Para>
              Qatobit users face mandatory FIU-IND regulatory interventions that may result in prolonged asset inaccessibility.
            </Para>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "STR/CTR Investigations",
                  detail: "Account automatically frozen during FIU-IND Suspicious Transaction Report (STR) or Cash Transaction Report (CTR) investigations — up to 180 days under PMLA Section 12. No trading or withdrawals permitted during the hold period.",
                },
                {
                  label: "Structuring Detection",
                  detail: "Multiple deposits <₹10 lakhs designed to evade the CTR threshold trigger immediate account suspension. Example: 10× ₹9.9L deposits vs. a single ₹1Cr deposit.",
                },
                {
                  label: "Velocity Monitoring",
                  detail: "High-frequency trading (>10 deposit/withdrawal cycles per day) automatically flags Enhanced Due Diligence (EDD) review and potential STR filing to FIU-IND within 7 days.",
                },
                {
                  label: "Income Mismatch",
                  detail: "Single deposits exceeding 10× declared annual income (KYC profile) require comprehensive source-of-funds proof within 7 days — including ITRs, bank statements, and salary slips covering the transaction value.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <ImpactBadge text="Zero access to funds during compliance reviews. Non-response = permanent account termination + FIU-IND blacklisting. Standard FIU-IND VASP requirement — no exceptions for retail users." />
          </section>

          <Divider />

          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="04" title="Cybersecurity Exposure" />
            <Para>
              Despite Qatobit's 95%+ cold storage and multi-signature protocols, users remain exposed to significant cybersecurity threats.
            </Para>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "Phishing / SIM Swaps",
                  detail: "User responsibility. Mandatory 2FA required, but social engineering attacks bypass platform security. Users must safeguard credentials, authenticator apps, and mobile numbers. Qatobit is not liable for compromised access.",
                },
                {
                  label: "Platform Hacks",
                  detail: "Even robust exchanges face breaches. Qatobit insurance covers only direct platform negligence — not third-party exploits or user errors. Persistent industry risk remains.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <ImpactBadge text="Potential total asset loss from unauthorized access or exchange compromise. No recovery guaranteed beyond insurance limits. Standard VDA service provider risk profile." />
          </section>

          <Divider />

          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="05" title="AML/CFT Specific Risks" />
            <Para>
              Qatobit's automated AML/CFT monitoring triggers strict interventions to comply with FIU-IND and PMLA requirements,
              potentially limiting user access to funds.
            </Para>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "High-Volume Outliers",
                  detail: "Transactions exceeding velocity/volume thresholds trigger automated compliance interventions under FIU-IND VDA guidelines. Users must provide EDD documentation within 7 days or face permanent suspension.",
                },
                {
                  label: "Chain-Hopping / Mixers",
                  detail: "Use of privacy protocols, cross-chain transfers, or mixing services is prohibited. Detected patterns result in immediate STR filing to FIU-IND and account termination.",
                },
                {
                  label: "Sanctions / PEP Matches",
                  detail: "Any match against OFAC, UN, or Indian sanctions lists, or Politically Exposed Person (PEP) designation, leads to account termination without notice. No appeal process during active investigations.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <ImpactBadge text="Temporary or permanent loss of fund access. All actions are automated for regulatory compliance — Qatobit exercises zero discretion. Standard VDA service provider obligation." />
          </section>

          <Divider />

          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="06" title="Liquidity & Operational Limits" />
            <Para>
              Qatobit users face inherent liquidity constraints and operational limitations due to VDA market dynamics and FIU-IND regulatory requirements.
            </Para>

            <div className="mt-5 space-y-3">
              {[
                {
                  label: "Basket Rebalancing Slippage",
                  detail: "During high volatility periods (5–15% price swings), automated basket rebalancing incurs significant slippage. Example: BTC dominance shift from 60% to 40% triggers 8–12% execution loss in thin order books.",
                },
                {
                  label: "INR Withdrawals Pending Approval",
                  detail: "Fiat off-ramps subject to FIU-IND regulatory clearance. Processing delays of 7–30 days common during compliance reviews or banking partner KYC updates. No guaranteed timelines.",
                },
                {
                  label: "No Leverage / Margin Trading",
                  detail: "Retail users prohibited from leveraged positions per FIU-IND risk guidelines. Spot trading only — no derivatives, futures, or borrowing facilities available.",
                },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1.5">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <ImpactBadge text="Reduced liquidity during stress events + regulatory delays amplify losses. Users must plan for extended capital lockup periods. Standard VDA service provider operating constraints." />
          </section>

          <Divider />

          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="07" title="No Investment Advice" />
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-white/80 text-sm leading-7 font-inter">
                Qatobit provides <strong className="text-white">zero financial advice, recommendations, or guarantees</strong>.
                Past basket returns (including any +200% historical performance) are entirely irrelevant to future performance.
                All trading decisions are made solely at the User's own risk and discretion.
                Nothing on this Platform constitutes investment advice, a solicitation to invest, or a promise of returns.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
