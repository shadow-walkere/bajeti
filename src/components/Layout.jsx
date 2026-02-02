import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import your updated Sidebar

export default function Layout({ children }) {
  // State is lifted here so both Sidebar and Content can react to it
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* Sidebar Component */}
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content Wrapper */}
      <div 
        className={`flex-1 transition-all duration-300 w-full
          ${/* Desktop: Adjust margin based on sidebar width */ ''}
          ${collapsed ? 'md:ml-20' : 'md:ml-64'} 
        `}
      >
        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden bg-black text-white p-4 flex justify-between items-center sticky top-0 z-30">
          <span className="font-bold text-lg">Bajeti</span>
          <button onClick={() => setMobileMenuOpen(true)}>
             {/* Hamburger Icon */}
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Page Content injected here */}
        <main className="p-0"> 
          {children} 
        </main>
      </div>

      {/* Mobile Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}