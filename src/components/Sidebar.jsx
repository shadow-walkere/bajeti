import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  BarChart3,
  MapPin,
  Bell,
  AlertCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-black text-white h-screen fixed transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo + Toggle */}
      <div className="p-6 border-b border-gray-800 flex justify-between items-center">
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold">Bajeti</h1>
            <p className="text-sm text-gray-400">Transparency Portal</p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-1 px-3 relative h-full">
        <NavItem to="/" icon={<Home size={20} />} label="Home" collapsed={collapsed} />
        <NavItem
          to="/dashboard"
          icon={<LayoutDashboard size={20} />}
          label="My Dashboard"
          collapsed={collapsed}
        />
        <NavItem
          to="/national-budget"
          icon={<BarChart3 size={20} />}
          label="National Budget"
          collapsed={collapsed}
        />
        <NavItem
          to="/county-budget"
          icon={<MapPin size={20} />}
          label="County Budget"
          collapsed={collapsed}
        />
        <NavItem
          to="/project-tracker"
          icon={<MapPin size={20} />}
          label="Project Tracker"
          collapsed={collapsed}
        />
        <NavItem
          to="/alerts"
          icon={<Bell size={20} />}
          label="Alert Center"
          collapsed={collapsed}
        />
        <NavItem
          to="/report"
          icon={<AlertCircle size={20} />}
          label="Report Issue"
          collapsed={collapsed}
        />

        {/* Bottom */}
        <div className="absolute bottom-4 left-3 right-3">
          <NavItem
            to="/settings"
            icon={<Settings size={20} />}
            label="Settings"
            collapsed={collapsed}
          />
        </div>
      </nav>
    </aside>
  );
}

/* Nav Item */
function NavItem({ icon, label, to, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition
        ${
          isActive
            ? "bg-green-600 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`
      }
    >
      {icon}
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </NavLink>
  );
}
