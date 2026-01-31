export default function ChartCard({ title, subtitle, children, className }) {
  return (
    <div className={`bg-white rounded-xl border p-5 ${className || ""}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}
