'use client';

import { motion } from "framer-motion";
import { comparisonData } from "@/constants/ComparisonData";

const Comparison = () => {
  return (
    <section className="relative px-4 md:px-8 xl:px-12 py-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-medium text-sm uppercase">
            <span className="h-2 w-2 bg-white" />
            Why Us
          </div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-medium leading-tight mb-8 md:mb-16"
        >
          A trading app and a wealth platform
          <br className="hidden sm:block" />
          answer different questions.
        </motion.h2>

        {/* Mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden relative rounded-2xl p-[1.5px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-2xl" />
          <div
            className="absolute -inset-20"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 260deg, #ff9d6c 278deg, #FF6100 305deg, #FF6100 320deg, #ff9d6c 345deg, transparent 360deg)",
              animation: "border-beam-spin 3s linear infinite",
            }}
          />
          <div className="relative rounded-[11px] overflow-hidden bg-white">
            {/* Column headers */}
            <div className="grid grid-cols-3 bg-linear-to-b from-primary via-[#F28A4D] to-[#F8F6F5]">
              <div className="px-2 py-3" />
              <div className="px-2 py-3 text-center text-sm font-medium text-white border-l border-primary/20">Qatobit</div>
              <div className="px-2 py-3 text-center text-sm font-medium text-white border-l border-primary/20">Trading-first</div>
            </div>
            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div key={row.question} className={`grid grid-cols-3 divide-x divide-neutral-200 ${index !== 0 ? "border-t border-neutral-200" : ""}`}>
                <p className="px-2 py-3 text-[12px] text-primary font-medium leading-relaxed">{row.question}</p>
                <p className="px-2 py-3 text-[12px] text-neutral-800 leading-relaxed">{row.qatobit}</p>
                <p className="px-2 py-3 text-[12px] text-neutral-500 leading-relaxed">{row.tradingFirst}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative hidden md:block rounded-[28px] p-[1.5px] overflow-hidden"
        >
          {/* static dim base border */}
          <div className="absolute inset-0 bg-primary/20 rounded-[28px]" />
          {/* rotating beam */}
          <div
            className="absolute -inset-20"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 260deg, #ff9d6c 278deg, #FF6100 305deg, #FF6100 320deg, #ff9d6c 345deg, transparent 360deg)",
              animation: "border-beam-spin 3s linear infinite",
            }}
          />
          <div className="relative rounded-[27px] overflow-hidden bg-white">
            <table className="w-full border-collapse font-inter leading-tight tracking-tighter">
              <thead>
                <tr className="bg-gradient-to-b from-primary via-[#F28A4D] to-[#F8F6F5]">
                  <th className="w-[26%] px-6 md:px-10 py-5 md:py-10" />
                  <th className="w-[37%] px-6 md:px-10 py-5 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
                    Qatobit
                  </th>
                  <th className="w-[37%] px-6 md:px-10 py-5 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
                    Trading-first platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.question}
                    className={index !== comparisonData.length ? "border-t border-neutral-300/80" : ""}
                  >
                    <td className="px-6 md:px-8 py-4 md:py-6 align-top text-primary text-sm md:text-lg font-normal leading-relaxed">
                      {row.question}
                    </td>
                    <td className="px-6 md:px-8 py-4 md:py-6 align-top border-l border-neutral-300/80 text-sm md:text-lg text-neutral-800 leading-relaxed">
                      {row.qatobit}
                    </td>
                    <td className="px-6 md:px-8 py-4 md:py-6 align-top border-l border-neutral-300/80 text-sm md:text-lg text-neutral-800 leading-relaxed">
                      {row.tradingFirst}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
