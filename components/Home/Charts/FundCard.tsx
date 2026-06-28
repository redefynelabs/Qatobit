'use client';

import { motion } from "framer-motion";
import { Fund } from "@/constants/FundsData";

interface FundCardProps {
  fund: Fund;
  isActive: boolean;
  onClick: () => void;
}

const FundCard = ({ fund, isActive, onClick }: FundCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      className={`w-full text-left flex flex-col gap-3 px-4 py-5 border rounded-2xl transition-colors cursor-pointer ${
        isActive ? "border-primary bg-[#2F2F2F]" : "border-gray-200 bg-white hover:border-primary/40"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className={`font-semibold text-2xl ${isActive ? "text-white" : "text-neutral-900"}`}>
          {fund.title}
        </h3>
        <span className={`shrink-0 text-sm px-3 py-1 rounded-full border ${
          isActive
            ? "bg-[#EC5B1350] border-[#ffffff20] text-white"
            : "bg-blue-50 border-blue-200 text-blue-600"
        }`}>
          {fund.badge}
        </span>
      </div>

      <p className={`text-base leading-relaxed ${isActive ? "text-neutral-400" : "text-neutral-500"}`}>
        {fund.desc}
      </p>

      <div className="flex items-center gap-2">
        <img src={fund.assetsImg} alt="" className="w-5 h-5 object-contain" />
        <span className={`text-base ${isActive ? "text-neutral-400" : "text-neutral-500"}`}>
          {fund.assetCounts}
        </span>
      </div>

      <div className="border-t border-neutral-300/30 pt-3">
        <span className={`text-2xl font-bold ${isActive ? "text-primary" : "text-neutral-900"}`}>
          {fund.cagr}%
        </span>
        <span className={`text-sm ml-1 ${isActive ? "text-neutral-400" : "text-neutral-500"}`}>
          CAGR
        </span>
      </div>
    </motion.button>
  );
};

export default FundCard;
