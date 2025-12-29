export default function Footer() {
  return (
    <footer className="ml-64 border-t bg-white mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Bajeti</h3>
          <p className="text-gray-600">
            Promoting transparency and accountability in government spending.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-gray-600">
            <li>National Budget</li>
            <li>County Budgets</li>
            <li>Project Tracker</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Get Involved</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Report Issue</li>
            <li>Alert Center</li>
            <li>Create Account</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-600">
            <li>About Us</li>
            <li>Data Sources</li>
            <li>API Access</li>
          </ul>
        </div>
      </div>

      <div className="border-t px-8 py-4 flex justify-between text-xs text-gray-500">
        <span>© 2025 Bajeti. All rights reserved.</span>
        <div className="space-x-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
