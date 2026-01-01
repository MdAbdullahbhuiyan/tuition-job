"use client";
import { FaArrowUp } from "react-icons/fa";

export default function StatCard({
  title,
  value,
  icon,
  trend = "+0%",
  color = "blue",
}) {
  const colorMap = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    purple: "from-purple-500 to-purple-700",
    orange: "from-orange-500 to-orange-700",
  };

  const trendColorMap = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-800 p-5 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* gradient accent */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colorMap[color]}`}
      />

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-1 dark:text-white">
            {value}
          </h3>
        </div>

        {icon && (
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${colorMap[color]} text-white`}
          >
            {icon}
          </div>
        )}
      </div>

      {/* trend */}
      <div
        className={`flex items-center gap-1 mt-3 text-sm ${trendColorMap[color]}`}
      >
        <FaArrowUp className="text-xs" />
        <span>{trend}</span>
        <span className="text-gray-400 dark:text-gray-400">this month</span>
      </div>
    </div>
  );
}
