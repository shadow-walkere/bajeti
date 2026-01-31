import SummaryCard from "../components/SummaryCard";
import ChartCard from "../components/ChartCard";

import {
  ministryData,
  distributionData,
  quarterlyData,
  trendData,
  varianceData,
} from "../data/nationalBudgetData";

import {
  Download,
  Filter,
  TrendingUp,
  PieChart,
  BarChart3,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  AreaChart,
  Area,
  Treemap,
} from "recharts";

export default function NationalBudget() {
  return (
    <main className="ml-64 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">National Budget Explorer</h1>
          <p className="text-sm text-gray-600">
            Fiscal Year 2024/25 • Total Budget: KES 3.9 Trillion
          </p>
        </div>

        <div className="flex gap-2">
          <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SummaryCard title="Total Budget" value="KES 3.9T" note="+8.3% vs FY23/24" />
        <SummaryCard title="Spent to Date" value="KES 2.16T" note="55.3% utilization" />
        <SummaryCard title="Development" value="KES 823B" note="21.1% of total" yellow />
        <SummaryCard title="Recurrent" value="KES 3.08T" note="78.9% of total" />
      </div>

      {/* Budget by Ministry + Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Budget by Ministry" subtitle="Allocated vs Spent (KES Billions)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ministryData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="allocated" fill="#166534" />
              <Bar dataKey="spent" fill="#b91c1c" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Budget Distribution" subtitle="Proportional allocation view">
          <ResponsiveContainer width="100%" height={300}>
            <Treemap
              data={distributionData}
              dataKey="value"
              stroke="#fff"
              fill="#166534"
            />
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Quarterly Budget Execution */}
      <ChartCard
        title="Quarterly Budget Execution"
        subtitle="Development vs Recurrent spending by quarter"
        className="mb-6"
      >
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={quarterlyData}>
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Area dataKey="recurrent" stackId="1" fill="#dc2626" stroke="#dc2626" />
            <Area dataKey="development" stackId="1" fill="#166534" stroke="#166534" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Budget vs Actual */}
      <ChartCard
        title="Budget vs Actual Spending Trend"
        subtitle="5-Year comparison (KES Billions)"
        className="mb-6"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line dataKey="budget" stroke="#166534" />
            <Line dataKey="actual" stroke="#b91c1c" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Ministry Variance Table */}
      <div className="bg-white rounded-xl border p-5">
        <h3 className="font-semibold mb-4">
          Ministry Budget Variance Analysis
        </h3>

        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Ministry</th>
              <th>Allocated</th>
              <th>Spent</th>
              <th>Variance</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {varianceData.map((row) => (
              <tr key={row.name} className="border-b">
                <td className="py-3 font-medium">{row.name}</td>
                <td className="text-center">KES {row.allocated}</td>
                <td className="text-center">KES {row.spent}</td>
                <td className={`text-center ${row.variance < 0 ? "text-green-600" : "text-red-600"}`}>
                  {row.variance}%
                </td>
                <td className="text-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${row.status === "Overspent" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="text-center">
                  <div className="w-24 bg-gray-200 h-2 rounded-full mx-auto">
                    <div
                      className={`h-2 rounded-full ${row.progress > 100 ? "bg-red-600" : "bg-green-600"}`}
                      style={{ width: `${Math.min(row.progress, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs mt-1">{row.progress}%</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
