"use client";

import Link from "next/link";
import { useState } from "react";

type OutfitCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function OutfitCard({
  title,
  image,
  href,
}: OutfitCardProps) {
  const [saved, setSaved] = useState(false);

  const saveOutfit = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const savedOutfits = JSON.parse(
      localStorage.getItem("savedOutfits") || "[]"
    );

    if (!savedOutfits.includes(title)) {
      savedOutfits.push(title);

      localStorage.setItem(
        "savedOutfits",
        JSON.stringify(savedOutfits)
      );
    }

    setSaved(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition bg-white">
      <Link href={href}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
        />

        <div className="p-4">
          <h3 className="font-semibold text-black">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            Shop the complete look
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          onClick={saveOutfit}
          className="w-full bg-pink-500 text-white py-2 rounded-xl hover:opacity-90"
        >
          {saved ? "TEST SAVED" : "TEST BUTTON"}
        </button>
      </div>
    </div>
  );
}