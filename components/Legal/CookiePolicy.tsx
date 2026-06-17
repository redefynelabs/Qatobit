"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sections = [
  { id: "section-1", label: "Introduction" },
  { id: "section-2", label: "What are Cookies?" },
  { id: "section-3", label: "Data Collected" },
  { id: "section-4", label: "How We Use Cookies" },
  { id: "section-5", label: "Types of Cookies" },
  { id: "section-6", label: "Data Sharing" },
  { id: "section-7", label: "Managing Cookies" },
  { id: "section-8", label: "Third-Party Cookies" },
  { id: "section-9", label: "Policy Changes" },
  { id: "section-10", label: "Contact Us" },
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

const cookieTypes = [
  {
    type: "Strictly Necessary",
    description: "Essential for the Platform to function properly and securely, enabling basic features like secure login, transaction processing, and page navigation.",
  },
  {
    type: "Functional",
    description: "Allow the Platform to remember your choices and preferences (e.g., language, user settings) to provide a more personalised experience.",
  },
  {
    type: "Analytics / Performance",
    description: "Help us understand how Users interact with the Platform, identify errors, and gather statistical data to improve service performance.",
  },
  {
    type: "Advertising / Targeting",
    description: "Used to deliver relevant advertisements and measure the effectiveness of marketing campaigns, based on your inferred interests and browsing behaviour.",
  },
];

export default function CookiePolicy() {
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
            <h1 className="text-3xl sm:text-4xl font-medium text-white">Cookie Policy</h1>
            <p className="mt-2 text-white/40 text-sm font-inter">Qatobit Technologies Private Limited</p>
          </div>
          <div className="text-right text-xs text-white/30 font-inter space-y-1">
            <p>Read alongside Terms of Use</p>
            <p>and Privacy Policy</p>
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
            <SectionTitle number="01" title="Introduction" />
            <Para>
              By accessing or using the Qatobit Platform and Services, you agree to the use of cookies and similar tracking technologies
              as described in this Policy, the Terms of Use, and the Privacy Policy.
            </Para>
          </section>

          <Divider />

          <section id="section-2" className="scroll-mt-8">
            <SectionTitle number="02" title="What are Cookies?" />
            <Para>
              Cookies are small data files — usually text files — placed on your computer, mobile device, or other device when you visit a website
              or use a mobile application. They allow the Platform to recognise your device, remember your actions and preferences
              (such as login details, language, font size, and other display preferences) over a period of time, and analyse your usage patterns.
            </Para>
          </section>

          <Divider />

          <section id="section-3" className="scroll-mt-8">
            <SectionTitle number="03" title="Data Collected via Cookies and Technologies" />
            <Para>The data we may receive, store, use, and process through cookies and similar technologies includes, but is not limited to:</Para>
            <Ul items={[
              "Your device ID, IP address, and general device geolocation.",
              "Device and software-related information (e.g., device model, manufacturer, operating system).",
              "Details of your usage — time spent on each feature, links clicked, viewing and browsing choices made.",
              "Security and authentication information (e.g., session IDs).",
            ]} />
          </section>

          <Divider />

          <section id="section-4" className="scroll-mt-8">
            <SectionTitle number="04" title="How We Use Cookies and Other Technologies" />
            <Para>We use cookies and other technologies for the following purposes:</Para>
            <div className="mt-5 space-y-3">
              {[
                ["Enhancement & Personalisation", "To enhance and personalise the user experience, while observing and analysing user behaviour."],
                ["Platform Functionality", "To enable core features and secure access to specific areas of the Platform (Strictly Necessary Cookies)."],
                ["Security & Monitoring", "To monitor the technical performance and stability of the Platform and to keep it safe and secure, particularly for anti-fraud and AML purposes."],
                ["Analytics", "To gather data on how You interact with the Platform and to improve its performance and layout."],
                ["Marketing & Promotional Content", "To show features and content that may interest you, including third-party educational, infotainment, entertainment, marketing, or promotional material."],
              ].map(([label, detail]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-xs font-medium mb-1">{label}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          <section id="section-5" className="scroll-mt-8">
            <SectionTitle number="05" title="Types of Cookies We Use" />
            <Para>We use both temporary and persistent cookies on the Platform:</Para>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Session Cookies", "Temporary cookies deleted when you close your browser or log out. Essential for securing your session and carrying information across pages during a single visit."],
                ["Persistent Cookies", "Remain on your device until they expire or are manually deleted. Used to recognise you as a returning user and remember your preferences."],
              ].map(([type, desc]) => (
                <div key={type} className="rounded-xl border border-white/8 bg-white/3 p-4">
                  <p className="text-white/80 text-sm font-medium mb-1.5">{type}</p>
                  <p className="text-white/50 text-xs font-inter leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm font-inter border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-white/50 font-medium">Cookie Type</th>
                    <th className="text-left py-3 text-white/50 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/6">
                  {cookieTypes.map(({ type, description }) => (
                    <tr key={type}>
                      <td className="py-3 pr-6 text-white/70 text-xs font-medium align-top whitespace-nowrap">{type}</td>
                      <td className="py-3 text-white/50 text-xs leading-relaxed align-top">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Divider />

          <section id="section-6" className="scroll-mt-8">
            <SectionTitle number="06" title="Using, Processing, and Sharing of Collected Data" />
            <Para>
              You agree and permit Qatobit to use and process the information and data collected pursuant to this Policy for the purposes set out herein.
              You also agree and permit Qatobit to share and/or transfer or assign that information to:
            </Para>
            <Ul items={[
              "Any third party, including our group or affiliated companies, for them to provide services to us (e.g., analytics, custody services, infrastructure).",
              "Any third party for them to use this data for their own business, services, or other purposes, provided such sharing is in compliance with applicable law and our Privacy Policy.",
              "Any law enforcement, regulatory, judicial, quasi-judicial, administrative, or statutory authority, whether in India or elsewhere, as required by law or binding request.",
            ]} />
          </section>

          <Divider />

          <section id="section-7" className="scroll-mt-8">
            <SectionTitle number="07" title="Managing Cookies" />
            <Para>
              You can manage cookies through your web browser settings. Most modern browsers allow you to accept, reject, or delete cookies.
            </Para>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/3 px-5 py-4">
              <p className="text-white/70 text-xs font-medium mb-1">Please Note</p>
              <p className="text-white/50 text-xs font-inter leading-relaxed">
                Disabling certain cookies — particularly Strictly Necessary or Functional cookies — may limit the functionality of the Platform
                or prevent you from using certain Services.
              </p>
            </div>
          </section>

          <Divider />

          <section id="section-8" className="scroll-mt-8">
            <SectionTitle number="08" title="Third-Party Cookies" />
            <Para>
              Qatobit may use third-party service providers (e.g., for analytics, security, or advertising) who may place their own cookies
              on your device when you use the Platform. These cookies are subject to the respective privacy and cookie policies of those
              third-party providers. Qatobit is not responsible for the privacy practices of these third parties.
            </Para>
          </section>

          <Divider />

          <section id="section-9" className="scroll-mt-8">
            <SectionTitle number="09" title="Changes to this Policy" />
            <Para>
              Qatobit reserves the right to update this Policy from time to time to reflect changes in our practices or legal obligations.
              We will notify you of any material changes by posting the updated Policy on the Platform.
              You are requested to regularly check, understand, and agree to this Policy each time you visit the Platform and before using the Services.
            </Para>
          </section>

          <Divider />

          <section id="section-10" className="scroll-mt-8">
            <SectionTitle number="10" title="Contact Us" />
            <Para>If you have any questions about this Cookie Policy, please contact us:</Para>
            <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-2">
              <p className="text-white font-medium">Qatobit Technologies Private Limited</p>
              <p className="text-white/55 text-sm font-inter">
                Email: <a href="mailto:support@qatobit.com" className="text-primary hover:underline">support@qatobit.com</a>
              </p>
              <p className="text-white/55 text-sm font-inter">
                Or refer to the contact information in the Terms of Use.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
