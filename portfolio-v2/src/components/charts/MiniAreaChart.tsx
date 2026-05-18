"use client";
import { memo } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const DATA = [
  { v: 42 }, { v: 58 }, { v: 51 }, { v: 74 }, { v: 68 },
  { v: 82 }, { v: 79 }, { v: 91 }, { v: 88 }, { v: 97 },
];
const BAR_HEIGHTS = [55, 72, 61, 84, 78, 92, 88];

export const MiniAreaChart = memo(function MiniAreaChart() {
  return (
    <div className="h-20">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={DATA} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2563EB" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{
              background: "#fff", border: "1px solid #DCE6F2",
              borderRadius: "8px", fontSize: "11px",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            }}
            formatter={(v: number) => [`${v}%`, "Score"]}
            labelFormatter={() => ""}
          />
          <Area
            type="monotone" dataKey="v"
            stroke="#2563EB" strokeWidth={2}
            fill="url(#areaGrad)"
            dot={false}
            activeDot={{ r: 3, fill: "#2563EB" }}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
});

export const MiniBarChart = memo(function MiniBarChart() {
  return (
    <div className="flex items-end gap-1 h-12" aria-hidden>
      {BAR_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-[3px] transition-[height] duration-700"
          style={{
            height: `${h}%`,
            background: i >= BAR_HEIGHTS.length - 1
              ? "linear-gradient(180deg,#2563EB,#4F46E5)"
              : i >= BAR_HEIGHTS.length - 2 ? "#BFDBFE" : "#E0E7FF",
            transitionDelay: `${i * 60}ms`,
          }}
        />
      ))}
    </div>
  );
});
