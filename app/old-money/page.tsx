import ProductCard from "@/components/ProductCard";
import { oldMoneyOutfits } from "../data/outfits";

export default function OldMoneyPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] p-10">
      {oldMoneyOutfits.map((outfit) => (
        <section key={outfit.id} className="mb-20">
          <h1 className="text-5xl font-bold text-black">
            {outfit.title}
          </h1>

          <img
            src={outfit.image}
            alt={outfit.title}
            className="mt-8 rounded-3xl"
          />

          <p className="mt-8 text-lg text-gray-600 max-w-3xl">
            {outfit.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {outfit.products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                affiliateLink={product.affiliateLink}
              />
            ))}
          </div>

          <div className="mt-10">
            <a
              href={outfit.products[0].affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Shop This Look
            </a>
          </div>
        </section>
      ))}
    </main>
  );
}