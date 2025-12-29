import FeatureCard from "../components/FeatureCard";
import { BarChart3, Eye, Bell, Users, Map, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="ml-64 p-8 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Empowering Citizens with Transparency
        </h1>
        <p className="text-gray-600">
          Access real-time budget data, track projects in your community, and
          hold government accountable.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <FeatureCard
          icon={<BarChart3 />}
          title="Budget Analytics"
          description="Visualize national and county budgets with interactive charts."
        />
        <FeatureCard
          icon={<Eye />}
          title="Project Tracking"
          description="Track projects from allocation to completion."
        />
        <FeatureCard
          icon={<Bell />}
          title="Smart Alerts"
          description="Get notified about budget anomalies."
        />
        <FeatureCard
          icon={<Users />}
          title="Citizen Verification"
          description="Upload photos and verify progress on the ground."
        />
        <FeatureCard
          icon={<Map />}
          title="County Comparison"
          description="Compare county spending and performance."
        />
        <FeatureCard
          icon={<ShieldCheck />}
          title="Data Integrity"
          description="Verified, accurate, and up-to-date data."
        />
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-black via-red-700 to-green-700 text-white p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Join the Transparency Movement
        </h2>
        <p className="mb-6">
          Create an account to follow projects, receive alerts, and contribute.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
            Create Free Account
          </button>
          <button className="border border-white px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
