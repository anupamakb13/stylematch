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
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-contain "
      />

      <h3 className="text-xl font-semibold text-black">
        {name}
      </h3>

      <p className="text-gray-500">
        {price}
      </p>

      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"
      >
        Buy on Amazon
      </a>
    </div>
  );
}