"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", tutors: 40 },
  { name: "Feb", tutors: 60 },
  { name: "Mar", tutors: 90 },
  { name: "Apr", tutors: 70 },
  { name: "May", tutors: 110 },
  { name: "Jun", tutors: 85 },
];

export default function ChartBox() {
  return (
    <div className="card col-span-1 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">New Tutors</h3>
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          Monthly
        </span>
      </div>

      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={28}>
            <defs>
              <linearGradient id="tutorBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              strokeOpacity={0.3}
            />

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              className="text-xs"
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-xs"
            />

            <Tooltip
              cursor={{ fill: "rgba(59,130,246,0.1)" }}
              contentStyle={{
                background: "#111827",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
            />

            <Bar
              dataKey="tutors"
              fill="url(#tutorBar)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
