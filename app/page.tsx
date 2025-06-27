import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100 text-gray-800">
      <Image src="/logo.png" alt="DroneHQ Logo" width={200} height={60} />

      <h1 className="text-4xl font-bold mt-6 mb-2">Welcome to DroneHQ.io 🛸</h1>
      <p className="text-center text-lg max-w-xl mb-8">
        Manage your drone program like a pro — flight logs, checklists,
        equipment tracking, and compliance tools built for schools,
        public safety teams, and solo pilots.
      </p>

      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-[#0f172a] text-[#39ff14] px-6 py-3 rounded-lg hover:bg-[#1e293b] transition"
        >
          Get Started
        </Link>
        <Link
          href="/features"
          className="border border-[#0f172a] text-[#0f172a] px-6 py-3 rounded-lg hover:bg-[#f0fdf4] transition"
        >
          Explore Features
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DroneHQ.io. All rights reserved.
      </footer>
    </main>
  );
}
