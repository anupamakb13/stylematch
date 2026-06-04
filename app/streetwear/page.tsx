import ProductCard from "@/components/ProductCard";

export default function StreetwearPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] p-10">
      <h1 className="text-5xl font-bold text-black">
        Streetwear Essentials
      </h1>

      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200"
        alt="Streetwear Outfit"
        className="mt-8 rounded-3xl"
      />

      <p className="mt-8 text-lg text-gray-600 max-w-3xl">
        Streetwear combines oversized silhouettes, sneakers,
        graphic pieces and urban-inspired fashion for a bold,
        comfortable everyday look.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <ProductCard
          name="Oversized Graphic T-Shirt"
          price="₹538"
          image="https://m.media-amazon.com/images/I/61e5ARWyBTL._SY879_.jpg"
          affiliateLink="https://amzn.to/43N6vMM"
        />

        <ProductCard
          name="Baggy Cargo Pants"
          price="₹739"
          image="https://m.media-amazon.com/images/I/51BIWjD5ldL._SY879_.jpg"
          affiliateLink="https://amzn.to/4e0xZ6y"
        />

        <ProductCard
          name="Chunky Sneakers"
          price="₹699"
          image="https://m.media-amazon.com/images/I/61IlzUanIRL._SY695_.jpg"
          affiliateLink="https://amzn.to/4uKqurr"
        />

        <ProductCard
          name="Crossbody Streetwear Bag"
          price="₹464"
          image="https://m.media-amazon.com/images/I/41xLDgIxH1L._SY695_.jpg"
          affiliateLink="https://amzn.to/4uEnVXU"
        />
      </div>
    </main>
  );
}
