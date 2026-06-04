"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProfilePage() {
    const [name, setName] = useState("Anupama");

const [bio, setBio] = useState(
  "Exploring Korean fashion, Old Money aesthetics and Y2K trends."
);
const [image, setImage] = useState("");
const [theme, setTheme] = useState("lavender");

useEffect(() => {
  const savedName = localStorage.getItem("profileName");
  const savedBio = localStorage.getItem("profileBio");
  const savedImage = localStorage.getItem("profileImage");
  const savedTheme = localStorage.getItem("theme");

  if (savedName) setName(savedName);
  if (savedBio) setBio(savedBio);
  if (savedImage) setImage(savedImage);
  if (savedTheme) setTheme(savedTheme);
}, []);
const themeStyles = {
  lavender: "bg-[#FAF7FF]",
  pink: "bg-[#FFF1F2]",
  blue: "bg-[#EFF6FF]",
  sage: "bg-[#F0FDF4]",
  dark: "bg-black",
};
  return (
    <main className={`min-h-screen p-6 md:p-10 ${themeStyles[theme as keyof typeof themeStyles]}`}>
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-8">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
  src={
    image ||
    `https://ui-avatars.com/api/?name=${name}&size=200&background=000000&color=ffffff`
  }
  alt="Profile"
  className="w-28 h-28 rounded-full object-cover"
/>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-black">
              {name}
            </h1>

            <p className="text-gray-600 mt-2 text-black">
              {bio}
            </p>

            <Link
              href="/edit-profile"
              className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 text-black"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Favorite Styles */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">
            Favorite Styles
          </h2>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-black text-white px-4 py-2 rounded-full text-black">
              Old Money
            </span>

            <span className="bg-black text-white px-4 py-2 rounded-full text-black">
              Korean Minimalist
            </span>

            <span className="bg-black text-white px-4 py-2 rounded-full">
              Streetwear
            </span>

            <span className="bg-black text-white px-4 py-2 rounded-full">
              Y2K
            </span>
          </div>
        </section>

        {/* Account Stats */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">
            Account Stats
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 rounded-2xl p-6">
              <p className="text-gray-600">
                Saved Outfits
              </p>

              <h3 className="text-3xl font-bold mt-2">
                12
              </h3>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6">
              <p className="text-gray-600">
                Boards
              </p>

              <h3 className="text-3xl font-bold mt-2">
                3
              </h3>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">
            About Me
          </h2>

          <p className="text-gray-600 mt-4 text-black">
            I love discovering new fashion aesthetics and creating
            outfit inspirations that combine elegance, simplicity,
            and modern trends.
          </p>
        </section>
      </div>
    </main>
  );
}