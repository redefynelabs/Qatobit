'use client';

function formatINR(val: number): string {
  if (val >= 10_000_000) return `₹${(val / 10_000_000).toFixed(1)}Cr`;
  if (val >= 100_000) return `₹${(val / 100_000).toFixed(0)}L`;
  return `₹${val.toLocaleString("en-IN")}`;
}

interface StatsRowProps {
  finalValue: number;
  totalInvested: number;
  wealthGained: number;
  multiple: string;
  tenureYears: number;
}

const StatsRow = ({ finalValue, totalInvested, wealthGained, multiple, tenureYears }: StatsRowProps) => {
  const growthPct = totalInvested > 0
    ? ((finalValue / totalInvested - 1) * 100).toFixed(1)
    : "0";

  const stats = [
    {
      label: "FINAL VALUE",
      value: formatINR(finalValue),
      sub: `${growthPct}% growth`,
      subColor: "text-primary",
    },
    {
      label: "TOTAL INVESTED",
      value: formatINR(totalInvested),
      sub: `Over ${tenureYears} year${tenureYears > 1 ? "s" : ""}`,
      subColor: "text-neutral-400",
    },
    {
      label: "WEALTH GAINED",
      value: formatINR(wealthGained),
      sub: `${multiple}x of total invested`,
      subColor: "text-teal-500",
    },
    {
      label: "MULTIPLE",
      value: `${multiple}x`,
      sub: "Return on investment",
      subColor: "text-primary",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map(s => (
        <div key={s.label} className="border border-neutral-200 rounded-2xl p-4">
          <p className="text-xs text-neutral-400 font-medium tracking-wide mb-2">{s.label}</p>
          <p className="text-xl font-bold text-neutral-900">{s.value}</p>
          <p className={`text-xs mt-1 ${s.subColor}`}>{s.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
