export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

 

}

