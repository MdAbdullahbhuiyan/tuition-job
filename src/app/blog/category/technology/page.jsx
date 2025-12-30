"use client";
import BlogNavbar from "@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar";
import Image from "next/image";

const techData = [
  {
    id: 1,
    category: "Technology",
    title: "ChatGPT কী? ChatGPT কিভাবে কাজ করে?",
    desc: "বর্তমান সময়ে কৃত্রিম বুদ্ধিমত্তা (Artificial Intelligence বা AI) আমাদের জীবনের প্রতিটি ক্ষেত্রে গুরুত্ব পাচ্ছে। AI ভিত্তিক সবচেয়ে আলোচিত টুলগুলোর মধ্যে ChatGPT অন্যতম। এটি খুবই জনপ্র...",
    author: "Caretutors",
    date: "September 07, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/ChatGPT-%E0%A6%95%E0%A7%80-ChatGPT-%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%BE%E0%A6%9C-%E0%A6%95%E0%A6%B0%E0%A7%87.jpg",
  },
  {
    id: 2,
    category: "Technology",
    title: "স্টারলিংক কী, কীভাবে কাজ করে?",
    desc: "ভাবুন তো, এমন এক ইন্টারনেট সেবা যা আর মোবাইল টাওয়ার, অপটিক ফাইবার বা কোনো কেবল ছাড়াই চলে! আপনি যেখানেই থাকুন— পাহাড়ের চূড়া, দূরবর্তী দ্বীপ কিংবা মরুভূমি—সেখানে কোনো প্রা...",
    author: "Caretutors",
    date: "August 21, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%B2%E0%A6%BF%E0%A6%82%E0%A6%95-%E0%A6%95%E0%A7%80-1-min.jpg",
  },
  {
    id: 3,
    category: "Technology",
    title: "ডেটা অ্যানালাইসিস কি?",
    desc: "ভাবুন তো, আপনি মাখন গলালে সার দিনলেম “এল্ড ওয়াচ” মিনিটে পাঁচটা পর ফ্রিজের ঢাকনা বন্ধের শব্দটা শোনে পড়লো! এটা বিজ্ঞানের যেটা আপনি ভাবছেন সেটা নয়—এটা হলো Data Analysis...",
    author: "Caretutors",
    date: "July 10, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/Data-Analytics.jpg",
  },
];

export default function Technology() {
  return (
    <div>
        <BlogNavbar></BlogNavbar>
        <div className="container  mx-auto px-22 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8">Technology</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {techData.map((item) => (
          <div key={item.id}>
            {/* Image */}
            <div className="relative w-full h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Category */}
            <p className="text-sm text-gray-600 mt-3">{item.category}</p>

            {/* Title */}
            <h3 className="text-xl font-semibold leading-snug mt-1">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-700 text-sm leading-6">
              {item.desc}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-3 mt-4 text-sm text-gray-600">
              <span>{item.author}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
