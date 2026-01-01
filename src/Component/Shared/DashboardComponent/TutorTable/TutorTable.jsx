"use client";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const initialTutors = [
  { id: 1, name: "Rafsan Ahmed", city: "Dhaka", subject: "Math", status: "pending" },
  { id: 2, name: "Hasan Ali", city: "Chittagong", subject: "Physics", status: "pending" },
  { id: 3, name: "Nusrat Jahan", city: "Sylhet", subject: "English", status: "approved" },
  { id: 4, name: "Mahmudul Hasan", city: "Rajshahi", subject: "Chemistry", status: "rejected" },
  { id: 5, name: "Tania Akter", city: "Khulna", subject: "Biology", status: "pending" },
];

export default function TutorTable() {
  const [tutors, setTutors] = useState(initialTutors);

  const updateStatus = (id, status) => {
    setTutors(tutors.map(t => (t.id === id ? { ...t, status } : t)));
  };

  const statusStyle = {
    pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    approved: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    rejected: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <div className="card col-span-2 p-6 overflow-hidden">
      <h3 className="font-semibold mb-4 text-lg dark:text-white">Tutor Requests</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className=" dark:bg-gray-900">
            <tr>
              <th className="p-3 text-left">Tutor</th>
              <th className="p-3 text-left hidden md:table-cell">City</th>
              <th className="p-3 text-left hidden lg:table-cell">Subject</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {tutors.map(t => (
              <tr
                key={t.id}
                className="
                  border-b border-gray-200 dark:border-gray-700
                  transition
                  hover:bg-blue-50 dark:hover:bg-blue-900
                  hover:text-gray-900 dark:hover:text-white
                "
              >
                <td className="p-3 font-medium">{t.name}</td>

                <td className="p-3 hidden md:table-cell">{t.city}</td>

                <td className="p-3 hidden lg:table-cell">{t.subject}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusStyle[t.status]}`}
                  >
                    {t.status}
                  </span>
                </td>

                <td className="p-3 flex justify-end gap-2">
                  <button
                    onClick={() => updateStatus(t.id, "approved")}
                    className="p-2 bg-green-500/90 hover:bg-green-600 text-white rounded-lg disabled:opacity-40 transition"
                    disabled={t.status === "approved"}
                  >
                    <FaCheck size={14} />
                  </button>

                  <button
                    onClick={() => updateStatus(t.id, "rejected")}
                    className="p-2 bg-red-500/90 hover:bg-red-600 text-white rounded-lg disabled:opacity-40 transition"
                    disabled={t.status === "rejected"}
                  >
                    <FaTimes size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
