import ProductCard from "@/components/ProductCard";

export default function Y2KPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] p-10">
      <h1 className="text-5xl font-bold text-black">
        Y2K Aesthetic
      </h1>

      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
        alt="Y2K Outfit"
        className="mt-8 rounded-3xl"
      />

      <p className="mt-8 text-lg text-gray-600 max-w-3xl">
        Inspired by early 2000s fashion, Y2K style features
        trendy silhouettes, statement accessories, playful
        colors and nostalgic fashion pieces.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <ProductCard
          name="Baby Tee"
          price="₹499"
          image="https://m.media-amazon.com/images/I/51xeOzgOGtL._SY879_.jpg"
          affiliateLink="https://amzn.to/49ACVxC"
        />

        <ProductCard
          name="Low Rise Jeans"
          price="₹670"
          image="https://m.media-amazon.com/images/I/71gojGAoGJL._SY879_.jpg"
          affiliateLink="https://amzn.to/4uMo2AE"
        />

        <ProductCard
          name="Platform Sneakers"
          price="₹2,799"
          image="https://m.media-amazon.com/images/I/61F8gwaGt0L._SY695_.jpg"
          affiliateLink="https://amzn.to/4uGxXI5"
        />

        <ProductCard
          name="Mini Shoulder Bag"
          price="₹948"
          image="https://m.media-amazon.com/images/I/51oF0o5586L.jpg"
          affiliateLink="https://amzn.to/3PRrfjq"
        />
      </div>
    </main>
  );
}