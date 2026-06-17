'use client';

import { motion } from "framer-motion";
import { comparisonData } from "@/constants/ComparisonData";

const Comparison = () => {
  return (
    <section className="relative px-4 md:px-8 xl:px-12 py-20">
      <div className="relative z-10 max-w-[1550px] mx-auto">
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
          className="text-center text-4xl md:text-5xl font-medium leading-tight mb-16"
        >
          A trading app and a wealth platform
          <br className="hidden sm:block" />
          answer different questions.
        </motion.h2>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] p-[1.5px] overflow-hidden"
        >
          {/* static dim base border */}
          <div className="absolute inset-0 bg-primary/20 rounded-[28px]" />
          {/* rotating beam — large inset keeps gradient centered for even coverage */}
          <div
            className="absolute -inset-20"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 260deg, #ff9d6c 278deg, #FF6100 305deg, #FF6100 320deg, #ff9d6c 345deg, transparent 360deg)",
              animation: "border-beam-spin 3s linear infinite",
            }}
          />
          {/* scroll wrapper — overflow-x-auto for mobile horizontal scroll */}
          <div className="relative rounded-[27px] overflow-x-auto bg-white">
            <table className="w-full min-w-[680px] border-collapse font-inter leading-tight tracking-tighter">
              {/* Header */}
              <thead>
                <tr className="bg-gradient-to-b from-primary via-[#F28A4D] to-[#F8F6F5]">
                  <th className="w-[26%] px-4 sm:px-6 md:px-10 py-5 md:py-10" />
                  <th className="w-[37%] px-4 sm:px-6 md:px-10 py-5 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
                    Qatobit
                  </th>
                  <th className="w-[37%] px-4 sm:px-6 md:px-10 py-5 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
                    Trading-first platforms
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.question}
                    className={
                      index !== comparisonData.length
                        ? "border-t border-neutral-300/80"
                        : ""
                    }
                  >
                    <td className="px-4 sm:px-6 md:px-10 py-4 md:py-8 align-top text-primary text-xs sm:text-sm md:text-xl font-normal leading-relaxed">
                      {row.question}
                    </td>
                    <td className="px-4 sm:px-6 md:px-10 py-4 md:py-8 align-top border-l border-neutral-300/80 text-xs sm:text-sm md:text-lg text-neutral-800 leading-relaxed">
                      {row.qatobit}
                    </td>
                    <td className="px-4 sm:px-6 md:px-10 py-4 md:py-8 align-top border-l border-neutral-300/80 text-xs sm:text-sm md:text-lg text-neutral-800 leading-relaxed">
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
