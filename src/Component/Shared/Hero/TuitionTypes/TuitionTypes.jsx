'use client'
import React from 'react'

const items = [
  {
    id: 1,
    title: 'Home Tutoring',
    desc: 'Home tutoring allows students to learn various subjects in their own home.',
    icon: 'homeTeach'
  },
  {
    id: 2,
    title: 'Group Tutoring',
    desc: 'Group tutoring allows students to learn together and solve problems at an affordable cost.',
    icon: 'group'
  },
  {
    id: 3,
    title: 'Online Tutoring',
    desc: 'Hire the best tutors from anywhere and take online classes using tools like Google Meet, Zoom and more.',
    icon: 'online'
  },
  {
    id: 4,
    title: 'Package Tutoring',
    desc: 'Package tutoring helps students complete their studies within a specific time frame.',
    icon: 'package'
  },
  {
    id: 5,
    title: 'Shadow Tutoring',
    desc: 'The tutor will help the student manage school routine and simple daily needs.',
    icon: 'shadow'
  }
]

// small inline SVG icons (simple)
const Icon = ({ name }) => {
  const common = { width: 44, height: 44, className: 'stroke-current' }
  switch (name) {
    case 'homeTeach':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6">
          <path d="M3 10.5L12 4l9 6.5" />
          <path d="M9 22V12h6v10" />
        </svg>
      )
    case 'group':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6">
          <path d="M8 14c1.657 0 3-1.343 3-3S9.657 8 8 8s-3 1.343-3 3 1.343 3 3 3z"/>
          <path d="M20 14c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"/>
          <path d="M2 20c0-2.5 2-4.5 4.5-4.5h11c2.5 0 4.5 2 4.5 4.5"/>
        </svg>
      )
    case 'online':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6">
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
          <circle cx="9" cy="10" r="1.4" />
        </svg>
      )
    case 'package':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6">
          <path d="M12 2l7 4v8l-7 4-7-4V6z" />
          <path d="M12 22V12" />
        </svg>
      )
    case 'shadow':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6">
          <path d="M8 7a2 2 0 114 0 2 2 0 01-4 0z" />
          <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
        </svg>
      )
    default:
      return null
  }
}

export default function TuitionTypes() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Tuition Types</h2>

        {/* grid: 2 columns on lg, 1 on small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* left+right top two rows (4 items) */}
          {items.slice(0,4).map((it) => (
            <article
              key={it.id}
              className="flex items-center gap-6 border-2 border-blue-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name={it.icon} />
                </div>
              </div>

              <div>
                <h3 className="text-blue-600 font-semibold text-lg mb-2">{it.title}</h3>
                <p className="text-gray-500 leading-7 max-w-xl">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* bottom center card */}
        <div className="mt-8 flex justify-center">
          <div className="w-full lg:w-3/5">
            <article className="flex items-center gap-6 border-2 border-blue-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon name="shadow" />
                </div>
              </div>

              <div>
                <h3 className="text-blue-600 font-semibold text-lg mb-2">{items[4].title}</h3>
                <p className="text-gray-500 leading-7">{items[4].desc}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
