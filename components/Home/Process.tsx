'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "../Reusable/PrimaryButton";

const processSteps = [
  {
    title: "SIGN UP",
    image: "/assets/Home/Process/signup.png",
    description:
      "Create your Qatobit account with email, phone, and a few basic details. About two minutes.",
  },
  {
    title: "COMPLETE KYC AND DEPOSIT",
    image: "/assets/Home/Process/deposit.png",
    description:
      "Verify your identity with PAN and Aadhaar. Deposit INR from your bank account. Minimum ₹200.",
  },
  {
    title: "CHOOSE YOUR INDEX AND INVEST",
    image: "/assets/Home/Process/invest.png",
    description:
      "Select a QSI Crypto Index. Allocate from ₹2,000 as a lump sum or SIP. The index rebalances monthly from that point.",
  },
];

const Process = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,91,19,0.28),transparent_75%)] md:w-[60%]  mx-auto" />
      </div>

      {/* Curved bottom arc */}
      <Image
        src="/assets/Home/curve.svg"
        alt=""
        width={1346}
        height={120}
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />

      <div className="relative z-10 mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 md:gap-8 mb-16 lg:mb-20">
          <div className="space-y-5 flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-start w-full">
            <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-medium text-sm">
              <span className="h-2 w-2  bg-white" />
              Getting Started
            </div>

            <h2 className="text-3xl md:text-5xl xl:text-6xl font-medium">
              You do three things.
              <br />
              Our index does the rest.
            </h2>
          <p className="md:hidden font-inter text-base lg:text-lg text-neutral-600 lg:text-right max-w-xs lg:max-w-sm shrink-0">
            Sign up, verify, deposit, choose an index.
            <br />
            The methodology takes it from there.
          </p>
          </div>
          <p className=" hidden md:block font-inter text-base lg:text-lg text-neutral-600 lg:text-right max-w-xs lg:max-w-sm shrink-0 ">
            Sign up, verify, deposit, choose an index.
            <br />
            The methodology takes it from there.
          </p>
        </div>

        {/* Steps — Desktop: single grid, images row + text row share same columns */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {/* Row 1: images + arrows */}
          {processSteps.map((step, index) => (
            <div key={`img-${step.title}`} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={360}
                    height={700}
                    className="w-full max-w-65 xl:max-w-80 h-auto"
                  />
                </motion.div>
              </motion.div>

              {index < processSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                  className="origin-left shrink-0 mx-2 xl:mx-4 flex items-center"
                >
                  <Image
                    src="/assets/Home/arrow.png"
                    alt="next step"
                    width={130}
                    height={50}
                    className="w-24 xl:w-32 h-auto"
                  />
                </motion.div>
              )}
            </div>
          ))}

          {/* Row 2: text — empty divs hold arrow column widths */}
          {processSteps.map((step, index) => (
            <div key={`txt-${step.title}`} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="text-center px-4 mt-8 max-w-sm mx-auto"
              >
                <h3 className="text-xl xl:text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-neutral-600 leading-relaxed text-sm xl:text-base">
                  {step.description}
                </p>
              </motion.div>

              {/* spacer keeps arrow columns consistent */}
              {index < processSteps.length - 1 && <div />}
            </div>
          ))}
        </div>

        {/* Steps — Mobile */}
        <div className="lg:hidden flex flex-col gap-2">
          {processSteps.map((step, index) => (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={400}
                  className="w-28 sm:w-36 h-auto shrink-0"
                />
                <div>
                  <span className="text-primary text-xs font-medium">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-base sm:text-lg font-semibold mt-0.5 mb-2">{step.title}</h3>
                  <p className="font-inter text-neutral-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 lg:mt-20 flex justify-center"
        >
          <PrimaryButton text="Open an account" href="/join-waitlist" className=" px-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
