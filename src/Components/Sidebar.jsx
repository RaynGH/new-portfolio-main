import { useEffect, useState } from "react";
import { FaHome, FaUser, FaTools, FaEnvelope} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";


const SECTIONS = [
  { id: "home",    label: "Home",    icon: FaHome },
  { id: "about",   label: "About",   icon: FaUser },
  { id: "skills",  label: "Skills",  icon: FaTools },
  { id: "projects",  label: "Projects",  icon: GrProjects },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

function Sidebar() {

    const [active, setActive] = useState("home");
    useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 } 
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
    return (
        <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col justify-between gap-4 z-40"
      aria-label="Floating navigation"
    >
      <nav className="border border-gray-700/25 rounded-2xl p-2 backdrop-blur-md shadow-xl">
        <ul className="flex flex-col gap-2">
          {SECTIONS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => goTo(id)}
                  aria-label={label}
                  className={[
                    "group relative flex items-center justify-center w-11 h-11 rounded-xl",
                    "transition border",
                    isActive
                      ? " dark:border-yellow-400/40  dark:text-yellow-400 text-green-500 "
                      : "dark:bg-[#101a2a] bg-green-800 border-white/10 dark:text-gray-400 text-white dark:hover:text-yellow-400 dark:hover:border-yellow-400/30 hover:text-green-300 hover:border-green-800/30"

                  ].join(" ")}
                >
                  <Icon className="w-5 h-5" />
                  <span className="pointer-events-none absolute left-[3.1rem] whitespace-nowrap text-xs rounded-md px-2 py-1 dark:bg-[#101a2a] text-gray-800 border border-white/10 opacity-0 group-hover:opacity-100 transition">
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
