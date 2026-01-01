"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import pic1 from "../../../public/001.png";
import pic2 from "../../../public/002.png";
import pic3 from "../../../public/003.png";

export default function HireTutor() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(0);

  const images = [pic1, pic2, pic3];

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Phone validation + step change
  const handleContinue = () => {
    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }

    if (!/^01[0-9]{9}$/.test(phone)) {
      setError("Please enter a valid Bangladeshi number");
      return;
    }

    setError("");
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center px-4 mt-30">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE CAROUSEL */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={images[current]}
              alt="Request for Tutor"
              fill
              className="object-contain transition-all duration-500"
            />
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          {step === 1 && (
            <>
              <h1 className="text-3xl font-semibold text-blue-600 mb-2">
                Need Tutor?
              </h1>
              <p className="text-gray-600 mb-6">
                Please give us your number
              </p>

              <div className="mb-6">
                <label className="block font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="E.g: 01756441122"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b outline-none py-2 focus:border-blue-500"
                />

                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </div>

              <button
                onClick={handleContinue}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                Continue →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-semibold text-blue-600 mb-2">
                Need Tutor?
              </h1>
              <p className="text-gray-600 mb-6">
                Please give us your details
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mohammad Abdullah"
                    className="w-full border-b outline-none py-2 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mirpur-13, Dhaka 1216"
                    className="w-full border-b outline-none py-2 focus:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    placeholder="English medium tutor is needed for 7th grade student."
                    className="w-full border-b outline-none py-2 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                Continue →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
