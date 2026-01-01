"use client";
import BlogNavbar from "@/Component/Shared/BlogComponent/BlogNavbar/BlogNavbar";
import Image from "next/image";
import Link from "next/link";

export default function Academic() {
  const blogPosts = [
    {
      id: 1,
      category: "Academic",
      title: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য ১০টি টিপস",
      description:
        "বাংলাদেশে বিশ্ববিদ্যালয় ভর্তি পরীক্ষা হলো জীবনের সবচেয়ে প্রতিযোগিতামূলক পরীক্ষাগুলোর একটি...",
      author: "Sabab Tahsin",
      date: "November 23, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/11/%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F-%E0%A6%AD%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%AA%E0%A6%B0%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0-%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A7%A7%E0%A7%A6%E0%A6%9F%E0%A6%BF-%E0%A6%9F%E0%A6%BF%E0%A6%AA%E0%A6%B8-min.jpg",
      link: "/blogs/1",
    },
    {
      id: 2,
      category: "Academic",
      title:
        "Home Tutor vs. Coaching Center: Which Is Better for Your Child?",
      description:
        "Education is the foundation of a bright future. When students need extra help in school...",
      author: "Sabab Tahsin",
      date: "October 22, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/10/Home-Tutor-vs.-Coaching-Center-min.jpg",
      link: "/blogs/2",
    },
    {
      id: 3,
      category: "Academic",
      title: "Traditional Education vs Modern Education",
      description:
        "Education is the key to a better future. But the way we learn has changed a lot over the years...",
      author: "Caretutors",
      date: "October 09, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/10/Traditional-Education-vs-Modern-Education-min.jpg",
      link: "/blogs/3",
    },
    {
      id: 4,
      category: "Academic",
      title: "How to Find Best Home Tutors for Your Child",
      description:
        "Finding the right home tutors for your child can make a big difference in their learning...",
      author: "Caretutors",
      date: "July 17, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/How-to-Find-Best-Home-Tutors-for-Your-Child-1-min.jpg",
      link: "/blogs/4",
    },
    {
      id: 5,
      category: "Academic",
      title:
        "Home Tutors vs. Online Tutors: Which One Is Best for Your Child?",
      description:
        "In today’s fast-paced landscape, parents are often faced with an important question...",
      author: "Caretutors",
      date: "June 22, 2025",
      image:
        "https://sgp1.digitaloceanspaces.com/cdn-caretutors/wp-content/uploads/2025/09/Home-Tutor-vs-Online-Tutor-1-min.jpg",
      link: "/blogs/5",
    },
  ];

  return (
   <div className="mt-40">
    <BlogNavbar></BlogNavbar>
     <div className="container px-22 mx-auto mt-10 mb-12">
      <h2 className="text-2xl font-bold mb-6">Academic</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            href={post.link}
            key={post.id}
            className="cursor-pointer group"
          >
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

            <div className="flex items-center gap-3 text-sm mt-2 text-gray-700">
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
