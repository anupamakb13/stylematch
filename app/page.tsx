"use client";

import Link from "next/link";
import OutfitCard from "@/components/OutfitCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const outfits = [
    {
      title: "Old Money Summer",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      href: "/old-money",
    },
    {
      title: "Korean Minimalist",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
      href: "/korean",
    },
    {
      title: "Streetwear Essentials",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
      href: "/streetwear",
    },
    {
      title: "Y2K Aesthetic",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
      href: "/y2k",
    },
  ];

  const filteredOutfits = outfits.filter((outfit) =>
    outfit.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8f5f2] text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-tight">
          StyleMatch
        </h1>
<div className="flex gap-6">
  <Link href="/" className="hover:text-gray-600">
    Explore
  </Link>

  <Link href="/boards" className="hover:text-gray-600">
    Boards
  </Link>

  <Link href="/profile" className="hover:text-gray-600">
    Profile
  </Link>
</div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 px-4">
        <h2 className="text-6xl font-extrabold text-black">
          Discover Your Perfect Outfit
        </h2>

        <p className="mt-4 text-gray-600">
          Find aesthetic fashion inspiration and shop the look.
        </p>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-8 w-[500px] max-w-[90%] p-4 rounded-xl border bg-white"
          placeholder="Search styles..."
        />
      </section>

      {/* Style Categories */}
      <section className="flex justify-center gap-4 mt-12 flex-wrap">
        <Link
          href="/old-money"
          className="px-5 py-2 rounded-full bg-black text-white hover:opacity-90 transition"
        >
          Old Money
        </Link>

        <Link
          href="/korean"
          className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100 transition"
        >
          Korean
        </Link>

        <Link
          href="/streetwear"
          className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100 transition"
        >
          Streetwear
        </Link>

        <Link
          href="/y2k"
          className="px-5 py-2 rounded-full bg-white border hover:bg-gray-100 transition"
        >
          Y2K
        </Link>
      </section>

      {/* Outfit Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 mt-10">
        {filteredOutfits.map((outfit) => (
          <OutfitCard
            key={outfit.title}
            title={outfit.title}
            image={outfit.image}
            href={outfit.href}
          />
        ))}
      </section>

      {filteredOutfits.length === 0 && (
        <p className="text-center text-gray-500 pb-10">
          No styles found.
        </p>
      )}
    </main>
  );
}