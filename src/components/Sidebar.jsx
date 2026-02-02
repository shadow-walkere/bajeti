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
  X 
} from "lucide-react";

// Accept props from the Layout component
export default function Sidebar({ collapsed, setCollapsed, mobileMenuOpen, setMobileMenuOpen }) {

  return (
    <>
      <aside
        className={`bg-black text-white h-screen fixed top-0 left-0 z-50 transition-all duration-300
        ${/* Width logic */ ''}
        ${collapsed ? "w-20" : "w-64"}
        ${/* Mobile Slide logic */ ''}
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo + Toggle */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center h-20">
          {(!collapsed || mobileMenuOpen) && (
            <div className="whitespace-nowrap overflow-hidden">
              <h1 className="text-xl font-bold">Bajeti</h1>
              <p className="text-xs text-gray-400">Transparency Portal</p>
            </div>
          )}

          {/* Desktop Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block text-gray-400 hover:text-white"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

           {/* Mobile Close Button */}
           <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1 px-3 relative h-[calc(100vh-80px)] overflow-y-auto">
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

          {/* Settings at bottom */}
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
    </>
  );
}

/* Nav Item Helper */
function NavItem({ icon, label, to, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
        ${isActive
            ? "bg-green-600 text-white shadow-md"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }
        ${collapsed ? "justify-center px-2" : ""} 
        `
      }
    >
      <div className="flex-shrink-0">{icon}</div>
      {!collapsed && <span className="text-sm font-medium whitespace-nowrap overflow-hidden">{label}</span>}
    </NavLink>
  );
}