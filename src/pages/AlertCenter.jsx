import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Settings, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';

// --- Mock Data ---
const stats = [
  { label: 'Critical', count: 2, type: 'critical' },
  { label: 'Warning', count: 2, type: 'warning' },
  { label: 'Info', count: 2, type: 'info' },
  { label: 'Success', count: 2, type: 'success' },
];

const alertsData = [
  {
    id: 1,
    title: 'Critical: Budget Overrun Detected',
    description: 'Nakuru County road project has exceeded allocated budget by 20%. The Ministry of Roads has been notified and an audit has been initiated.',
    type: 'critical',
    tags: ['Nakuru', 'Infrastructure'],
    amount: 'KES 45.2M overspent',
    time: '3 hours ago',
  },
  {
    id: 2,
    title: 'Project Milestone Delayed',
    description: 'Kisumu health center construction is 3 months behind schedule. Contractor cited supply chain issues and weather delays.',
    type: 'warning',
    tags: ['Kisumu', 'Health'],
    amount: '',
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'Successful Project Completion',
    description: 'Mombasa water treatment plant completed on time and under budget. Now serving 50,000 residents with clean water.',
    type: 'success',
    tags: ['Mombasa', 'Water'],
    amount: 'KES 120M Total',
    time: '1 day ago',
  },
  {
    id: 4,
    title: 'Tender Award Under Review',
    description: 'Questions raised about the tender process for Nairobi-Thika expressway maintenance contract worth KES 2.5B.',
    type: 'warning',
    tags: ['Nairobi', 'Infrastructure'],
    amount: 'KES 2.5B',
    time: '1 day ago',
  },
  {
    id: 5,
    title: 'Funds Disbursement Completed',
    description: 'Quarter 2 education funds successfully disbursed to all 47 counties. Total of KES 850M distributed.',
    type: 'info',
    tags: ['Education'],
    amount: 'KES 85.4M',
    time: '2 days ago',
  },
  {
    id: 6,
    title: 'Ghost Project Flagged',
    description: 'Citizen report verified: No construction activity at supposed Bungoma health post site despite 60% budget drawn.',
    type: 'critical',
    tags: ['Bungoma', 'Health'],
    amount: 'KES 12.5M',
    time: '2 days ago',
  },
  {
    id: 7,
    title: 'Quality Inspection Passed',
    description: 'Kiambu-Limuru road upgrade passed quality audit. Construction meets all specified standards.',
    type: 'success',
    tags: ['Kiambu', 'Infrastructure'],
    amount: '',
    time: '3 days ago',
  },
  {
    id: 8,
    title: 'Budget Amendment Proposed',
    description: 'Treasury proposes 15% reallocation from recurrent to development expenditure for remaining FY.',
    type: 'info',
    tags: ['KES 234M affected'],
    amount: '',
    time: '3 days ago',
  },
];

// --- Helper Components ---

const StatCard = ({ label, count, type }) => {
  const styles = {
    critical: 'bg-red-50 text-red-600 border-red-100',
    warning: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    info: 'bg-blue-50 text-blue-600 border-blue-100',
    success: 'bg-green-50 text-green-600 border-green-100',
  };

  const icons = {
    critical: <AlertTriangle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
    success: <CheckCircle size={20} />,
  };

  return (
    <div className={`flex items-center p-4 rounded-lg border ${styles[type]} shadow-sm bg-white`}>
      <div className="mr-3">{icons[type]}</div>
      <div>
        <div className="text-2xl font-bold">{count}</div>
        <div className="text-xs uppercase font-semibold tracking-wide">{label}</div>
      </div>
    </div>
  );
};

const AlertCard = ({ alert }) => {
  const styles = {
    critical: { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-700', badge: 'bg-red-200 text-red-800', icon: <AlertTriangle size={18} className="text-red-500" /> },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-200 text-yellow-800', icon: <AlertTriangle size={18} className="text-yellow-500" /> },
    info: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', badge: 'bg-blue-200 text-blue-800', icon: <Info size={18} className="text-blue-500" /> },
    success: { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-700', badge: 'bg-green-200 text-green-800', icon: <CheckCircle size={18} className="text-green-500" /> },
  };

  const style = styles[alert.type];

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4 shadow-sm relative flex flex-col h-full`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {style.icon}
          <h3 className="font-bold text-gray-900 text-sm">{alert.title}</h3>
        </div>
        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${style.badge}`}>
          {alert.type}
        </span>
      </div>
      
      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
        {alert.description}
      </p>

      <div className="mt-auto flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {alert.tags.map((tag, i) => (
            <span key={i} className="text-[10px] bg-white bg-opacity-60 px-2 py-1 rounded text-gray-600 border border-gray-200/50">
              {tag}
            </span>
          ))}
          {alert.amount && (
            <span className="text-[10px] bg-white bg-opacity-60 px-2 py-1 rounded font-medium text-gray-800 border border-gray-200/50">
              {alert.amount}
            </span>
          )}
        </div>
        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
          {alert.time}
        </span>
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function AlertCenter() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="font-sans min-h-screen">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Alert Center</h1>
            <p className="text-gray-500 text-sm mt-1">Real-time budget alerts and anomaly notifications</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none justify-center flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white">
              <Settings size={16} />
              Preferences
            </button>
            <button className="flex-1 md:flex-none justify-center flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 shadow-sm">
              <Bell size={16} />
              Subscribe
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        {/* Filters Bar */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search alerts..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {['All', 'Critical', 'Warning', 'Info', 'Success'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-green-800 text-white' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block"></div>
            <button className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50">
              All Sectors <ChevronDown size={14} />
            </button>
          </div>
        </section>

        {/* Alerts List */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-3 font-medium">Showing {alertsData.length} alerts</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {alertsData.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-8">
           <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
              <MoreHorizontal size={14} /> More Recent
           </button>
        </div>

        {/* Bottom CTA */}
        <section className="bg-green-50 border border-green-100 rounded-xl p-6 md:p-8 text-center mt-8">
          <div className="flex justify-center mb-4">
            <Bell className="text-green-700" size={32} />
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Never Miss an Alert</h2>
          <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
            Subscribe to receive personalized alerts about budget issues in your county, sector, or projects you're following.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-2.5 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 shadow-sm flex items-center justify-center gap-2">
              <Bell size={16} /> Subscribe to Alerts
            </button>
            <button className="px-6 py-2.5 bg-transparent border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-white flex items-center justify-center gap-2">
              Customize Preferences <span className="text-xs">→</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}