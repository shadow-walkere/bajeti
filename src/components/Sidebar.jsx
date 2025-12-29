import {
  Home,
  LayoutDashboard,
  BarChart3,
  MapPin,
  Bell,
  AlertCircle,
  Settings
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white h-screen fixed">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Bajeti</h1>
        <p className="text-sm text-gray-400">Transparency Portal</p>
      </div>

      <nav className="mt-6 space-y-1 px-4">
        <NavItem icon={<Home size={18} />} label="Home" active />
        <NavItem icon={<LayoutDashboard size={18} />} label="My Dashboard" />
        <NavItem icon={<BarChart3 size={18} />} label="National Budget" />
        <NavItem icon={<MapPin size={18} />} label="County Budget" />
        <NavItem icon={<Bell size={18} />} label="Alert Center" />
        <NavItem icon={<AlertCircle size={18} />} label="Report Issue" />
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <NavItem icon={<Settings size={18} />} label="Settings" />
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
      ${active ? "bg-green-600" : "hover:bg-gray-800"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
