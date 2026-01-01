"use client";
import { useState } from "react";


import Sidebar from "@/Component/Shared/DashboardComponent/Sidebar/Sidebar";
import Topbar from "@/Component/Shared/DashboardComponent/Topbar/Topbar";

export default function AdminLayout({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""} >
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 mt-36 mb-20">
        <Sidebar />
        <div className="flex-1 flex flex-col">
        
          <Topbar dark={dark} setDark={setDark} />
          <main className="p-6 text-gray-800 dark:text-gray-100">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
