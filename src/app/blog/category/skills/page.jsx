"use client";
import BlogNavbar from "@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar";
import Image from "next/image";
import Link from "next/link";

export default function SkillsSection() {
  const skillsPosts = [
    {
      id: 1,
      category: "Skills",
      title: "কন্টেন্ট রাইটিং কি?",
      description:
        "কন্টেন্ট রাইটিং বলতে বোঝায় একটি প্রক্রিয়া, যেখানে নির্দিষ্ট কোনো উদ্দেশ্যের সামনে রেখে তথ্যপূর্ণ, আকর্ষণীয় এবং পাঠকদের জন্য উপযোগী লেখা তৈরি করা হয়...",
      author: "Caretutors",
      date: "September 15, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%95%E0%A6%A8%E0%A6%9F%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%BF-min.jpg",
      link: "/skills/1",
    },
    {
      id: 2,
      category: "Skills",
      title: "এসইও (SEO) কী?",
      description:
        "বর্তমানে অনলাইন দুনিয়ায় নিজের অবস্থান দৃঢ় করার জন্য ব্যবসায়ের প্রয়োজন নিতে চাইলে এসইও (SEO) একটি অত্যাবশ্যকীয় বিষয়...",
      author: "Caretutors",
      date: "August 07, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%8F%E0%A6%B8%E0%A6%87%E0%A6%93-SEO-%E0%A6%95%E0%A7%80-1-min.jpg",
      link: "/skills/2",
    },
    {
      id: 3,
      category: "Skills",
      title: "ওয়েব ডিজাইন কি ?",
      description:
        "ওয়েব ডিজাইন বলতে বোঝায় কোনো ওয়েবসাইটের গঠন বা নকশা...",
      author: "Caretutors",
      date: "July 23, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/what-is-web-design-1-min.jpg",
      link: "/skills/3",
    },
    {
      id: 4,
      category: "Skills",
      title: "কমিউনিকেশন স্কিল বাড়ানোর ৫টি সহজ উপায়",
      description:
        "চাকরি বা ক্যারিয়ার যাই হোক, কমিউনিকেশন স্কিল অত্যন্ত গুরুত্বপূর্ণ...",
      author: "Caretutors",
      date: "June 24, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%95%E0%A6%AE%E0%A6%BF%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%B2-%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%BE%E0%A6%A8%E0%A7%8B%E0%A6%B0-%E0%A7%AB%E0%A6%9F%E0%A6%BF-%E0%A6%B8%E0%A6%B9%E0%A6%9C-%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A7%9F-1-min.jpg",
      link: "/skills/4",
    },
  ];

  return (
   <div className="mt-40">
    <BlogNavbar></BlogNavbar>
     <div className="container px-22 mx-auto mt-10 my-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsPosts.map((post) => (
          <Link key={post.id} href={post.link} className="group cursor-pointer">
            <div>
              <Image
                src={post.image}
                width={450}
                height={300}
                alt={post.title}
                className="rounded-md object-cover"
              />
            </div>

            <p className="text-sm text-gray-500 mt-3">{post.category}</p>

            <h3 className="text-lg font-semibold mt-1 group-hover:underline">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2 leading-6 line-clamp-3">
              {post.description}
            </p>

            <div className="flex gap-3 mt-2 text-sm text-gray-700">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
   </div>
  );
}
