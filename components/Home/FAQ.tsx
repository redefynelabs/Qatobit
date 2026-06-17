"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How is Qatobit different from other crypto platforms?",
    answer:
      "Qatobit helps investors approach crypto like a portfolio manager. Four institutionally designed QSI Crypto Indices, rebalanced monthly and backed by live Proof of Reserves from day one.",
  },
  {
    question: "How do you build the Crypto Indices?",
    answer:
      "Each index follows a transparent methodology including asset selection, weighting rules, and scheduled rebalancing.",
  },
  {
    question: "Why does Qatobit rebalance monthly?",
    answer:
      "Monthly rebalancing helps maintain target allocations while adapting to market changes in a systematic way.",
  },
  {
    question: "Is Qatobit safe?",
    answer:
      "Assets are custodied through institutional-grade partners and supported by multiple security layers.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "You can start investing with as little as ₹2,000.",
  },
  {
    question: "Can I run a SIP into a Crypto Index?",
    answer:
      "Yes. Recurring SIP investments are supported across available indices.",
  },
  {
    question: "What are Tokenized Stocks?",
    answer:
      "Tokenized stocks are blockchain-based representations of traditional equities.",
  },
  {
    question: "What is live Proof of Reserves?",
    answer:
      "Proof of Reserves allows users to verify that platform-held assets exist and match customer liabilities.",
  },
];

function AccordionItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-black/20">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium text-black">
          {question}
        </span>

        <span className="shrink-0 text-primary">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 leading-8 max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-8 lg:px-10 lg:py-28">
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-44
          -translate-x-1/2
          h-[400px]
          w-[90%]
          rounded-full
          bg-primary/20
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Banner */}
        <div
          className="
            relative
            overflow-visible
            rounded-[32px]
            bg-primary
            min-h-[260px]
            lg:min-h-[300px]
            px-8
            py-10
            md:px-12
            lg:px-14
          "
        >
          {/* Pattern */}
          <Image
            src="/assets/pattern.png"
            alt=""
            width={1514}
            height={1009}
            className="
              absolute
              right-0
              bottom-0
              h-full
              w-[45%]
              object-cover
              object-left
              opacity-30
              pointer-events-none
            "
          />

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
              What investors ask first (FAQs)
            </h2>

            <p className="mt-6 max-w-lg text-base text-white/90 md:text-lg">
              Eight questions that come up most often. The full FAQ hub
              goes deeper.
            </p>
          </div>

          {/* Robot */}
<div
  className="
  relative
    md:absolute
    md:right-20
    bottom-0
    z-20
    pointer-events-none
  "
>
  <Image
    src="/assets/qatobot.png"
    alt="Qatobot"
    width={1026}
    height={1143}
    priority
    className="
      w-auto
      h-[400px]
      object-contain
    "
  />
</div>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-14 max-w-5xl">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? -1 : index
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;