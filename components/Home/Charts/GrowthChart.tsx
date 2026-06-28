'use client';

import {
  AreaChart, Area, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer,
} from "recharts";

interface ChartPoint {
  label: string;
  fund: number;
  compare: number;
}

function formatINR(val: number): string {
  if (val >= 10_000_000) return `₹${(val / 10_000_000).toFixed(1)}Cr`;
  if (val >= 100_000) return `₹${(val / 100_000).toFixed(0)}L`;
  return `₹${val.toLocaleString("en-IN")}`;
}

function ChartTooltip({ active, payload, label, fundName }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-lg px-4 py-3 text-xs">
      <p className="text-neutral-400 mb-1.5">{label}</p>
      <p className="text-primary font-semibold">{fundName}: {formatINR(payload[0]?.value)}</p>
      {payload[1] && (
        <p className="text-teal-500 font-semibold mt-0.5">Compare: {formatINR(payload[1]?.value)}</p>
      )}
    </div>
  );
}

interface GrowthChartProps {
  data: ChartPoint[];
  fundName: string;
  compareName: string;
}

const GrowthChart = ({ data, fundName, compareName }: GrowthChartProps) => {
  return (
    <div className="border border-neutral-200 rounded-2xl p-4 md:p-6">
      {/* Legend — top right above chart */}
      <div className="flex justify-end mb-3">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-neutral-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.75 rounded-full bg-primary" />
            <span className="text-xs font-medium text-neutral-700">{fundName}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.75 rounded-full bg-[#10B981]" />
            <span className="text-xs font-medium text-neutral-500">{compareName}</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={420} style={{ outline: "none" }}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="fundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6100" stopOpacity={0.65} />
              <stop offset="95%" stopColor="#FF6100" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="cmpGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#d1d5db"
            strokeDasharray="4 4"
            strokeOpacity={0.6}
          />

          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={v => formatINR(v)}
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={48}
          />

          <Tooltip content={<ChartTooltip fundName={fundName} />} />

          <Area
            type="monotone"
            dataKey="fund"
            stroke="#FF6100"
            strokeWidth={2}
            fill="url(#fundGrad)"
          />
          <Area
            type="monotone"
            dataKey="compare"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#cmpGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
