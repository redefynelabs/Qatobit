"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const policies = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
    href: "/legal/privacy-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "AML Policy",
    description: "Our anti-money laundering and KYC compliance framework.",
    href: "/legal/aml-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Trading Policy",
    description: "Rules, limits, and conditions governing all trades on Qatobit.",
    href: "/legal/trading-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Cookie Policy",
    description: "What cookies we use, why, and how to manage your preferences.",
    href: "/legal/cookie-policy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="8" r="1" fill="currentColor" />
        <circle cx="9" cy="15" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Terms & Conditions",
    description: "The legal agreement between you and Qatobit when using our platform.",
    href: "/legal/terms-and-conditions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Risk Disclosure",
    description: "Understand the risks involved in crypto investment before you begin.",
    href: "/legal/risk-disclosure",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function LegalHub() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-18"
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase">
            Legal
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium text-white leading-tight">
            Policies &amp; Terms
          </h1>
          <p className="mt-4 text-white/50 text-base sm:text-lg max-w-xl leading-relaxed font-inter">
            Everything governing how Qatobit operates, protects your data, and
            manages your investments — in one place.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {policies.map((policy) => (
            <motion.div key={policy.href} variants={item}>
              <Link
                href={policy.href}
                target="_blank"
                className="group flex flex-col gap-4 p-6 sm:p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/6 group-hover:bg-primary/15 flex items-center justify-center text-white/50 group-hover:text-primary transition-all duration-300">
                  {policy.icon}
                </div>

                <div className="flex-1">
                  <h2 className="text-white font-medium text-base sm:text-lg">
                    {policy.title}
                  </h2>
                  <p className="mt-1.5 text-white/40 text-sm leading-relaxed font-inter">
                    {policy.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white/30 group-hover:text-primary text-sm font-inter transition-colors duration-300">
                  <span>Read</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
