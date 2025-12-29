export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center px-6 ml-64">
      <input
        type="text"
        placeholder="Search projects, counties, budgets..."
        className="w-96 px-4 py-2 border rounded-lg focus:outline-none"
      />
      <div className="ml-auto flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
          S
        </div>
      </div>
    </header>
  );
}
