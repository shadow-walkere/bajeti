import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    // Removed 'ml-64'. The Layout wrapper handles the width/margin automatically.
    <footer className="bg-black text-gray-400 border-t border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* 1. Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="text-green-600">Bajeti</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Promoting transparency, accountability, and citizen participation in public finance. Track every shilling, every day.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* 2. Platform Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-green-600">Explore</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink to="/national-budget" label="National Budget" />
              <FooterLink to="/county-budget" label="County Budgets" />
              <FooterLink to="/project-tracker" label="Project Tracker" />
              <FooterLink to="/dashboard" label="Open Data Dashboard" />
            </ul>
          </div>

          {/* 3. Action Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-green-600">Take Action</h4>
            <ul className="space-y-4 text-sm">
              <FooterLink to="/report" label="Report Corruption" highlight />
              <FooterLink to="/alerts" label="Alert Center" />
              <FooterLink to="/api" label="Developer API" />
              <FooterLink to="/contact" label="Contact Support" />
            </ul>
          </div>

          {/* 4. Newsletter (MVP Growth Feature) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest text-green-600">Stay Updated</h4>
            <p className="text-xs text-gray-500 mb-4">
              Join 10,000+ citizens receiving weekly budget analysis and alerts.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-gray-600"
                />
              </div>
              <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-6">
          <p>© {new Date().getFullYear()} Bajeti Transparency Portal. Built for Kenya 🇰🇪</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Helper Components for cleaner code ---

function FooterLink({ to, label, highlight }) {
  return (
    <li>
      <Link
        to={to}
        className={`transition-colors duration-200 block ${
          highlight 
            ? "text-red-500 hover:text-red-400 font-medium" 
            : "hover:text-green-500 hover:translate-x-1 transform transition-transform"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-green-700 hover:text-white transition-all text-gray-400 border border-gray-800 hover:border-green-600"
    >
      <Icon size={18} />
    </a>
  );
}