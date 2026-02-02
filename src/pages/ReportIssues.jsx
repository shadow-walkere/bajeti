import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  LayoutDashboard, 
  Map, 
  Briefcase, 
  UploadCloud, 
  Lock, 
  Send,
  MapPin,
  AlertTriangle,
  Search,
//   Menu,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

// --- Mock Data ---

const categories = [
  { id: 'no-progress', title: 'No Progress', desc: 'Project site shows no activity' },
  { id: 'poor-quality', title: 'Poor Quality', desc: 'Work quality below standards' },
  { id: 'ghost-workers', title: 'Ghost Workers', desc: 'Suspected fake employee records' },
  { id: 'overpricing', title: 'Overpricing', desc: 'Materials or services overcharged' },
  { id: 'abandoned', title: 'Abandoned Project', desc: 'Work stopped unexpectedly' },
  { id: 'other', title: 'Other', desc: 'Different issue not listed above' },
];

const recentReports = [
  { 
    id: 'RPT-5678', 
    issue: 'No Progress', 
    location: 'Nakuru', 
    status: 'Under Review', 
    statusColor: 'bg-black text-white', // Black for neutral/pending
    time: '2 days ago' 
  },
  { 
    id: 'RPT-5677', 
    issue: 'Poor Quality', 
    location: 'Mombasa', 
    status: 'Verified', 
    statusColor: 'bg-green-600 text-white', // Green for verified
    time: '3 days ago' 
  },
  { 
    id: 'RPT-5675', 
    issue: 'Overpricing', 
    location: 'Nairobi', 
    status: 'Action Taken', 
    statusColor: 'bg-red-600 text-white', // Red for critical action
    time: '5 days ago' 
  },
];

// --- Helper Components ---

const SidebarItem = ({ icon: Icon, active = false }) => (
  <div className={`p-3 rounded-xl mb-4 cursor-pointer transition-all duration-200 group ${active ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'text-gray-400 hover:bg-gray-900 hover:text-white'}`}>
    <Icon size={24} />
  </div>
);

const CategoryCard = ({ category, selected, onClick }) => (
  <div 
    onClick={() => onClick(category.id)}
    className={`relative p-4 rounded-lg border cursor-pointer transition-all text-left duration-200
      ${selected 
        ? 'border-red-600 bg-red-50 ring-1 ring-red-600' 
        : 'border-gray-200 hover:border-black hover:bg-gray-50'
      }`}
  >
    {selected && <div className="absolute top-2 right-2 text-red-600"><CheckCircle2 size={16} /></div>}
    <div className={`font-bold text-sm mb-1 ${selected ? 'text-red-700' : 'text-gray-900'}`}>{category.title}</div>
    <div className="text-xs text-gray-500 leading-tight">{category.desc}</div>
  </div>
);

// --- Main Page Component ---

export default function ReportIssues() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex h-screen bg-white overflow-hidden font-sans">
      
      {/* Sidebar - Deep Black */}
      <aside className="w-20 bg-black flex flex-col items-center py-6 flex-shrink-0 border-r border-gray-900">
        <div className="mb-10">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-900/50">
            L
          </div>
        </div>
        <nav className="flex-1 w-full flex flex-col items-center gap-2">
          <SidebarItem icon={LayoutDashboard} />
          <SidebarItem icon={Briefcase} />
          <SidebarItem icon={Map} />
          <SidebarItem icon={Bell} />
          <SidebarItem icon={AlertTriangle} active /> {/* Active is now Red */}
        </nav>
        <div className="mt-auto">
             <SidebarItem icon={Settings} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
           <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search projects, counties, budgets..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
           </div>
           <div className="flex items-center gap-6">
              <div className="relative cursor-pointer">
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 border-2 border-white rounded-full"></span>
                <Bell size={20} className="text-gray-600 hover:text-black transition-colors" />
              </div>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                Sign In
              </button>
           </div>
        </div>

        <div className="max-w-4xl mx-auto p-8 flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-5">
              <AlertTriangle size={14} className="fill-red-600/20" />
              Citizen Verification Portal
            </span>
            <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
              See Something? <span className="text-red-600">Say Something!</span>
            </h1>
            <p className="text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
              Help us maintain budget transparency. Report discrepancies you observe in government projects directly to the oversight committee.
            </p>
          </div>

          {/* Form Container */}
          <div className="w-full bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 mb-10 relative overflow-hidden">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-red-600 to-green-600"></div>

            {/* Category Grid */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                Report Category <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <CategoryCard 
                    key={cat.id} 
                    category={cat} 
                    selected={selectedCategory === cat.id}
                    onClick={setSelectedCategory}
                  />
                ))}
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">
                  County <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-medium transition-shadow">
                    <option>Select county</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Nakuru</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">
                  Specific Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="e.g., Junction of Moi Ave and Kenyatta" 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-medium transition-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Project Name */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-900 mb-2">
                Project Name (if known)
              </label>
              <input 
                type="text" 
                placeholder="e.g., Kisumu Health Center Construction" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-medium transition-shadow"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-900 mb-2">
                Describe the Issue <span className="text-red-600">*</span>
              </label>
              <textarea 
                rows={4}
                placeholder="Please describe what you observed. Include specific details like dates, times, and any relevant context..." 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm font-medium resize-none transition-shadow"
              />
            </div>

            {/* File Upload */}
            <div className="mb-8">
               <label className="block text-xs font-bold text-gray-900 mb-2">
                Upload Photos (up to 5)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-black transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                  <UploadCloud size={20} />
                </div>
                <p className="text-sm font-bold text-gray-900">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
              </div>
            </div>

            {/* Footer / Submit */}
            <div className="flex flex-col gap-5">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                <Send size={18} />
                SUBMIT REPORT
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Lock size={12} className="text-green-600" />
                <p>
                  Your privacy is protected. Reports can be submitted anonymously.
                </p>
              </div>
            </div>

          </div>

          {/* Recent Reports Section */}
          <div className="w-full">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">Recent Community Reports</h3>
            <div className="space-y-3">
              {recentReports.map((report) => (
                <div key={report.id} className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{report.id}</span>
                      <span className="text-sm font-bold text-gray-900">{report.issue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} />
                      <span>{report.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${report.statusColor}`}>
                      {report.status}
                    </span>
                    <span className="text-[10px] font-medium text-gray-400">{report.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}