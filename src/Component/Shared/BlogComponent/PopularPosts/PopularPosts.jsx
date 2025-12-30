"use client";
import Image from "next/image";
import { useState } from "react";

const PopularPosts = () => {
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      id: 1,
      category: "Career",
      title: "ভর্তিচ্ছুদের জন্য ১০টি গুরুত্বপূর্ণ টিপস",
      desc: "ভর্তি পরীক্ষার জন্য প্রস্তুত হওয়া শিক্ষার্থীদের…",
      author: "Caretutors",
      date: "May 15, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%AD%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AF%E0%A6%BC%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%B2-2.jpg",
    },
    {
      id: 2,
      category: "Career",
      title: "ইন্টার্নশিপ খোঁজার সহজ উপায়",
      desc: "চাকরি পাওয়ার আগে অভিজ্ঞতা অর্জনের অন্যতম পদ্ধতি…",
      author: "Caretutors",
      date: "June 03, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%B6%E0%A6%BF%E0%A6%AA-%E0%A6%96%E0%A7%8B%E0%A6%81%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%B9%E0%A6%9C-%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A7%9F-1-min.jpg",
    },
    {
      id: 3,
      category: "Study Hacks",
      title: "ইন্টারভিউতে জড়তা কাটানোর ১০টি টিপস",
      desc: "ইন্টারভিউতে ভয় দূর করার কার্যকর উপায়…",
      author: "Caretutors",
      date: "May 31, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%87%E0%A6%82%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%9C%E0%A7%9C%E0%A6%A4%E0%A6%BE-%E0%A6%95%E0%A6%BE%E0%A6%9F%E0%A6%BE%E0%A6%A8%E0%A7%8B%E0%A6%B0-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BF%E0%A6%AA%E0%A6%B8.jpg",
    },
    {
      id: 4,
      category: "Academic",
      title: "How to Find Best Home Tutors for Your Child",
      desc: "A good tutor helps build strong academic foundation…",
      author: "Caretutors",
      date: "July 17, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/SSC-Exam-Preparation-1-min.jpg",
    },
    {
      id: 5,
      category: "Academic",
      title: "Home Tutors vs. Online Tutors: Which One Is Best?",
      desc: "Parents often get confused about choosing home or online tutor…",
      author: "Caretutors",
      date: "June 22, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%87%E0%A6%B6%E0%A6%A8%E0%A6%BE%E0%A6%B2-%E0%A6%87%E0%A6%AE%E0%A7%87%E0%A6%87%E0%A6%B2-%E0%A6%95%E0%A7%80%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A6%AC%E0%A7%87%E0%A6%A8.jpg",
    },
    {
      id: 6,
      category: "Technology",
      title: "স্টাডিল্যাম্প কী, কীভাবে কাজ করে?",
      desc: "স্টাডিল্যাম্পের কাজ ও সুবিধা সম্পর্কে বিস্তারিত…",
      author: "Caretutors",
      date: "August 21, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/How-to-Find-Best-Home-Tutors-for-Your-Child-1-min.jpg",
    },
    {
      id: 7,
      category: "Study Hacks",
      title: "এসএসসি পরীক্ষার প্রস্তুতি | SSC Exam Preparation",
      desc: "SSC পরীক্ষার্থীদের জন্য গুরুত্বপূর্ণ প্রস্তুতি টিপস…",
      author: "Caretutors",
      date: "August 18, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/Home-Tutor-vs-Online-Tutor-1-min.jpg",
    },
    {
      id: 8,
      category: "Career",
      title: "প্রফেশনাল ই-মেইল কীভাবে লিখবেন?",
      desc: "প্রফেশনাল ইমেইল লেখার নিয়ম ও নির্দেশনা…",
      author: "Caretutors",
      date: "May 29, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/ChatGPT-%E0%A6%95%E0%A7%80-ChatGPT-%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%BE%E0%A6%9C-%E0%A6%95%E0%A6%B0%E0%A7%87.jpg",
    },
    {
      id: 9,
      category: "Technology",
      title: "ChatGPT কী? ChatGPT কীভাবে কাজ করে?",
      desc: "এআই টুল ChatGPT সম্পর্কে সম্পূর্ণ ধারণা…",
      author: "Caretutors",
      date: "September 07, 2025",
      img: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%B2%E0%A6%BF%E0%A6%82%E0%A6%95-%E0%A6%95%E0%A7%80-1-min.jpg",
    },
  ];

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <div className="my-10 container mx-auto px-22">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[22px] font-semibold">Popular Posts</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <div key={post.id} className="cursor-pointer group">

            <Image
              src={post.img}
              width={500}
              height={300}
              alt={post.title}
              className="rounded-md"
            />

            <p className="text-sm text-blue-600 mt-2">{post.category}</p>

            <h3 className="font-semibold text-[17px] group-hover:underline mt-1">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
              {post.desc}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              {post.author} — {post.date}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
