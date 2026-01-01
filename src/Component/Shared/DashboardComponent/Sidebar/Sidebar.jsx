"use client";
import { useState } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaUsers,
  FaCog,
  FaBars,
} from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "Tutors", icon: <FaUserGraduate /> },
  { label: "Guardians", icon: <FaUsers /> },
  { label: "Settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-[#1C2A53] text-white px-4 py-3 -z-100 ">
        <span className="font-bold text-lg">HireTutor</span>
        <button onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50
        h-screen w-64 bg-[#1C2A53] text-white
        transform transition-transform duration-300
        overflow-y-auto
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="p-6 text-xl font-bold border-b border-white/10">
          HireTutor Admin
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1">
          {menuItems.map(item => (
            <MenuItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={active === item.label}
              onClick={() => {
                setActive(item.label);
                setOpen(false);
              }}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-xs text-white/60 border-t border-white/10">
          © 2025 HireTutor
        </div>
      </aside>
    </>
  );
}

const MenuItem = ({ label, icon, active, onClick }) => (
  <div
    onClick={onClick}
    className={`group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
      ${
        active
          ? "bg-white text-[#1C2A53]"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }
    `}
  >
    <span className="text-lg">{icon}</span>
    <span className="font-medium">{label}</span>

    {/* Active dot */}
    {active && (
      <span className="ml-auto w-2 h-2 rounded-full bg-[#1C2A53]" />
    )}
  </div>
);
