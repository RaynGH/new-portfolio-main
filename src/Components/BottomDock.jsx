import { FaHome, FaUser, FaTools, FaEnvelope } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
function bottomDock() {
    const items = [
    { id: "home", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "skills", icon: FaTools, label: "Skills" },
    { id: "projects",  label: "Projects",  icon: GrProjects },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40
                    bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md px-3 py-2 shadow-xl">
      <ul className="flex items-center gap-3">
        {items.map(({ id, icon: Icon, label }) => (
          <li key={id}>
            <button
              onClick={() => goTo(id)}
              aria-label={label}
              className="w-11 h-11 grid place-items-center rounded-xl bg-green-800 dark:bg-[#101a2a] dark:text-gray-300 text-white dark:hover:text-yellow-400
              hover:text-green-300 transition"
            >
              <Icon className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default bottomDock;