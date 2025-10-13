import { React, useState, useMemo, useEffect} from 'react'
import { FaGlobe, FaTools, FaPencilRuler, FaPhotoVideo, FaVideo} from "react-icons/fa";

const SERVICES = [
    {
        id: "web-dev",
        title:  "Web Development",
        icon: FaGlobe,
        summary: "Modern, responsive websites and apps.",
        bullets: ["Responsive UI", "Frameworks", "API Integration"],
        tools: ["React", "Tailwind", "Vue", "Bootstrap"],
        timeline: "2-6 weeks",
        badge: "Popular",
    },
    {
        id: "it-support",
        title:  "IT Support Service",
        icon: FaTools,
        summary: "Setup, Troubleshooting, and Customer Support",
        bullets: ["PC Setup", "Monitoring", "Email setup"],
        tools: ["Windows", "M365", "Google Workspace"],
        timeline: "As needed",
    },
    {
        id: "uiux",
        title:  "UI/UX Design",
        icon: FaPencilRuler,
        summary: "Clean interfaces with delightful flows.",
        bullets: ["Wireframes", "Prototyping", "Design Systems"],
        tools: ["Figma", "Framer"],
        timeline: "1-3 weeks",
    },
    {
        id: "pixel-anim",
        title:  "Pixel Animation",
        icon: FaPhotoVideo,
        summary: "2D Pixel Animation for games & media.",
        bullets: ["Sprite Sheets", "VFX Loops", "Youtube"],
        tools: ["Aseprite", "After Effects", "Adobe Animate"],
        timeline: "1-4 weeks",
    },
    {
        id: "video-edit",
        title:  "Video Editing",
        icon: FaVideo,
        summary: "Professional editing for social media, marketing, and storytelling",
        bullets: ["Short-form Reels & Tiktoks", "Youtube Video Editing", "Color Grading & Sound Design"],
        tools: ["After Effects", "Premiere Pro", "Capcut"],
        timeline: "1-3 weeks",
    },
];

function Services() {

    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        const hash = new URLSearchParams(window.location.hash.replace("#", "?"));
        const id = hash.get("service");
        if(id) setOpenId(id);
    }, []);

    const service = useMemo(() => SERVICES.find(s => s.id === openId) || null,
        [openId]
    );

    
  return (
    <div>
         <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-8">
          <p className="dark:text-yellow-400 text-green-400 font-semibold">My Services</p>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-400/50">What I can Offer</h2>
        </header>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch auto-rows-[1fr]">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="relative h-full flex flex-col rounded-2xl dark:bg-[#0f2038] bg-[#f3f3f3] border border-white/10
              p-6 shadow-lg hover:shadow-xl dark:hover:border-yellow-400/30 hover:border-green-400/30 transition"
            >
              {s.badge && (
                <span className="absolute -top-2 -right-3 rounded-full dark:bg-yellow-400 bg-green-500 dark:text-[#0b1321] text-white text-xs font-semibold px-3 py-1 shadow">
                  {s.badge}
                </span>
              )}

              <div className="dark:text-yellow-400 text-green-500 text-4xl mb-4">
                <s.icon className="transition-transform group-hover:-translate-y-0.5" />
              </div>

              <h3 className="dark:text-white text-green-500 font-semibold text-lg">{s.title}</h3>
              <p className="dark:text-gray-300 text-gray-800 text-sm mt-1">{s.summary}</p>

              {/* quick bullets */}
              <ul className="mt-4 space-y-1 text-sm dark:text-gray-400 text-gray-800">
                {s.bullets.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full dark:bg-yellow-400/80 bg-green-400/80" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* tool chips + meta */}
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full dark:bg-white/5 border
                   dark:border-white/10 dark:text-gray-300 bg-green-500 text-white">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">Timeline: {s.timeline}</p>

              {/* actions */}
              <div className="mt-auto pt-6 flex items-center gap-3">
                <button
                  onClick={() => setOpenId(s.id)}
                  className="rounded-full border dark:border-yellow-400 px-4 py-2 
                  dark:text-yellow-300 text-sm dark:hover:bg-yellow-400 border-green-500 
                  text-green-800 hover:bg-green-500 dark:hover:text-[#101a2a] hover:text-white transition"
                >
                  Details
                </button>
                <a
                  href="#contact"
                  className="text-sm dark:text-gray-300 text-gray-800 dark:hover:text-yellow-400
                  hover:text-green-500"
                >
                  Start a project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* modal / drawer */}
      {service && (
        <ServiceDialog service={service} onClose={() => setOpenId(null)} />
      )}
    </section>

    </div>
  )
}


function ServiceDialog({ service, onClose}) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);   
    }, [onClose]);

    return (
         <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="svc-title"
        className="
          absolute left-1/2 -translate-x-1/2 w-[92%] max-w-3xl
          bottom-0 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2
          rounded-t-2xl sm:rounded-2xl
          dark:bg-[#0f2038] bg-[#f3f3f3] bg border border-white/10 shadow-xl p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="dark:text-yellow-400 text-green-400 text-3xl">
            <service.icon />
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-auto rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500 dark:hover:text-white hover:text-green-500"
          >
            Close
          </button>
        </div>

        <h3 id="svc-title" className="dark:text-white text-green-400 text-2xl font-semibold mt-2">
          {service.title}
        </h3>
        <p className="dark:text-gray-300 text-gray-800 mt-2">{service.summary}</p>

        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="dark:text-gray-200 text-gray-500 font-medium mb-2">What you get</h4>
            <ul className="space-y-2 dark:text-gray-300 text-gray-800 text-sm">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full dark:bg-yellow-400/80 bg-green-400/80" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="dark:text-gray-200 text-gray-400 font-medium mb-2">Details</h4>
            <p className="text-sm dark:text-gray-300 text-gray-800">
              Timeline: <span className="dark:text-gray-100 text-gray-400">{service.timeline}</span><br/>
              Stack: {service.tools.join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border dark:border-yellow-400 px-4 py-2 dark:text-yellow-300 
            text-sm dark:hover:bg-yellow-400 border-green-500 hover:bg-green-500 dark:hover:text-[#101a2a]
            hover:text-white transition"
          >
            Get a quote
          </a>
          <a
            href="#projects"
            className="text-sm dark:text-gray-300 text-gray-800 dark:hover:text-yellow-400 hover:text-green-400"
          >
            View related projects →
          </a>
        </div>
      </div>
    </div>
    );
}

export default Services