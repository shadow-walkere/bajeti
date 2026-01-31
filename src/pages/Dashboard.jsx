import { Heart, TrendingUp, FileText, MapPin } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="ml-64 p-6 bg-gray-50 min-h-screen">
      {/* Welcome Card */}
      <div className="bg-green-50 rounded-xl p-6 flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
          <span className="text-green-700 text-xl">👤</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            Welcome, Sarah Wanjiku!
          </h2>
          <p className="text-sm text-gray-600">
            📍 Nairobi County • Westlands Ward
          </p>
          <p className="text-sm mt-1">
            Track your tax contributions and see how they’re being used in your community.
          </p>
        </div>
      </div>

      {/* Tax Impact Cards */}
      <h3 className="font-semibold mb-3">Your Tax Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Monthly PAYE" value="KES 4,200" subtitle="Estimated contribution" />
        <StatCard title="Annual Total" value="KES 50,400" subtitle="Your yearly contribution" />
        <StatCard title="Projects Funded" value="12" subtitle="In your ward" yellow />
        <StatCard title="Reports Submitted" value="2" subtitle="Active verifications" red />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Followed Projects */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Heart size={16} className="text-red-500" /> Followed Projects
            </h3>
            <span className="text-sm text-green-600 cursor-pointer">View All →</span>
          </div>

          <ProjectRow
            title="Nakuru Water Treatment Plant"
            progress={75}
            status="Updated 2 days ago"
            color="green"
          />
          <ProjectRow
            title="Kisumu Primary School Renovation"
            progress={45}
            status="Updated 1 week ago"
            color="yellow"
          />
          <ProjectRow
            title="Nairobi Hospital Extension"
            progress={60}
            status="Updated 3 days ago"
            color="green"
          />
        </div>

        {/* Track Your Tax */}
        <div className="bg-white p-5 rounded-xl border">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <TrendingUp size={16} /> Track Your Tax
          </h3>
          <label className="text-sm">Monthly Gross Salary (KES)</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2 mt-1 mb-4"
            defaultValue={50000}
          />
          <button className="w-full bg-green-700 text-white py-2 rounded-lg font-medium">
            Calculate My Tax Impact
          </button>
        </div>

        {/* Your Reports */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <FileText size={16} /> Your Reports
            </h3>
            <button className="border px-3 py-1 rounded-lg text-sm">
              Submit Report
            </button>
          </div>

          <ReportRow
            title="Road construction quality concerns"
            date="Nov 15, 2024"
            status="reviewed"
          />
          <ReportRow
            title="Delayed school supplies delivery"
            date="Nov 20, 2024"
            status="pending"
          />
        </div>

        {/* Ward Updates */}
        <div className="bg-white p-5 rounded-xl border">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <MapPin size={16} /> Ward Updates
          </h3>
          <div className="bg-green-50 p-3 rounded-lg mb-2">
            <p className="font-medium">New health center approved</p>
            <p className="text-xs text-gray-600">
              KES 25M allocated for Westlands
            </p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="font-medium">Road repairs starting</p>
            <p className="text-xs text-gray-600">
              Waiyaki Way improvements begin next month
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* Components */

function StatCard({ title, value, subtitle, yellow, red }) {
  let bg = "bg-green-50";
  if (yellow) bg = "bg-yellow-50";
  if (red) bg = "bg-red-50";

  return (
    <div className={`${bg} p-4 rounded-xl border`}>
      <p className="text-sm text-gray-600">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}

function ProjectRow({ title, progress, status, color }) {
  let barColor = color === "yellow" ? "bg-yellow-400" : "bg-green-600";

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${barColor} h-2 rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{status}</p>
    </div>
  );
}

function ReportRow({ title, date, status }) {
  const statusColor =
    status === "reviewed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="flex justify-between items-center border rounded-lg p-3 mb-2">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <span
        className={`px-2 py-1 text-xs rounded-full ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}
