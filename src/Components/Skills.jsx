import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useMemo, useState } from 'react';

const SKILLS = [
  // --- Frontend
  { name: "HTML", note: "Advance", level: 5, category: "frontend" },
  { name: "CSS", note: "Advance", level: 4, category: "frontend" },
  { name: "JavaScript", note: "Intermediate", level: 4, category: "frontend" },
  { name: "React", note: "Intermediate", level: 3, category: "frontend" },
  { name: "VueJS", note: "Intermediate", level: 3, category: "frontend" },
  
  // --- Backend
  { name: "MongoDB", note: "Basic", level: 2, category: "backend" },
  { name: "MySQL", note: "Intermediate", level: 3, category: "backend" },

  // -- Others
  { name: "Canva", note: "Advance", level: 4, category: "others" },
  { name: "Photoshop", note: "Advance", level: 4, category: "others" },
  { name: "Microsoft 365 Tools", note: "Advance", level: 4, category: "others" },
  { name: "Capcut", note: "Advance", level: 4, category: "others" },

];

const TABS = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "others", label: "Others" },
];

function Skills() {

    const [active, setActive] = useState("all");
    const filtered = useMemo(() => {
    if (active === "all") return SKILLS;
    return SKILLS.filter((s) => s.category === active);
    }, [active]);

  return (
    <div>
        <section id="skills" className="py-20 dark:bg-[#0e1421] bg-[#f3f3f3] rounded-2xl text-gray-300 shadow-xl">
            <div className="max-w-6xl mx-auto px-6">
                <header className="text-center mb-10">
                    <h2 className="text-3xl font-bold dark:text-white text-green-500">My Skills</h2>
          <nav
            role="tablist"
            aria-label="Skill categories"
            className="mt-6 inline-flex flex-wrap justify-center gap-2 rounded-full dark:bg-white/5 p-1 bg-gray-200/50"
          >
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.key)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    isActive
                      ? "dark:bg-[#101a2a] bg-[#22c55e] dark:text-yellow-400 text-white ring-1 ring-green-500/30 dark:ring-yellow-400/30"
                      : "text-gray-400 dark:hover:text-yellow-400 hover:text-green-500"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => (
            <article
              key={skill.name}
              className="dark:bg-[#101a2a] bg-[#FFFFFF] shadow-lg rounded-xl p-5 border border-white/20 dark:hover:border-yellow-400 hover:border-green-800 hover:border-2 md:hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center gap-3 mb-1 lg:text-sm">
                <span className="inline-block w-3.5 h-3.5 rounded-md bg-gradient-to-b dark:from-yellow-400 dark:to-amber-300 from-green-500 to-emerald-300 shadow-inner" />
                <h3 className="dark:text-white text-gray-800/35 font-semibold">{skill.name}</h3>
              </div>

              {skill.note && (
                <p className="text-sm text-gray-500 mb-3">{skill.note}</p>
              )}

              <div
                className="flex gap-1.5"
                aria-label={`Proficiency: ${skill.level} out of 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i < skill.level ? "dark:bg-yellow-400 bg-green-400" : "dark:bg-white/25 bg-gray-300/60 "
                    }`}
                  />
                ))}
              </div>
            </article>
             ))}
            </div>
        </div>
        </section>
    </div>
  )
}
    
    export default Skills