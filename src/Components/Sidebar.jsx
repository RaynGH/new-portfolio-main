import { useEffect, useState } from 'react';
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaTools,
  FaUser,
} from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';

const SECTIONS = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'clients', label: 'Client Work', icon: FaBriefcase },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaTools },
  { id: 'projects', label: 'Projects', icon: GrProjects },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

function Sidebar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActive(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside
      className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:left-7"
      aria-label="Portfolio navigation"
    >
      <nav className="rounded-2xl border border-gray-200/80 bg-white/80 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#101a2a]/80">
        <ul className="flex flex-col gap-1.5">
          {SECTIONS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;

            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => goTo(id)}
                  aria-label={label}
                  aria-current={isActive ? 'location' : undefined}
                  className={`group relative grid h-11 w-11 place-items-center rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-yellow-300 ${
                    isActive
                      ? 'border-green-500/30 bg-green-50 text-green-600 shadow-sm dark:border-yellow-300/30 dark:bg-yellow-300/10 dark:text-yellow-300'
                      : 'border-transparent text-gray-500 hover:border-green-500/20 hover:bg-green-50 hover:text-green-600 dark:text-gray-400 dark:hover:border-yellow-300/20 dark:hover:bg-yellow-300/10 dark:hover:text-yellow-300'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />

                  <span className="pointer-events-none absolute left-[3.35rem] z-50 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 opacity-0 shadow-lg transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100 dark:border-white/10 dark:bg-[#101a2a] dark:text-gray-200">
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
}

export default Sidebar;