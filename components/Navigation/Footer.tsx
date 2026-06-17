"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FooterLinks } from "@/constants/FooterLinks";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#131313]">

      {/* Vertical animated lines */}
      <div className="absolute inset-0 z-10 flex justify-between px-4 sm:px-6 md:px-10 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative h-full w-px overflow-hidden bg-orange-500/10">
            <motion.div
              className="absolute left-0 h-48 w-px bg-orange-300/70"
              animate={{ y: [-192, 2000] }}
              transition={{ duration: 6 + i * 1.2, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
            />
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="relative">
        <div className="bg-[#ff9757] w-full px-4 sm:px-6 lg:px-10 pt-14 pb-20 sm:pt-20 sm:pb-38 text-center">
          <div className="relative z-30 flex flex-col items-center max-w-3xl mx-auto">
            <Image
              src="/assets/logo.png"
              alt="Qatobit"
              width={140}
              height={40}
              className="h-auto w-28 sm:w-36"
            />

            <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              Read it. Then decide
            </h2>

            <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base font-inter leading-relaxed text-white/90 px-2">
              The methodology is published. The reserves are live.
              The minimum is small enough to test a thesis before
              you commit to one.
            </p>

            <button className="mt-6 sm:mt-8 py-3 sm:py-4 w-full max-w-xl rounded-lg bg-black font-inter text-white text-sm sm:text-base shadow-[0_0_40px_rgba(255,120,40,0.5)] hover:shadow-[0_0_60px_rgba(255,120,40,0.6)] transition-shadow">
              Start Investing
            </button>
          </div>
        </div>

        {/* Dark curved top of footer */}
        <div className="absolute bottom-0 bg-[#131313] w-full h-16 sm:h-20 md:h-28 rounded-t-[40px] sm:rounded-t-[80px] md:rounded-t-[160px]" />
      </div>

      {/* Footer content */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16 pt-10 sm:pt-12 pb-10 sm:pb-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.5fr_1fr]">

          {/* Left */}
          <div className="w-full max-w-md">
            <Image
              src="/assets/logo.png"
              alt="Qatobit"
              width={140}
              height={40}
              className="h-auto"
            />

            <p className="mt-5 text-base text-white/50 leading-relaxed">
              India's Crypto Wealth Architect. Structured, research-backed
              access to digital assets.
            </p>

            <div className="mt-10 sm:mt-14">
              <h4 className="text-base sm:text-lg text-white font-medium">
                Subscribe Newsletter – Once every two weeks.
              </h4>

              <p className="mt-3 text-base text-white/40 leading-relaxed">
                Portfolio notes, methodology updates, and the occasional honest
                acknowledgement when something does not go as expected.
              </p>

              <div className="mt-5 sm:mt-6 flex overflow-hidden rounded-xl bg-white">
                <input
                  placeholder="Type your email"
                  className="h-12 sm:h-14 flex-1 px-4 sm:px-5 text-black outline-none text-sm"
                />
                <button className="m-1.5 sm:m-2 rounded-lg bg-primary px-4 sm:px-8 text-white text-sm font-medium shrink-0">
                  Subscribe
                </button>
              </div>
            </div>

            <p className="mt-8 sm:mt-10 text-base leading-7 text-white/30 font-inter">
              Disclaimer – Crypto investments are subject to market risk and
              volatility. Past performance is not indicative of future returns.
              This is not investment advice. Please consult a qualified
              financial advisor before investing.
            </p>

            <p className="mt-6 text-base text-white/25">
              © 2026 - All rights reserved by Qatobit, Designed by Sanjai K
            </p>
          </div>

          {/* Right — links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            {FooterLinks.map((section) => (
              <div key={section.name}>
                <h4 className="mb-4 sm:mb-6 text-sm sm:text-lg font-medium text-white">
                  {section.name}
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                        className="text-xs sm:text-base text-white/40 transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
