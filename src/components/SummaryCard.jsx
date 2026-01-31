export default function SummaryCard({ title, value, note, yellow }) {
  return (
    <div
      className={`p-4 rounded-xl border ${
        yellow ? "bg-yellow-50" : "bg-green-50"
      }`}
    >
      <p className="text-sm text-gray-600">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-xs text-gray-500">{note}</p>
    </div>
  );
}
