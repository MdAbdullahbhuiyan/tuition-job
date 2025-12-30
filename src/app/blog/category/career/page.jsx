"use client";
import BlogNavbar from "@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar";
import Image from "next/image";

const careerData = [
  {
    id: 1,
    category: "Career",
    title: "ইন্টার্নশিপ খোঁজার সহজ উপায়",
    desc: "বর্তমান প্রতিযোগিতামূলক চাকরির বাজারে কেবল ডিগ্রি থাকলেই চলবে না, প্রয়োজন বাস্তব অভিজ্ঞতা। আর এই অভিজ্ঞতা অর্জনের অন্যতম কার্যকর উপায় হলো ইন্টার্নশিপ। একটি সময় হতেই...",
    author: "Caretutors",
    date: "June 03, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%B6%E0%A6%BF%E0%A6%AA-%E0%A6%96%E0%A7%8B%E0%A6%81%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%B9%E0%A6%9C-%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A7%9F-1-min.jpg",
  },
  {
    id: 2,
    category: "Career",
    title: "প্রফেশনাল ই-মেইল কীভাবে লিখবেন?",
    desc: "অনেক সমস্যাগুলোতে মানুষ পুরো নষ্ট হয়ে যায় তাদের সাথে যোগাযোগ করতে, অনেক সময় পত্রিকার মাধ্যমেএ চিঠি আদান-প্রদান হয়তো। তাদের আদান-প্রদান এই বিভাগ, যা চিঠি আদান-প্রদানের...",
    author: "Caretutors",
    date: "May 29, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A7%87%E0%A6%B6%E0%A6%A8%E0%A6%BE%E0%A6%B2-%E0%A6%87%E0%A6%AE%E0%A7%87%E0%A6%87%E0%A6%B2-%E0%A6%95%E0%A7%80%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A6%AC%E0%A7%87%E0%A6%A8.jpg",
  },
  {
    id: 3,
    category: "Career",
    title: "ভবিষ্যতের জন্য ১০টি প্রয়োজনীয় স্কিল",
    desc: "ভাবুন, ৫ বছর পরে আপনি কেমন হবেন? কোন ধরনের?কেউ বলতেছেন— চাকরির করবো! নিজেকে একটা ছোঁটা স্কিলসেট করে তুলুন যা আপনার স্বপ্ন যাই হোক, সে স্বপ্ন পেইন্টিংয়ের জন্য খুবই...",
    author: "Caretutors",
    date: "May 15, 2025",
    image: "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/%E0%A6%AD%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%AF%E0%A6%A4%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AF%E0%A6%BC%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%AF%E0%A6%BC-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%B2-2.jpg",
  },
];

export default function Career() {
  return (
   <div>
    <BlogNavbar></BlogNavbar>
     <div className="container px-22 mx-auto  py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8">Career</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {careerData.map((item) => (
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
