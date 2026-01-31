import React from "react";

// --- Stats & Project Data ---
const stats = [
  { label: "Total Projects", value: 6 },
  { label: "On Track", value: 3, color: "bg-green-100 text-green-700" },
  { label: "Delayed", value: 1, color: "bg-yellow-100 text-yellow-700" },
  { label: "At Risk", value: 1, color: "bg-red-100 text-red-700" },
  { label: "Completed", value: 1, color: "bg-blue-100 text-blue-700" },
];

const projects = [
  {
    title: "Kenyatta Memorial Hospital Extension",
    category: "Health",
    location: "Nairobi",
    progress: 69,
    status: "On Track",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
  },
  {
    title: "Kisumu Primary School Renovation",
    category: "Education",
    location: "Kisumu",
    progress: 92,
    status: "Delayed",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Mombasa Highway Expansion",
    category: "Infrastructure",
    location: "Mombasa",
    progress: 84,
    status: "At Risk",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Nakuru Water Treatment Upgrade",
    category: "Water",
    location: "Nakuru",
    progress: 93,
    status: "On Track",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
  },
  {
    title: "Kiambu Technical Institute",
    category: "Education",
    location: "Kiambu",
    progress: 25,
    status: "On Track",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    title: "Machakos Solar Power Plant",
    category: "Energy",
    location: "Machakos",
    progress: 100,
    status: "Completed",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

const statusColor = (status) => {
  switch (status) {
    case "On Track":
      return "bg-green-600";
    case "Delayed":
      return "bg-yellow-500";
    case "At Risk":
      return "bg-red-600";
    case "Completed":
      return "bg-black";
    default:
      return "bg-gray-400";
  }
};

export default function ProjectTracker() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Project Tracker</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`rounded-2xl p-4 shadow bg-white ${s.color || ""}`}
          >
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-2xl font-bold text-black">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={p.image}
              alt={`${p.title} project`}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {p.category}
                </span>
                <span
                  className={`text-xs text-white px-2 py-1 rounded-full ${statusColor(
                    p.status
                  )}`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="font-semibold text-lg text-black">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.location}</p>

              <div className="mt-3">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="h-2 bg-green-600"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <p className="text-xs text-right mt-1">
                  {p.progress}% utilized
                </p>
              </div>

              <button className="mt-3 w-full py-2 text-sm rounded-xl border hover:bg-gray-100">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
