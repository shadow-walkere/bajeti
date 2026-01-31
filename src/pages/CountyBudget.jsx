import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from "recharts";

// ---------- SUMMARY STATS ----------
const stats = [
  { label: "Counties", value: 47, color: "border-black" },
  { label: "Total Allocation", value: "KES 415B", color: "border-green-600" },
  { label: "Population", value: "54M", color: "border-black" },
  { label: "Avg Per Capita", value: "KES 7,685", color: "border-red-600" },
];

// ---------- RANKINGS ----------
const rankings = [
  { name: "Nairobi", budget: "KES 42.5B", grade: "A" },
  { name: "Nakuru", budget: "KES 22.1B", grade: "B+" },
  { name: "Kiambu", budget: "KES 19.5B", grade: "B" },
  { name: "Mombasa", budget: "KES 18.2B", grade: "B" },
  { name: "Kakamega", budget: "KES 16.8B", grade: "C+" },
];

// ---------- BAR CHART DATA ----------
const budgetData = [
  { county: "Nairobi", budget: 45, spent: 38 },
  { county: "Nakuru", budget: 28, spent: 31 },
  { county: "Kiambu", budget: 24, spent: 21 },
  { county: "Mombasa", budget: 22, spent: 20 },
  { county: "Kakamega", budget: 20, spent: 18 },
  { county: "Kisumu", budget: 18, spent: 16 },
];

// ---------- RADAR DATA ----------
const sectorData = [
  { sector: "Health", Nairobi: 80, Mombasa: 75, Kisumu: 70 },
  { sector: "Education", Nairobi: 85, Mombasa: 78, Kisumu: 72 },
  { sector: "Infrastructure", Nairobi: 70, Mombasa: 80, Kisumu: 65 },
  { sector: "Water", Nairobi: 65, Mombasa: 60, Kisumu: 85 },
  { sector: "Agriculture", Nairobi: 60, Mombasa: 55, Kisumu: 75 },
];

export default function CountyBudget() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">County Budget Dashboard</h1>
        <p className="text-gray-600">
          Compare and analyze budgets across Kenya's counties
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow p-4 border-l-4 ${s.color}`}
          >
            <p className="text-sm text-gray-600">{s.label}</p>
            <p className="text-2xl font-bold text-black mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* MAP + RANKINGS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold mb-2 text-black">County Budget Map</h2>
          <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-xl">
            <svg viewBox="0 0 300 300" className="w-full h-full">
            <rect x="120" y="40" width="60" height="60" className="fill-green-500 hover:fill-green-700 cursor-pointer" />
            <text x="130" y="75" className="fill-white text-xs">Nakuru</text>

            <rect x="140" y="120" width="70" height="70" className="fill-black hover:fill-gray-800 cursor-pointer" />
            <text x="150" y="160" className="fill-white text-xs">Nairobi</text>

            <rect x="200" y="190" width="60" height="60" className="fill-red-600 hover:fill-red-700 cursor-pointer" />
            <text x="208" y="225" className="fill-white text-xs">Mombasa</text>

            <rect x="60" y="140" width="60" height="60" className="fill-green-400 hover:fill-green-600 cursor-pointer" />
            <text x="70" y="175" className="fill-white text-xs">Kisumu</text>
          </svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold mb-3 text-black">County Rankings</h2>
          <div className="space-y-3">
            {rankings.map((r, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-2"
              >
                <p className="font-medium text-black">{r.name}</p>
                <div className="text-right">
                  <p className="font-semibold text-green-700">{r.budget}</p>
                  <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                    {r.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4 h-80">
          <h2 className="font-semibold mb-3 text-black">Top County Budgets</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="county" />
              <Tooltip />
              <Bar dataKey="budget" fill="#16a34a" radius={[0, 6, 6, 0]} />
              <Bar dataKey="spent" fill="#dc2626" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 h-80">
          <h2 className="font-semibold mb-3 text-black">
            Sector Performance Comparison
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={sectorData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="sector" />
              <Radar
                name="Nairobi"
                dataKey="Nairobi"
                stroke="#16a34a"
                fill="#16a34a"
                fillOpacity={0.35}
              />
              <Radar
                name="Mombasa"
                dataKey="Mombasa"
                stroke="#dc2626"
                fill="#dc2626"
                fillOpacity={0.35}
              />
              <Radar
                name="Kisumu"
                dataKey="Kisumu"
                stroke="#000000"
                fill="#000000"
                fillOpacity={0.25}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
