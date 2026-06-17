'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import MovingGrid from "../Reusable/MovingGrid";
import PrimaryButton from "../Reusable/PrimaryButton";

const features = [
  {
    title: "Live Proof of Reserves",
    description:
      "Are the assets really there? Check the chain: audited contracts, public wallet attestations, and real-time asset breakdowns.",
  },
  {
    title: "Custody by Liminal",
    description:
      "Custody in one room, operations in another. Custody by Liminal, held apart from company funds.",
  },
  {
    title: "CERT-In audited",
    description:
      "An audit is someone outside checking the locks. CERT-In audited across infrastructure, application, and operations, renewed on a defined cadence.",
  },
  {
    title: "User assets are insured",
    description:
      "For the scenario nobody enjoys writing about. User assets in custody are insured.",
  },
  {
    title: "Money that can leave",
    description:
      "At some point someone withdraws a balance on someone else's screen. INR returns to your bank from ₹200, no fee, the same rail it arrived on.",
  },
];

function FeatureCard({
  title,
  description,
  index,
  delay = 0,
}: {
  title: string;
  description: string;
  index: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-2xl bg-neutral-900 border border-primary overflow-hidden p-5 md:p-7"
    >
      {/* Full dot grid — gray */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(150,150,150,0.25) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* 10 primary accent dots */}
      {[
        [8, 22], [23, 67], [41, 8], [55, 83], [72, 38],
        [88, 14], [15, 91], [63, 51], [80, 74], [35, 44],
      ].map(([top, left], i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-primary pointer-events-none"
          style={{ top: `${top}%`, left: `${left}%` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-primary text-sm  font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-white font-medium text-lg md:text-xl leading-snug">
            {title}
          </h3>
        </div>
        <p className="font-inter text-neutral-400 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SecuritySection() {
  return (
    <section className="py-14 md:py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 lg:mb-20 px-6 md:px-10">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-medium text-sm">
            <span className="h-2 w-2 bg-white" />
            Security
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tighter">
            The question every crypto investor
            <br />
            has learned to ask.
          </h2>
        </div>

        <p className="font-inter text-base lg:text-lg text-neutral-600 lg:text-right max-w-xs lg:max-w-sm shrink-0">
          Not whether the market can fall. Whether the platform can. 
          The first is market risk, and it stays yours. The second has an architecture.
        </p>
      </div>

      {/* Dark grid section */}
      <div className="relative overflow-hidden min-h-[580px] lg:min-h-[640px]">
        <MovingGrid />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-10 lg:p-14 h-full">
          {/* Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {/* 2×2 top cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((f, i) => (
                <FeatureCard key={f.title} {...f} index={i} delay={i * 0.1} />
              ))}
            </div>

            {/* 5th card centered */}
            <div className="sm:w-1/2 sm:mx-auto">
              <FeatureCard {...features[4]} index={4} delay={0.4} />
            </div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center lg:w-[38%] shrink-0"
          >
            <Image
              src="/assets/Home/Security/Phone_Mockup.png"
              alt="Qatobit app security"
              width={400}
              height={800}
              className="h-full max-h-[560px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center w-full py-6 gap-6">
        <PrimaryButton text="Read the security page" className=" font-inter" />
        <p className=" text-gray-500  font-inter text-sm text-center">Crypto investments are subject to market risk. Not investment advice. Past performance is not indicative of future results.</p>
      </div>
    </section>
  );
}
