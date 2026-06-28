'use client';

import { Fund } from "@/constants/FundsData";
import { compareOptions } from "@/constants/FundsData";

function formatINR(val: number): string {
  if (val >= 10_000_000) return `₹${(val / 10_000_000).toFixed(1)}Cr`;
  if (val >= 100_000) return `₹${(val / 100_000).toFixed(0)}L`;
  return `₹${val.toLocaleString("en-IN")}`;
}

function Slider({ min, max, value, onChange, step = 1 }: {
  min: number; max: number; value: number; onChange: (v: number) => void; step?: number;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative h-1.5 rounded-full bg-neutral-200 mt-1">
      <div className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: `${pct}%` }} />
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white shadow pointer-events-none"
        style={{ left: `calc(${pct}% - 8px)` }}
      />
    </div>
  );
}

interface CalculatorProps {
  fund: Fund;
  monthlyInv: number;
  tenureYears: number;
  compareId: string;
  onMonthlyInvChange: (v: number) => void;
  onTenureChange: (v: number) => void;
  onCompareChange: (id: string) => void;
}

const Calculator = ({
  fund,
  monthlyInv,
  tenureYears,
  compareId,
  onMonthlyInvChange,
  onTenureChange,
  onCompareChange,
}: CalculatorProps) => {
  return (
    <div className="flex flex-col gap-6 border border-neutral-200 rounded-2xl p-5">
      {/* Fund info */}
      <div>
        <h3 className="font-semibold text-lg text-neutral-900">{fund.title}</h3>
        <p className="text-base text-neutral-500 mt-1">{fund.shortDesc}</p>
      </div>

      {/* Portfolio allocation */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-primary text-xs font-bold">⬡</span>
          </div>
          <div>
            <p className="text-base font-medium text-neutral-800">Portfolio Allocation</p>
            <p className="text-sm text-neutral-400">Weighted by the index methodology</p>
          </div>
        </div>
        <div className="flex rounded-full overflow-hidden h-2 mb-3">
          {fund.allocation.map(a => (
            <div key={a.label} style={{ width: `${a.pct}%`, background: a.color }} />
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {fund.allocation.map(a => (
            <div key={a.label} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: a.color }} />
              <span className="text-xs text-neutral-500">{a.label} {a.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200" />

      {/* Sliders */}
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between text-xs text-neutral-400 mb-1">
            <span>Monthly Investment</span>
            <span>₹500 – ₹10,000</span>
          </div>
          <Slider min={500} max={10000} step={500} value={monthlyInv} onChange={onMonthlyInvChange} />
          <p className="mt-3 font-bold text-neutral-900">Total : {formatINR(monthlyInv)}</p>
        </div>

        <div>
          <div className="flex justify-between text-xs text-neutral-400 mb-1">
            <span>Investment Tenure</span>
            <span>1yr – 20yr</span>
          </div>
          <Slider min={1} max={20} value={tenureYears} onChange={onTenureChange} />
          <p className="mt-3 font-bold text-neutral-900">Total : {tenureYears} year{tenureYears > 1 ? "s" : ""}</p>
        </div>
      </div>

      <div className="border-t border-neutral-200" />

      {/* Compare with */}
      <div>
        <p className="text-sm font-medium text-neutral-700 mb-3">Compare with</p>
        <div className="flex flex-wrap gap-2">
          {compareOptions
            .filter(o => o.id !== fund.id)
            .map(opt => (
              <button
                key={opt.id}
                onClick={() => onCompareChange(opt.id)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  compareId === opt.id
                    ? "bg-primary text-white border-primary"
                    : "border-neutral-300 text-neutral-600 hover:border-primary/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
