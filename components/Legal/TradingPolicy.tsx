"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "Introduction" },
  { id: "section-2", label: "Crypto & Fiat Currency" },
  { id: "section-3", label: "Crypto Custody Wallet" },
  { id: "section-4", label: "Fiat Currency Use" },
  { id: "section-5", label: "Other Terms" },
  { id: "section-6", label: "Buying & Selling Crypto" },
  { id: "section-7", label: "Order Execution" },
  { id: "section-8", label: "Assured Quantity" },
  { id: "section-9", label: "Qatobit Pro" },
  { id: "section-10", label: "Compliance & Monitoring" },
  { id: "section-11", label: "Taxes" },
  { id: "section-12", label: "Severability" },
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
  return (
    <div className="mb-3">
      <span className="text-white/30 text-xs font-inter font-medium">{id}&nbsp;&nbsp;</span>
      <span className="text-white/55 text-sm leading-7 font-inter">{children}</span>
    </div>
  );
}

export default function TradingPolicy() {
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
            <h1 className="text-3xl sm:text-4xl font-medium text-white">Trading Policy</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit Technologies Private Limited &mdash; CIN: U62099TN2023PTC163297</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Governs platform trading access</p>
            <p>Part of Terms of Use</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/8 bg-white/3 px-5 py-4">
          <p className="text-white/50 text-xs font-inter leading-relaxed">
            <strong className="text-white/70">Specified Disclaimer:</strong> Crypto products are unregulated and can be highly risky.
            There may be no regulatory recourse for any loss from such transactions.
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

          {/* Intro */}
          <section id="section-1" className="scroll-mt-8">
            <SectionTitle number="01" title="Introduction" />
            <Para>
              This Trading Policy ("Policy") governs access and use of the Services (as defined in the Terms of Use), procedures regarding
              the manner in which You can use Qatobit's Crypto Custody Wallet, and the processes for buying and selling Fiat Currency and
              Crypto on the electronic platforms, including the mobile application and/or website (collectively, "Platform").
            </Para>
            <Para className="mt-4">
              The Services are provided by and the Platform is operated by <strong className="text-white/80">Qatobit Private Limited</strong>,
              a private limited company incorporated under the Companies Act, 2013 (CIN: U62099TN2023PTC163297).
            </Para>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/3 p-5">
              <Para>
                This Policy constitutes a legal agreement between You (the User) and Qatobit (the operator). By registering a Qatobit Account
                and availing Services, You expressly consent to abide by this Policy. This Policy shall be construed as part of the Terms of Use
                and is read alongside the Privacy Policy and AML Policy. Qatobit reserves the right to change, add, remove, or modify this Policy
                at any time, with or without notice, in its sole discretion.
              </Para>
            </div>
          </section>

          <Divider />

          {/* Section 1 — User Crypto & Fiat */}
          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="02" title="User's Crypto and Fiat Currency — General Provisions" />
            <div className="space-y-3">
              <Clause id="1.1.1"><strong className="text-white/70">Permitted Currency:</strong> For buying or selling Crypto, You shall use only Indian Rupees (INR) where Cryptos are bought or sold with a fiat currency.</Clause>
              <Clause id="1.1.2"><strong className="text-white/70">Fiat Balance Management:</strong> You undertake to maintain only the minimum INR balance in Your Qatobit Account that is reasonably required to execute immediate or near-future trades.</Clause>
              <Clause id="1.1.3"><strong className="text-white/70">Crypto Storage:</strong> You shall keep and receive Cryptos in the crypto custody services provided by Qatobit, either directly or through its technology partners/subcontractors.</Clause>
              <Clause id="1.1.4"><strong className="text-white/70">Transaction Control:</strong> Qatobit may, in its sole discretion, permit, suspend, or disable any inflow and/or outflow of INR and/or Cryptos from Your Qatobit Crypto Custody Wallet, subject to Your compliance with applicable law and Qatobit's internal policies.</Clause>
              <Clause id="1.1.5"><strong className="text-white/70">Wallet-to-Wallet Transfers:</strong> At the time of this Policy's update, Qatobit does not permit wallet-to-wallet deposit or withdrawal of Cryptos. Should this feature be enabled, appropriate notifications and associated terms (including KYC/AML requirements) will be communicated to Users.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 1.2 — Custody Wallet */}
          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="03" title="Terms of Qatobit's Crypto Custody Wallet" />
            <div className="space-y-3">
              <Clause id="1.2.1"><strong className="text-white/70">Wallet Facility:</strong> Upon account activation, Qatobit provides a facility to store Cryptos purchased on the Platform ("Qatobit's Crypto Custody Wallet"). This may be provided directly by Qatobit or through technology partners.</Clause>
              <Clause id="1.2.2"><strong className="text-white/70">Ownership and Title:</strong> As between Qatobit and the User, the User is the sole possessor and owner of their Crypto in the Custody Wallet. Title to Cryptos remains with the respective User at all times.</Clause>
              <Clause id="1.2.3"><strong className="text-white/70">Execution Mechanism:</strong> All debit (sell) and credit (buy) transactions are executed by You directly. Qatobit merely facilitates with technology and value-added services (custody, wallet service, Assured Quantity).</Clause>
              <Clause id="1.2.4"><strong className="text-white/70">No Transfer of Title to Qatobit:</strong> There is no transfer of title or possession of Cryptos between the User and Qatobit. Any transfer of Crypto title is always between the User and the counterparty on the third-party exchange.</Clause>
              <Clause id="1.2.5"><strong className="text-white/70">Staking/Validation Authorization (Optional):</strong> You authorize Qatobit to deploy Cryptos in Your Wallet for validation/staking with established third-party validators/protocols until You withdraw or sell such Cryptos. Any earnings (block rewards, interest, staking rewards) from this deployment belong to Qatobit unless explicitly agreed otherwise in a separate service agreement.</Clause>
              <Clause id="1.2.6"><strong className="text-white/70">Purchase/Sale Mechanism:</strong> Purchase — Crypto is credited to the Custody Wallet and reflected as a credit in Your Account. Sale — Crypto is debited from the Custody Wallet and reflected as a debit in Your Account.</Clause>
              <Clause id="1.2.7"><strong className="text-white/70">No Interest on Crypto:</strong> You are not entitled to any interest on or benefit accruing from Crypto held in the Custody Wallet, unless explicitly covered under a separate staking/earning service.</Clause>
              <Clause id="1.2.8"><strong className="text-white/70">Supported Cryptos:</strong> You may not transfer, store, or receive any Crypto not supported by Qatobit. Qatobit shall not be liable for losses arising from any attempt to contravene this clause.</Clause>
              <Clause id="1.2.9"><strong className="text-white/70">Prohibited Use:</strong> Crypto in Your Custody Wallet may not be used to buy, sell, transfer, or trade goods, services, or products other than Services available through the Platform, unless Qatobit explicitly supports such activities.</Clause>
              <Clause id="1.2.10"><strong className="text-white/70">Geographical Restrictions (If enabled):</strong> If external transfers are enabled — You shall not transfer Crypto from Your Custody Wallet to any wallet belonging to a person resident outside India; and Cryptos received into the Custody Wallet shall not originate from a person resident outside India.</Clause>
              <Clause id="1.2.11"><strong className="text-white/70">Source of Cryptos:</strong> The source of Cryptos transacted on the Platform is not known to Qatobit. You agree to ensure all Cryptos always originate from legitimate sources within India.</Clause>
              <Clause id="1.2.12"><strong className="text-white/70">Reporting Errors:</strong> If Cryptos are erroneously credited to Your Account or Wallet, You must report this immediately and arrange for refund or transfer. Failure to do so constitutes a material breach.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 1.3 — Fiat */}
          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="04" title="Terms of Fiat Currency Use" />
            <div className="space-y-3">
              <Clause id="1.3.1"><strong className="text-white/70">Fiat Deposit and Ownership:</strong> To purchase Crypto, You transfer INR from Your own verified bank account to Your Qatobit Account. Qatobit will reflect the amount in Your Account, subject to processing delays. You remain the owner of INR balances.</Clause>
              <Clause id="1.3.2"><strong className="text-white/70">Custodial Authorization for Idle Fiat:</strong> If You maintain INR balance beyond immediate trading needs (as determined by Qatobit's internal metrics), You authorize Qatobit to deploy idle INR in deposits of scheduled commercial banks or government-backed securities in India. Any earnings from such deployment belong to Qatobit.</Clause>
              <Clause id="1.3.3"><strong className="text-white/70">Withdrawal:</strong> You may initiate a Withdrawal Request for fiat currency reflecting in Your tradable balance to Your own verified bank account. Qatobit will endeavour to process each request promptly, subject to banking delays.</Clause>
              <Clause id="1.3.4"><strong className="text-white/70">Payment Collection Agency:</strong> For this limited purpose, You appoint Qatobit as Your duly authorized payment collection agent. Qatobit does not operate a payment system.</Clause>
              <Clause id="1.3.5"><strong className="text-white/70">Invalidated Top-ups / Chargebacks:</strong> If a fiat top-up is later invalidated (e.g., chargeback, reversal), Qatobit is not liable. You will be responsible for the amount plus applicable fees, and You authorize Qatobit to recover amounts due by debiting Your fiat balance or through other legal means.</Clause>
              <Clause id="1.3.6"><strong className="text-white/70">Advance for Services:</strong> Fiat funds paid to Qatobit are an advance for services and must be utilized within 360 days. Failing this, funds will be returned to Your original banking source. If return is not possible with reasonable efforts, Qatobit reserves the right to forfeit the amount with intimation, subject to applicable law.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 1.4 — Other Terms */}
          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="05" title="Other Terms" />
            <div className="space-y-3">
              <Clause id="1.4.1"><strong className="text-white/70">Limits and Restrictions:</strong> Transfers or withdrawals of fiat or Cryptos may be subject to restrictions and limits notified by Qatobit on the Platform from time to time, including daily/monthly limits based on KYC level.</Clause>
              <Clause id="1.4.2"><strong className="text-white/70">Suspicious Activity:</strong> Qatobit reserves the right to block any bank transfers or transactions if there are reasonable grounds to believe the activity is suspicious, fraudulent, or violates applicable law or policy. Such activity may be reported to law enforcement agencies.</Clause>
            </div>

            <SubTitle title="Delisting of Crypto Assets" />
            <Para>Qatobit may, in its sole discretion, delist one or more Crypto assets listed on the Platform:</Para>
            <Ul items={[
              "Communication — Qatobit shall make reasonable efforts to communicate delisting events in advance.",
              "User Options — You will have the opportunity to sell such Crypto on the Platform and/or transfer it to your own blockchain wallet (as reasonably approved per our policies). External transfer availability is not guaranteed.",
              "Forced Sale — If You do not sell the delisted Crypto within the specified timeline, You irrevocably authorise Qatobit to sell it at the prevalent market rate. Equivalent INR (post applicable taxes) will be credited to Your Account.",
              "Liability Waiver — You unconditionally and irrevocably waive all rights and remedies against Qatobit for any losses arising from the decision to delist or the subsequent forced sale.",
              "Limit Orders — All existing Limit Orders for the delisted asset, if not executed or cancelled before the delisting date, will be cancelled by Qatobit.",
            ]} />
          </section>

          <Divider />

          {/* Section 2 — Order Types */}
          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="06" title="Terms for Buying or Selling Cryptos — Order Types" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Limit Order", "You specify the exact price at which the order is to be executed. The order is held until the market reaches your specified price."],
                ["Instant Order", "You choose to immediately buy or sell based on the price displayed on the Platform at the time you place the order."],
              ].map(([type, desc]) => (
                <div key={type} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-sm font-medium mb-1.5">{type}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <Para className="mt-5">
              You authorize Qatobit to execute Instant Orders and Limit Orders in the most efficient manner it deems fit,
              in accordance with the terms of third-party Crypto exchanges on which Qatobit places Your Orders on Your behalf,
              based on Your specific instructions.
            </Para>
          </section>

          <Divider />

          {/* Section 2.2 — Order Execution */}
          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="07" title="Execution of Orders on the Platform" />
            <div className="space-y-3">
              <Clause id="2.2.1"><strong className="text-white/70">Non-Agency Relationship:</strong> Qatobit is not a representative agent of the User but executes specific Crypto transactions on the User's instructions for the price confirmed by the User.</Clause>
              <Clause id="2.2.2"><strong className="text-white/70">Price Deviation Management:</strong> You consent to Qatobit absorbing any negative price deviation and retaining or refunding (at its sole discretion) any positive deviation in executing Orders, unless the Assured Quantity Service is used.</Clause>
              <Clause id="2.2.3"><strong className="text-white/70">Sufficient Balance:</strong> You must ensure sufficient balance of Cryptos or Fiat Currency in Your Account before executing any transaction.</Clause>
              <Clause id="2.2.4"><strong className="text-white/70">Dispute Resolution:</strong> In case of any dispute relating to the time or authenticity of a transaction, Qatobit reserves the right to ascertain the time and/or authenticity of the disputed transaction based on Qatobit's records.</Clause>
              <Clause id="2.2.5"><strong className="text-white/70">Complex Trade Execution:</strong> To fulfill a single trade, Qatobit may execute multiple inter-related trades (e.g., fiat-to-Crypto or Crypto-to-Crypto) on different third-party exchanges to achieve the final instructed quantity.</Clause>
              <Clause id="2.2.6"><strong className="text-white/70">Trade Finality:</strong> Sale and/or purchase transactions initiated on the Platform are <strong className="text-white/80">final, irreversible, non-refundable, and non-cancellable</strong>. Once initiated, a transaction is absolute and unconditional.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 2.3 — Assured Quantity */}
          <section id="section-8" className="scroll-mt-8">
            <SectionTitle number="08" title="Assured Quantity Services (Qatobit Lite / Standard)" />
            <div className="space-y-3">
              <Clause id="2.3.1"><strong className="text-white/70">Service Description:</strong> Qatobit may offer Assured Quantity Service for Instant Orders on its standard platform. Under this service, Qatobit assures You of the quantity and price displayed for Instant Orders in exchange for a service fee, protecting You from market deviation at execution.</Clause>
              <Clause id="2.3.2"><strong className="text-white/70">Price Aggregation:</strong> Qatobit aggregates Crypto prices from various third-party exchanges to provide an estimation of Cryptos to be bought/sold. The price shown is based on algorithms factoring volatility, exchange fees, and availability.</Clause>
              <Clause id="2.3.3"><strong className="text-white/70">Deviation Retention:</strong> You authorize Qatobit to execute necessary complex trades (including multiple transaction legs and quantity rounding) to achieve the assured quantity. Qatobit absorbs negative deviations and retains/reimburses positive deviations. Qatobit shall make good any shortfall to the User.</Clause>
              <Clause id="2.3.4"><strong className="text-white/70">Contract Note:</strong> The Contract Note issued by Qatobit will detail the transactions executed and serve as proof of express authorization for Assured Quantity Services and any retention/reimbursement of excess quantity as service fees.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 2.4 — Pro */}
          <section id="section-9" className="scroll-mt-8">
            <SectionTitle number="09" title="Qatobit Pro Services (Advanced Users)" />
            <div className="space-y-3">
              <Clause id="2.4.1"><strong className="text-white/70">Direct Exchange Access:</strong> For advanced users utilizing Qatobit Pro Services, any order placed is executed through such third-party Crypto exchange as decided by the User or Qatobit based on optimal execution at the time.</Clause>
              <Clause id="2.4.2"><strong className="text-white/70">No Assured Quantity:</strong> The Assured Quantity Services described above are not provided as part of Qatobit Pro Services.</Clause>
              <Clause id="2.4.3"><strong className="text-white/70">Execution Risk:</strong> In Qatobit Pro, the execution price may deviate from the displayed price due to market volatility (slippage). The User acknowledges and bears the risk of this deviation.</Clause>
              <Clause id="2.4.4"><strong className="text-white/70">Transparency:</strong> The Contract Note for Qatobit Pro transactions will detail the exchange used and the final executed price, which may reflect market spread and slippage.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 3 — Compliance */}
          <section id="section-10" className="scroll-mt-8">
            <SectionTitle number="10" title="Compliance, Monitoring, and Termination" />
            <div className="space-y-3">
              <Clause id="3.1"><strong className="text-white/70">Monitoring:</strong> Qatobit may monitor transactions to identify suspicious or illegal activity or transactions violating this Policy and/or the Terms of Use.</Clause>
              <Clause id="3.2"><strong className="text-white/70">Action on Suspicion:</strong> If Qatobit, in its sole discretion, classifies a transaction as suspicious, illegal, or in contravention of this Policy, it may place a hold on the transaction, request more information, suspend Your Account, freeze balances, or terminate this agreement.</Clause>
              <Clause id="3.3"><strong className="text-white/70">Holding Funds:</strong> In case of transactions suspected to be fraudulent or upon receipt of complaints from banks/payment gateways/regulatory authorities, Qatobit may block the User's Account and Crypto Custody Wallet/fiat balances until the enquiry is completed.</Clause>
              <Clause id="3.4"><strong className="text-white/70">Refusal of Execution:</strong> Qatobit reserves the right to refuse to execute any order and/or transaction if it is in contravention of this Policy, fails to comply with enforcement directions, appears suspicious or malicious, or is otherwise deemed necessary in Qatobit's reasonable discretion.</Clause>
              <Clause id="3.5"><strong className="text-white/70">Role of Qatobit (Non-Agency):</strong> Qatobit acts on the specific instructions of the User by executing specific Crypto transactions for the price specified by the User. Qatobit is not a general or representative agent of the User. No transfer of title is occasioned by Qatobit.</Clause>
            </div>
          </section>

          <Divider />

          {/* Section 4 — Taxes */}
          <section id="section-11" className="scroll-mt-8">
            <SectionTitle number="11" title="Taxes" />
            <div className="space-y-3">
              <Clause id="4.1"><strong className="text-white/70">TDS Applicability:</strong> All purchases of Crypto shall be subject to withholding of Tax Deducted at Source (TDS) as per the Income Tax Act, 1961 and associated circulars, or any other applicable taxes.</Clause>
              <Clause id="4.2"><strong className="text-white/70">TDS Deduction:</strong> TDS will be deducted by Qatobit at the prescribed rate communicated on the Platform from time to time. This tax shall be deducted before sale proceeds are credited to the User's Account.</Clause>
              <Clause id="4.3"><strong className="text-white/70">TDS Certificates:</strong> TDS certificates will be provided to Users based on the PAN details provided by the User.</Clause>
              <Clause id="4.4"><strong className="text-white/70">User Tax Responsibility:</strong> The User is solely responsible for payment of any other applicable tax, including income tax, gift tax, GST, capital gains tax, etc., in respect of the realization of consideration from the sale or transfer of Crypto.</Clause>
              <Clause id="4.5"><strong className="text-white/70">Deduction on Rewards/Earnings:</strong> Qatobit reserves the right to deduct withholding tax under applicable provisions of the Indian Income-tax Act, 1961 on any amounts due, payable, or paid to You, including earnings from staking or other platform rewards.</Clause>
              <Clause id="4.6"><strong className="text-white/70">GST / Other Taxes:</strong> Any direct or indirect tax including GST, TDS, TCS, as applicable under the laws of the applicable jurisdiction, shall be collected by Qatobit.</Clause>
            </div>

            <div className="mt-6 rounded-xl border border-white/8 bg-white/3 p-5">
              <p className="text-white/50 text-xs font-inter font-medium mb-3 uppercase tracking-wide">Statutory Tax Summary</p>
              <div className="space-y-2 font-inter text-xs">
                {[
                  ["TDS on Crypto Sale/Transfer", "1% under Section 194S, Income Tax Act 1961"],
                  ["Income Tax on VDA Gains", "30% flat under Section 115BBH (User's direct obligation)"],
                  ["GST on Platform Fees", "18% under CGST/SGST Act 2017 (on fees only, not on asset value)"],
                ].map(([tax, rate]) => (
                  <div key={tax} className="flex justify-between gap-4">
                    <span className="text-white/50">{tax}</span>
                    <span className="text-white/70 shrink-0">{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* Section 5 — Severability */}
          <section id="section-12" className="scroll-mt-8">
            <SectionTitle number="12" title="Severability and Exclusion" />
            <Para>
              Qatobit has taken every effort to ensure that this Policy adheres to applicable laws.
              The invalidity or unenforceability of any part of this Policy shall not prejudice or affect the validity or
              enforceability of the remainder of this Policy.
            </Para>
          </section>

        </main>
      </div>
    </div>
  );
}
