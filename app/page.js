'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white" style={{ height: "89.5vh" }}>
      <section className="flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ height: "89.5vh" }}>
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Muhammad Adnan Fareed</h1>
          <p className="text-lg md:text-2xl mb-8">Mern Stack Developer</p>
          <Link href="/contact" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md text-lg transition">
            Hire Me
          </Link>
        </div>
      </section>
    </div>
  );
}
