"use client";

import { useState, useEffect } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [theme, setTheme] = useState("lavender");

  useEffect(() => {
    setName(localStorage.getItem("profileName") || "Anupama");

    setBio(
      localStorage.getItem("profileBio") ||
        "Exploring Korean fashion, Old Money aesthetics and Y2K trends."
    );
setTheme(localStorage.getItem("theme") || "lavender");
    setImage(localStorage.getItem("profileImage") || "");
  }, []);

  const saveProfile = () => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileBio", bio);
    localStorage.setItem("profileImage", image);
    localStorage.setItem("theme", theme);

    alert("Profile saved successfully!");
  };

  return (
    <main className="min-h-screen bg-[#f8f5f2] p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-black">
          Edit Profile
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-black">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-3 text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Bio
            </label>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-xl p-3 h-32 text-black"
            />
          </div>

          <div className="flex items-center justify-between gap-6">
  <div className="flex-1">
    <label className="block mb-2 font-medium text-black">
      Profile Picture
    </label>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
          setImage(reader.result as string);
        };

        reader.readAsDataURL(file);
      }}
    />
  </div>

 <img
  src={
    image ||
    "https://ui-avatars.com/api/?name=Anupama&size=200"
  }
  alt="Preview"
  className="w-24 h-24 rounded-full object-cover border"
/>
</div>

<div>
  <label className="block mb-2 font-medium text-black">
    Theme
  </label>

  <select
    value={theme}
    onChange={(e) => setTheme(e.target.value)}
    className="w-full border rounded-xl p-3 text-black"
  >
    <option value="lavender">💜 Lavender</option>
    <option value="pink">🌸 Pastel Pink</option>
    <option value="blue">🩵 Pastel Blue</option>
    <option value="sage">🌿 Sage Green</option>
    <option value="dark">🖤 Dark Mode</option>
  </select>
</div>

<button
  onClick={saveProfile}
  className="bg-black text-white px-6 py-3 rounded-xl"
>
  Save Changes
</button>
        </div>
      </div>
    </main>
  );
}