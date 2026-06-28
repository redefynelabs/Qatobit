'use client';

import { useState, useMemo } from "react";
import { funds, Fund } from "@/constants/FundsData";
import FundCard from "./Charts/FundCard";
import GrowthChart from "./Charts/GrowthChart";
import Calculator from "./Charts/Calculator";
import StatsRow from "./Charts/StatsRow";
import PrimaryButton from "../Reusable/PrimaryButton";

// ── SIP math ───────────────────────────────────────────────────────────────

function sipGrowth(monthlyInv: number, annualRate: number, months: number): number[] {
  const r = annualRate / 100 / 12;
  const points: number[] = [];
  let value = 0;
  for (let m = 0; m <= months; m++) {
    if (m > 0) value = (value + monthlyInv) * (1 + r);
    points.push(Math.round(value));
  }
  return points;
}

function buildChartData(fund: Fund, compareRate: number, months: number, monthlyInv: number) {
  const fundPoints = sipGrowth(monthlyInv, fund.cagr, months);
  const cmpPoints = sipGrowth(monthlyInv, compareRate, months);
  const step = Math.max(1, Math.floor(months / 20));
  return fundPoints
    .filter((_, i) => i % step === 0 || i === months)
    .map((val, i) => ({
      label: `${((i * step) / 12).toFixed(1)}Y`,
      fund: val,
      compare: cmpPoints[Math.min(i * step, months)],
    }));
}

// ── Component ──────────────────────────────────────────────────────────────

const IndicesCharts = () => {
  const [activeFund, setActiveFund] = useState<Fund>(funds[0]);
  const [monthlyInv, setMonthlyInv] = useState(2000);
  const [tenureYears, setTenureYears] = useState(5);
  const [compareId, setCompareId] = useState("bitcoin");

  const compareRate = useMemo(() => {
    const fundMatch = funds.find(f => f.id === compareId);
    if (fundMatch) return fundMatch.cagr;
    const rates: Record<string, number> = { bitcoin: 82, nifty50: 14, nasdaq: 18, gold: 10 };
    return rates[compareId] ?? 14;
  }, [compareId]);

  const compareName = useMemo(() => {
    const fundMatch = funds.find(f => f.id === compareId);
    if (fundMatch) return fundMatch.title;
    const names: Record<string, string> = { bitcoin: "Bitcoin", nifty50: "Nifty 50", nasdaq: "NASDAQ 100", gold: "Gold" };
    return names[compareId] ?? compareId;
  }, [compareId]);

  const months = tenureYears * 12;

  const chartData = useMemo(
    () => buildChartData(activeFund, compareRate, months, monthlyInv),
    [activeFund, compareRate, months, monthlyInv]
  );

  const totalInvested = monthlyInv * months;
  const finalValue = sipGrowth(monthlyInv, activeFund.cagr, months)[months];
  const wealthGained = finalValue - totalInvested;
  const multiple = totalInvested > 0 ? (finalValue / totalInvested).toFixed(2) : "0";

  return (
    <div className="py-14 md:py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 md:gap-8 mb-12 lg:mb-16 px-6 md:px-10">
        <div className="space-y-3 md:space-y-5">
          <div className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-white font-medium text-sm">
            <span className="h-2 w-2 bg-white" />
            Crypto Indices
          </div>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-medium tracking-tighter max-w-2xl">
            Same discipline. Different asset class
          </h2>
          <p className="font-inter text-sm text-neutral-600 max-w-xs md:hidden">
            You already run this discipline with mutual funds. The difference here is what the money lands in: an index with published construction.
          </p>
        </div>
        <p className="hidden md:block font-inter text-sm lg:text-lg text-neutral-600 lg:text-right max-w-xs lg:max-w-sm shrink-0 mb-4">
          You already run this discipline with mutual funds. The difference here is what the money lands in: an index with published construction.
        </p>
      </div>

      <div className="px-4 md:px-8 xl:px-12">
        {/* Fund selector cards */}
        <div className="mb-8">
          {/* Mobile: horizontal scroll */}
          <div className="flex lg:hidden gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:-mx-8 md:px-8 xl:-mx-12 xl:px-12 scrollbar-hide">
            {funds.map(f => (
              <div key={f.id} className="shrink-0 w-72">
                <FundCard fund={f} isActive={f.id === activeFund.id} onClick={() => setActiveFund(f)} />
              </div>
            ))}
          </div>
          {/* Desktop: grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            {funds.map(f => (
              <FundCard key={f.id} fund={f} isActive={f.id === activeFund.id} onClick={() => setActiveFund(f)} />
            ))}
          </div>
        </div>

        {/* Main panel: calculator left, chart right */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 bg-white shadow-md py-2 px-2 rounded-2xl">
          <Calculator
            fund={activeFund}
            monthlyInv={monthlyInv}
            tenureYears={tenureYears}
            compareId={compareId}
            onMonthlyInvChange={setMonthlyInv}
            onTenureChange={setTenureYears}
            onCompareChange={setCompareId}
          />

          <div className="flex flex-col gap-4">
            <GrowthChart data={chartData} fundName={activeFund.title} compareName={compareName} />

            <StatsRow
              finalValue={finalValue}
              totalInvested={totalInvested}
              wealthGained={wealthGained}
              multiple={multiple}
              tenureYears={tenureYears}
            />

            {/* CTAs */}
            <div className="flex flex-col justify-center items-center sm:flex-row gap-3">
              <PrimaryButton
                text={`Allocate to ${activeFund.title}`}
                href="/join-waitlist"
                className="flex-1 justify-center"
              />
              <PrimaryButton
                text={`See how this index is built`}
                href="/join-waitlist"
                className="flex-1 justify-center bg-[#282828] "
              />
             
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-6 font-inter">
          Crypto investments are subject to market risk. Not investment advice. Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  );
};

export default IndicesCharts;
