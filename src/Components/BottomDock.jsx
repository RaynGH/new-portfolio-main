import { useEffect, useState } from 'react';
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaTools,
  FaUser,
} from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';

const ITEMS = [
  { id: 'home', icon: FaHome, label: 'Home' },
  { id: 'clients', icon: FaBriefcase, label: 'Client Work' },
  { id: 'about', icon: FaUser, label: 'About' },
  { id: 'skills', icon: FaTools, label: 'Skills' },
  { id: 'projects', icon: GrProjects, label: 'Projects' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact' },
];

function BottomDock() {
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
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    ITEMS.forEach(({ id }) => {
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
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-2xl border border-gray-200/80 bg-white/85 px-2 py-2 shadow-2xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#101a2a]/90"
      aria-label="Mobile portfolio navigation"
    >
      <ul className="grid grid-cols-6 gap-1">
        {ITEMS.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;

          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => goTo(id)}
                aria-label={label}
                aria-current={isActive ? 'location' : undefined}
                className={`relative flex min-h-12 w-full flex-col items-center justify-center rounded-xl border px-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-yellow-300 ${
                  isActive
                    ? 'border-green-500/25 bg-green-50 text-green-600 dark:border-yellow-300/25 dark:bg-yellow-300/10 dark:text-yellow-300'
                    : 'border-transparent text-gray-500 hover:bg-green-50 hover:text-green-600 dark:text-gray-400 dark:hover:bg-yellow-300/10 dark:hover:text-yellow-300'
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span className="mt-1 hidden text-[9px] font-medium leading-none xs:block sm:text-[10px]">
                  {label === 'Client Work' ? 'Clients' : label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default BottomDock;
