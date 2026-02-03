import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  AlertTriangle, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  Search, 
  Users, 
  ShieldCheck, 
  Calculator,
  Bell,
  ChevronRight
} from 'lucide-react';

// --- Mock Data ---

const projects = [
  {
    id: 1,
    title: "Kenyatta Memorial Hospital Extension",
    location: "Nairobi, Westlands",
    status: "On Track",
    statusColor: "bg-green-100 text-green-700",
    budget: "KES 450M",
    spent: "KES 312M",
    progress: 70,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Kisumu Primary School Renovation",
    location: "Kisumu, Central",
    status: "Delayed",
    statusColor: "bg-yellow-100 text-yellow-700",
    budget: "KES 85M",
    spent: "KES 78M",
    progress: 92,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Mombasa-Malindi Highway Phase 2",
    location: "Mombasa",
    status: "At Risk",
    statusColor: "bg-red-100 text-red-700",
    budget: "KES 2.5B",
    spent: "KES 2.1B",
    progress: 45,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=400"
  }
];

const alerts = [
  { id: 1, title: "Budget Overrun Detected", desc: "Nakuru County road project exceeded budget by 22%.", type: "critical", time: "2 hours ago" },
  { id: 2, title: "Project Milestone Delayed", desc: "Kisumu health center 3 months behind schedule.", type: "warning", time: "5 hours ago" },
  { id: 3, title: "Successful Completion", desc: "Mombasa water plant completed under budget.", type: "success", time: "1 day ago" },
];

const features = [
  { title: "Budget Analytics", desc: "Visualize national and county budgets with interactive charts.", icon: BarChart3 },
  { title: "Project Tracking", desc: "Follow specific projects from allocation to completion.", icon: MapPin },
  { title: "Smart Alerts", desc: "Get notified about anomalies and overspending in your area.", icon: Bell },
  { title: "Citizen Verification", desc: "Report discrepancies you observe on the ground.", icon: Users },
  { title: "County Comparison", desc: "Compare how different counties spend their budgets.", icon: TrendingUp },
  { title: "Data Integrity", desc: "Verified data sourced directly from government systems.", icon: ShieldCheck },
];

// --- Components ---

const StatCard = ({ label, value, subtext, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">{label}</p>
        <h3 className="text-2xl font-black text-gray-900 mt-1">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${colorClass} bg-opacity-10`}>
        <Icon className={colorClass.replace('bg-', 'text-')} size={20} />
      </div>
    </div>
    <p className="text-xs text-green-600 font-medium flex items-center gap-1">
      <TrendingUp size={12} /> {subtext}
    </p>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
    <div className="h-40 bg-gray-200 relative">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold uppercase ${project.statusColor}`}>
        {project.status}
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-500`}>
          Infrastructure
        </span>
      </div>
      <h3 className="font-bold text-gray-900 mb-1 leading-tight">{project.title}</h3>
      <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
        <MapPin size={12} /> {project.location}
      </div>
      
      <div className="mb-2 flex justify-between text-xs font-medium text-gray-900">
        <span>Budget Utilization</span>
        <span>{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2 overflow-hidden">
        <div className={`h-full rounded-full ${project.progress > 90 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${project.progress}%` }}></div>
      </div>
      <div className="flex justify-between text-[10px] text-gray-400">
        <span>Spent: {project.spent}</span>
        <span>Budget: {project.budget}</span>
      </div>
    </div>
  </div>
);

const AlertRow = ({ alert }) => {
  const colors = {
    critical: "bg-red-50 border-red-100 text-red-700",
    warning: "bg-yellow-50 border-yellow-100 text-yellow-700",
    success: "bg-green-50 border-green-100 text-green-700",
  };
  const icons = {
    critical: AlertTriangle,
    warning: Clock,
    success: CheckCircle2
  };
  const Icon = icons[alert.type];

  return (
    <div className={`p-4 rounded-lg border ${colors[alert.type]} flex gap-3 mb-3`}>
      <Icon size={18} className="mt-0.5 shrink-0" />
      <div>
        <h4 className="text-sm font-bold mb-0.5">{alert.title}</h4>
        <p className="text-xs opacity-90 mb-2">{alert.desc}</p>
        <span className="text-[10px] font-medium opacity-70 block">{alert.time}</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-black h-[550px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1480072723304-5021e468de85?auto=format&fit=crop&q=80&w=2000" 
             alt="Nairobi Skyline" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Government Budget Transparency Portal
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight max-w-2xl">
            See Every Shilling, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-white to-red-500">Build Our Nation</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            Track how your tax money flows from the National Treasury to local projects. Real-time visibility into government spending across all 47 counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 group">
              Explore Budget <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-gray-600 text-white hover:bg-white hover:text-black rounded-lg font-bold transition-all flex items-center justify-center gap-2">
              <MapPin size={18} /> Track Projects
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-16 flex gap-12 text-white border-t border-gray-800 pt-8">
            <div>
               <div className="text-3xl font-black">KES 3.9T</div>
               <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Total Budget FY25/26</div>
            </div>
            <div>
               <div className="text-3xl font-black text-green-500">12,847</div>
               <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projects Tracked</div>
            </div>
            <div>
               <div className="text-3xl font-black text-red-500">47</div>
               <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Counties Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS & MAP SECTION --- */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard label="Total National Budget" value="KES 3.9T" subtext="12.5% vs last year" icon={BarChart3} colorClass="bg-green-500 text-white" />
            <StatCard label="County Allocations" value="KES 415B" subtext="8.2% Increase" icon={MapPin} colorClass="bg-green-600 text-white" />
            <StatCard label="Active Projects" value="12,847" subtext="Across all sectors" icon={Briefcase} colorClass="bg-yellow-500 text-white" />
            <StatCard label="Active Alerts" value="234" subtext="Requires attention" icon={AlertTriangle} colorClass="bg-red-500 text-white" />
          </div>

          {/* Map & Calculator Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-lg">County Budget Map</h3>
                <div className="text-xs text-gray-500">Click a county for details</div>
              </div>
              <div className="flex-1 bg-green-50 rounded-lg flex items-center justify-center min-h-[300px] border border-green-100 relative overflow-hidden group">
                 <MapPin size={48} className="text-green-300 mb-2" />
                 <span className="text-green-700 font-bold text-sm absolute">Interactive Kenya Map Placeholder</span>
                 <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-5 transition-opacity cursor-pointer"></div>
              </div>
            </div>

            {/* Tax Calculator */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                  <Calculator size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Track Your Tax</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Monthly Gross Salary (KES)</label>
                  <input type="number" placeholder="50000" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm font-bold text-gray-900" />
                </div>
                <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors text-sm">
                  Calculate My Tax Impact
                </button>
                <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-100">
                  See exactly how much of your PAYE goes to debt service, development, and recurrent expenditure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS & ALERTS SECTION --- */}
      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Featured Projects (2/3 width) */}
            <div className="flex-1">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Featured Projects</h2>
                  <p className="text-sm text-gray-500 mt-1">High-value projects currently under execution</p>
                </div>
                <a href="#" className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            </div>

            {/* Recent Alerts (1/3 width) */}
            <div className="lg:w-96 shrink-0">
               <div className="flex justify-between items-end mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Alerts</h2>
                  <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-600">View All</a>
               </div>
               <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  {alerts.map(a => <AlertRow key={a.id} alert={a} />)}
               </div>

               {/* Spending Breakdown Mini-Chart */}
               <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm">FY25/26 Spending Breakdown</h4>
                  <div className="flex items-center gap-4">
                     <div className="w-24 h-24 rounded-full border-[12px] border-green-500 border-r-yellow-400 border-b-red-500"></div>
                     <div className="text-xs space-y-2">
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Development</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Recurrent</div>
                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Debt Service</div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- IMPACT STRIP --- */}
      <section className="bg-black py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Platform Impact</p>
          <h2 className="text-2xl font-bold mb-12">Making a difference in government accountability</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/50">
              <div className="text-3xl font-black text-green-500 mb-1">KES 2.3B</div>
              <div className="text-xs text-gray-400">Savings Identified</div>
            </div>
            <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/50">
              <div className="text-3xl font-black text-white mb-1">847</div>
              <div className="text-xs text-gray-400">Issues Reported</div>
            </div>
            <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/50">
              <div className="text-3xl font-black text-white mb-1">156K</div>
              <div className="text-xs text-gray-400">Active Citizens</div>
            </div>
            <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/50">
              <div className="text-3xl font-black text-green-500 mb-1">47</div>
              <div className="text-xs text-gray-400">Counties Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Empowering Citizens with Transparency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Access real-time budget data, track projects in your community, and hold government accountable. Your tax shillings, your right to know.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-green-900"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
               <ShieldCheck size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Join the Transparency Movement</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Create an account to follow projects, receive personalized alerts, and contribute to government accountability today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
              Create Free Account
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}