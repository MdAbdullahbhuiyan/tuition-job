"use client";

import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";

import tutor1 from "../../../public/0001.png";
import tutor2 from "../../../public/0002.png";
import tutor3 from "../../../public/0003.png";
import tutor4 from "../../../public/0004.png";
import tutor5 from "../../../public/0005.png";

export default function SignIn() {
  const [role, setRole] = useState("guardian");
  const [current, setCurrent] = useState(0);

  const images = [tutor1, tutor2, tutor3, tutor4, tutor5];

  // auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center px-4 mt-30">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE CAROUSEL */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="
            relative 
            w-[280px] h-[280px] 
            lg:w-[500px] lg:h-[500px]
          ">
            <Image
              src={images[current]}
              alt="Start Tutoring"
              fill
              className="object-contain transition-all duration-500"
            />
          </div>

          {/* dots */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center text-blue-600">
            {role === "guardian" ? "Guardian Login" : "Tutor Login"}
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Sign In to Continue
          </p>

          {/* ROLE SELECTOR */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setRole("guardian")}
              className={`flex-1 p-3 rounded-xl flex items-center gap-2 shadow border transition
                ${
                  role === "guardian"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }
              `}
            >
              👨‍👩‍👧 Guardian or Student
            </button>

            <button
              onClick={() => setRole("tutor")}
              className={`flex-1 p-3 rounded-xl flex items-center gap-2 shadow border transition
                ${
                  role === "tutor"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200"
                }
              `}
            >
              👨‍🏫 Tutor
            </button>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email *</label>
            <input
              type="email"
              placeholder={
                role === "guardian"
                  ? "guardian@example.com"
                  : "tutor@example.com"
              }
              className="w-full border-b p-2 outline-none bg-transparent"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password *</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-b p-2 outline-none bg-transparent"
            />
          </div>

          {/* SIGN IN BUTTON */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition">
            Sign In →
          </button>

          {/* GOOGLE & GITHUB */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => signIn("google")}
              className="w-full border py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <FaGoogle /> Sign in with Google
            </button>

            <button
              onClick={() => signIn("github")}
              className="w-full border py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <FaGithub /> Sign in with GitHub
            </button>
          </div>

          {/* BOTTOM LINKS */}
          <div className="flex justify-between mt-6 text-sm text-blue-600">
            <a href="/signup">Sign Up</a>
            <a href="/forgot">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
