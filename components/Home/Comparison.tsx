'use client';

import { motion } from "framer-motion";
import { comparisonData } from "@/constants/ComparisonData";

const Comparison = () => {
  return (
    <section className="relative overflow-hidden px-4 md:px-8 xl:px-12 py-20">
      <div className="relative z-10 max-w-[1550px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-medium text-sm uppercase">
            <span className="h-2 w-2  bg-white" />
            Why Us
          </div>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl  font-medium leading-tight mb-16"
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
          className="overflow-x-auto rounded-[28px] border border-primary  "
        >
          <table className="w-full  border-collapse font-inter leading-tight tracking-tighter">
            {/* Header */}
            <thead>
              <tr
                className="
                  bg-gradient-to-b
                  from-primary
                  via-[#F28A4D]
                  to-[#F8F6F5]
                "
              >
                <th className="w-[26%] px-8 py-6 md:py-10"></th>

                <th className="w-[37%] px-8 py-6 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
                  Qatobit
                </th>

                <th className="w-[37%] px-8 py-6 md:py-10 text-center text-sm md:text-2xl font-medium border-l border-primary/20">
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
                    index !== comparisonData.length - 1
                      ? "border-t border-neutral-300/80"
                      : ""
                  }
                >
                  {/* Question */}
                  <td className=" px-4 md:px-10 py-4 md:py-10 align-top text-primary text-sm md:text-xl font-normal leading-relaxed">
                    {row.question}
                  </td>

                  {/* Qatobit */}
                  <td className="px-4 md:px-10 py-4 md:py-10 align-top border-l border-neutral-300/80 text-sm md:text-lg text-neutral-800 leading-relaxed">
                    {row.qatobit}
                  </td>

                  {/* Competitor */}
                  <td className="px-4 md:px-10 py-4 md:py-10 align-top border-l border-neutral-300/80 text-sm md:text-lg text-neutral-800 leading-relaxed">
                    {row.tradingFirst}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;