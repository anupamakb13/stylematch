"use client";

import { useState, useEffect } from "react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  affiliateLink: string;
};

export default function ProductCard({
  name,
  price,
  image,
  affiliateLink,
}: ProductCardProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("savedOutfits") || "[]"
    );

    setSaved(savedProducts.includes(name));
  }, [name]);

  const saveProduct = () => {
    const savedProducts = JSON.parse(
      localStorage.getItem("savedOutfits") || "[]"
    );

    if (savedProducts.includes(name)) {
      const updatedProducts = savedProducts.filter(
        (item: string) => item !== name
      );

      localStorage.setItem(
        "savedOutfits",
        JSON.stringify(updatedProducts)
      );

      setSaved(false);
    } else {
      savedProducts.push(name);

      localStorage.setItem(
        "savedOutfits",
        JSON.stringify(savedProducts)
      );

      setSaved(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-contain"
      />

      <h3 className="text-xl font-semibold text-black mt-4">
        {name}
      </h3>

      <p className="text-gray-500 mt-2">
        {price}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={saveProduct}
          className={`px-4 py-2 rounded-lg text-white transition ${
            saved
              ? "bg-pink-500 hover:bg-pink-200"
              : "bg-gray-500 hover:bg-red-200"
          }`}
        >
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}