import Link from "next/link";

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
  return (
    <Link href={href}>
      <div className="overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />

        <div className="p-4 bg-white">
          <h3 className="font-semibold">{title}</h3>

          <p className="text-sm text-gray-500">
            Shop the complete look
          </p>
        </div>
      </div>
    </Link>
  );
}