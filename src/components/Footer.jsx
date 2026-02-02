export default function Footer() {
  return (
    <footer className="ml-64 bg-black text-gray-300 mt-16">
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-14 text-sm">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-green-500 mb-4">
            Bajeti
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Promoting transparency, accountability, and citizen participation
            in public finance and government spending.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide">
            Explore
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-green-500 cursor-pointer transition">
              National Budget
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              County Budgets
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              Project Tracker
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide">
            Get Involved
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-red-500 cursor-pointer transition">
              Report an Issue
            </li>
            <li className="hover:text-red-500 cursor-pointer transition">
              Alert Center
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              Create Account
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide">
            Resources
          </h4>
          <ul className="space-y-3">
            <li className="hover:text-green-500 cursor-pointer transition">
              About Bajeti
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              Data Sources
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              API Access
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-800 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <span>
          © 2025 <span className="text-green-500">Bajeti</span>. All rights reserved.
        </span>

        <div className="flex gap-5">
          <span className="hover:text-green-500 cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-green-500 cursor-pointer transition">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
}
