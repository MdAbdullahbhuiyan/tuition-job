"use client";
import { useState } from "react";
import Image from "next/image";

const LatestPosts = () => {
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      id: 1,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/11/%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%AD%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%AA%E0%A6%B0%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BF%E0%A6%AA%E0%A6%B8-min.jpg",
      category: "Academic",
      title: "বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষার জন্য ১০টি টিপস",
      desc: "বাংলাদেশ বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা...",
      author: "Sabab Tahsin",
      date: "November 23, 2025",
    },
    {
      id: 2,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/10/Home-Tutor-vs.-Coaching-Center-min.jpg",
      category: "Academic",
      title: "Home Tutor vs Coaching Center: Which Is Better?",
      desc: "Education is the foundation of a bright future...",
      author: "Sabab Tahsin",
      date: "October 22, 2025",
    },
    {
      id: 3,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/10/Traditional-Education-vs-Modern-Education-min.jpg",
      category: "Academic",
      title: "Traditional Education vs Modern Education",
      desc: "Education is the key to a better future...",
      author: "Caretutors",
      date: "October 09, 2025",
    },
    {
      id: 4,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%95%E0%A6%A8%E0%A6%9F%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%BF-min.jpg",
      category: "Skills",
      title: "কনটেন্ট রাইটিং কি?",
      desc: "ডিজিটাল মার্কেটিং, SEO, ব্লগিং...",
      author: "Caretutors",
      date: "September 15, 2025",
    },
    {
      id: 5,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%97%E0%A6%A3%E0%A6%BF%E0%A6%A4-%E0%A6%AA%E0%A6%B0%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0-%E0%A6%AD%E0%A7%9F-%E0%A6%86%E0%A6%B0-%E0%A6%A8%E0%A7%9F-min.jpg",
      category: "Study Hacks",
      title: "গণিত পরীক্ষায় ভয় আর নয়",
      desc: "গণিত পরীক্ষায় স্কোর বাড়াতে চাইলে...",
      author: "Caretutors",
      date: "September 10, 2025",
    },
    {
      id: 6,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/ChatGPT-%E0%A6%95%E0%A7%80-ChatGPT-%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%BE%E0%A6%9C-%E0%A6%95%E0%A6%B0%E0%A7%87.jpg",
      category: "Technology",
      title: "ChatGPT কী? ChatGPT কিভাবে কাজ করে?",
      desc: "চ্যাটজিপিটি হলো কৃত্রিম বুদ্ধিমত্তার...",
      author: "Caretutors",
      date: "September 07, 2025",
    },
    {
      id: 7,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%B2%E0%A6%BF%E0%A6%82%E0%A6%95-%E0%A6%95%E0%A7%80-1-min.jpg",
      category: "Technology",
      title: "স্ট্যান্ডলাইট কী, কীভাবে কাজ করে?",
      desc: "স্ট্যান্ডলাইট ফটোগ্রাফি...",
      author: "Caretutors",
      date: "August 21, 2025",
    },
    {
      id: 8,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/SSC-Exam-Preparation-1-min.jpg",
      category: "Study Hacks",
      title: "এসএসসি পরীক্ষার প্রস্তুতি",
      desc: "এসএসসি পরীক্ষায় ভালো করতে...",
      author: "Caretutors",
      date: "August 18, 2025",
    },
    {
      id: 9,
      image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%8F%E0%A6%B8%E0%A6%87%E0%A6%93-SEO-%E0%A6%95%E0%A7%80-1-min.jpg",
      category: "Skills",
      title: "এসইও (SEO) কী?",
      desc: "সার্চ ইঞ্জিন অপটিমাইজেশন...",
      author: "Caretutors",
      date: "August 07, 2025",
    },
  ];

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <div className="container mx-auto  px-22 py-10 bg-white">

      {/* TITLE + VIEW ALL BUTTON (Top Right) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Latest Posts</h2>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            View All
          </button>
        )}
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <Image
              src={post.image}
              width={400}
              height={250}
              alt={post.title}
              className="w-full rounded"
            />

            <span className="text-xs text-gray-600 mt-3 block">
              {post.category}
            </span>

            <h3 className="font-semibold mt-1 hover:text-blue-500 cursor-pointer leading-tight">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
              {post.desc}
            </p>

            <span className="text-xs text-gray-500 block mt-2">
              {post.author} — {post.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
