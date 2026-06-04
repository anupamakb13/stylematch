import ProductCard from "@/components/ProductCard";

export default function KoreanPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] p-10">

      {/* Outfit 1 */}
      <h1 className="text-5xl font-bold text-black">
        Korean Minimalist
      </h1>

      <img
        src="https://m.media-amazon.com/images/I/71VWE36cULL._SY879_.jpg"
        alt="Korean Minimalist"
        className="mt-8 rounded-3xl"
      />

      <p className="mt-8 text-lg text-gray-600 max-w-3xl">
        Korean minimalist fashion focuses on clean silhouettes,
        neutral colors and effortless elegance.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <ProductCard
          name="Oversized light brown Shirt"
          price="₹469"
          image="https://m.media-amazon.com/images/I/81ITn+VFF5L._SY879_.jpg"
          affiliateLink="https://amzn.to/4x4SnMw"
        />

        <ProductCard
          name="Wide Leg Black Trousers"
          price="₹599"
          image="https://m.media-amazon.com/images/I/51gUum+K0jL._SY879_.jpg"
          affiliateLink="https://amzn.to/4uJACRg"
        />

        <ProductCard
          name="Minimal Sneakers"
          price="₹1399"
          image="https://m.media-amazon.com/images/I/61Wd8QQHkqL._SY695_.jpg"
          affiliateLink="https://amzn.to/4aaMUtF"
        />

        <ProductCard
          name="Tank Top-White"
          price="319"
          image="https://m.media-amazon.com/images/I/61d+sQf29IL._SY879_.jpg"
          affiliateLink="https://amzn.to/4u96ttr"
         />
        </div>
        {/* Outfit 2 */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-black">
          Seoul Café Look
        </h2>

        <img
          src="https://i.pinimg.com/736x/10/81/75/1081754c47b9a668deedb509fe137066.jpg"
          alt="Seoul Cafe Look"
          className="mt-8 rounded-3xl"
        />

        <p className="mt-8 text-lg text-gray-600 max-w-3xl">
          A relaxed oversized shirt paired with straight-fit denim and
          clean sneakers. Perfect for café hopping and casual outings.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <ProductCard
            name="Oversized Striped Shirt"
            price="₹599"
            image="https://m.media-amazon.com/images/I/71NDjCQixiL._SY879_.jpg"
            affiliateLink="https://amzn.to/4ukAmr5"
          />

          <ProductCard
            name="Lace Top"
            price="₹699"
            image="https://m.media-amazon.com/images/I/71gK7qN47kL._SY879_.jpg"
            affiliateLink="https://amzn.to/3PZrV6k"
          />
          <ProductCard
            name="Mini Skirt"
            price="₹799"
            image="https://m.media-amazon.com/images/I/51LCFOMU40L._SY879_.jpg"
            affiliateLink="https://amzn.to/4e5EaGu"
          />

          <ProductCard
            name="White Sneakers"
            price="₹1499"
            image="https://m.media-amazon.com/images/I/61KNZZkCjYL._SY695_.jpg"
            affiliateLink="https://amzn.to/4uMK723"
          />

          <ProductCard
            name="Canvas Tote Bag"
            price="₹999"
            image="https://m.media-amazon.com/images/I/417fLT+QqkL._SY879_.jpg"
            affiliateLink="https://amzn.to/4fs6d5d"
          />
           </div>
            {/* Outfit 3 */}
           <section className="mt-24">
  <h2 className="text-4xl font-bold text-black">
    Korean Summer Neutral
  </h2>

  <img
    src="https://i.pinimg.com/1200x/16/24/6e/16246e87cb70744c7401e52ca2e1566c.jpg"
    alt="Korean Summer Neutral"
    className="mt-8 rounded-3xl"
  />

  <p className="mt-8 text-lg text-gray-600 max-w-3xl">
    A lightweight neutral-toned outfit featuring relaxed silhouettes and
    breathable fabrics, perfect for warm summer days.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mt-12">
    <ProductCard
      name="Analog Watch"
      price="₹2157"
      image="https://m.media-amazon.com/images/I/51FECWp7GtL._SX679_.jpg"
      affiliateLink="https://amzn.to/4ugoLt2"
    />

    <ProductCard
      name="White Shirt"
      price="₹450"
      image="https://m.media-amazon.com/images/I/41LdVJtzQmL.jpg"
      affiliateLink="https://amzn.to/4uQ3lUu"
    />

    <ProductCard
      name="Brown Wide Leg Pants"
      price="₹499"
      image="https://m.media-amazon.com/images/I/41nTwgU6DNL._SX679_.jpg"
      affiliateLink="https://amzn.to/4x5f6YV"
    />

    <ProductCard
      name="Block Heel"
      price="₹1199"
      image="https://m.media-amazon.com/images/I/71z3vc2rBYL._SY695_.jpg"
      affiliateLink="https://amzn.to/4o65LMe"
    />
  </div>
  {/* Outfit 4*/}
  <section className="mt-24">
  <h2 className="text-4xl font-bold text-black">
    Korean Airport Fashion
  </h2>

  <img
    src="https://i.pinimg.com/736x/f2/e1/bf/f2e1bf84fef3be45b3334ebc92ad46d8.jpg"
    alt="Korean Airport Fashion"
    className="mt-8 rounded-3xl"
  />

  <p className="mt-8 text-lg text-gray-600 max-w-3xl">
    Inspired by Korean celebrities, this look combines comfort and style
    with oversized pieces and clean accessories.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mt-12">
    <ProductCard
      name="Polo Blue shirt"
      price="₹1069"
      image="https://m.media-amazon.com/images/I/614PH0rHK6L._SX679_.jpg"
      affiliateLink="https://amzn.to/4e9dkgN"
    />

    <ProductCard
      name="Highwaist jeans"
      price="₹849"
      image="https://m.media-amazon.com/images/I/61ixYIWikbL._SY879_.jpg"
      affiliateLink="https://amzn.to/4xai26v"
    />

    <ProductCard
      name="White Sneakers"
      price="₹1189"
      image="https://m.media-amazon.com/images/I/61FkBMkR6PL._SY695_.jpg"
      affiliateLink="https://amzn.to/4ocvEdp"
    />

    <ProductCard
      name="Black Shoulder Bag"
      price="₹2499"
      image="https://m.media-amazon.com/images/I/61Lx4mOJdrL._SY695_.jpg"
      affiliateLink="https://amzn.to/3PU9YGh"
    />
  </div>
  {/* Outfit 5*/}
  <section className="mt-24">
  <h2 className="text-4xl font-bold text-black">
    Minimal Black & White
  </h2>

  <img
    src="https://i.pinimg.com/736x/4b/25/7f/4b257f68b7836f40be32e1af58af43dc.jpg"
    alt="Minimal Black and White"
    className="mt-8 rounded-3xl"
  />

  <p className="mt-8 text-lg text-gray-600 max-w-3xl">
    A timeless monochrome combination featuring clean lines and a sleek,
    modern Korean aesthetic.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mt-12">
    <ProductCard
      name="White Ruffle Shirt"
      price="₹399"
      image="https://m.media-amazon.com/images/I/41NilagC4JL.jpg"
      affiliateLink="https://amzn.to/3ROzOMv"
    />

    <ProductCard
      name="Black sleeveless Dress"
      price="₹487"
      image="https://m.media-amazon.com/images/I/41ZQcRjerfL._SY879_.jpg"
      affiliateLink="https://amzn.to/3ROEh1E"
    />

    <ProductCard
      name="Black Heels"
      price="₹939"
      image="https://m.media-amazon.com/images/I/51n9lD-O-ZL._SY695_.jpg"
      affiliateLink="https://amzn.to/4uimJbN"
    />

    <ProductCard
      name="Leather Tote Bag"
      price="₹2199"
      image="https://m.media-amazon.com/images/I/71YsEg727pL._SY695_.jpg"
      affiliateLink="https://amzn.to/49Fgp6P"
    />
  </div>
</section>

</section>
</section>

      </section>

    </main>
  );
}