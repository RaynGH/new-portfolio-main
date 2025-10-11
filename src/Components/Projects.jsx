import { React, useState, useMemo, useEffect} from 'react'
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import CorumedImg from '../Images/corumed.png';
import HomepageImg from '../Images/Homepage 1.png';
import OrdersImg from '../Images/Orders.png';
import ProductsImg from '../Images/Products.png';
import CartImg from '../Images/Cart.png';
import PepsimanVsKefla from '../Images/PepsimanVsKefla.jpg';
import GohanvsBlack from '../Images/GohanvsGokuBlack.jpg';
import FCvsB from '../Images/FriezaCellVsBroly.jpg';
import GokuvsBardock from '../Images/GokuVsBardock.jpg';
import SimpleLoginPage from '../Images/SimpleLoginPage.png';
import TodoApp from '../Images/Todoapp.png';
import SpicIllustration from '../Images/SpicloneArt.png';
import HaeInIllustration from '../Images/HaeInArt.png';
import ocArt from '../Images/OCArt.png';
import gokuArt from '../Images/GokuArt.png';
import matcha from '../Images/Matcha_Wife.png';

const PROJECTS = [
    //Capstone Project 
    {
        title: "Corumed - HomePage",
        category: "web",
        img: HomepageImg,
        badge: "Capstone Project", 
    },
    {
        title: "Corumed - Products Page",
        category: "web",
        img: ProductsImg,
        badge: "Capstone Project", 
    },
    {
        title: "Corumed - Orders Page",
        category: "web",
        img: OrdersImg,
        badge: "Capstone Project", 
    },
    {
        title: "Simple Login Page (VueJS)",
        category: "web",
        img: SimpleLoginPage,
        badge: "web",
        repo:  "https://github.com/RaynGH/LoginPageVue",
    },
    {
        title: "Todo App (VueJS)",
        category: "web",
        img: TodoApp,
        badge: "web",
        repo:  "https://github.com/RaynGH/Todo-appVue",
    },
    //Animations
    {
        title: "Gohan vs Goku Black",
        category: "animation",
        img: GohanvsBlack,
        video: "https://www.youtube.com/watch?v=e-2fx5O60rg",
        badge: "2D Animation", 
    },
    {
        title: "Frieza, Cell, vs Broly",
        category: "animation",
        img: FCvsB,
        video: "https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s",
        badge: "2D Animation", 
    },
    {
        title: "Goku vs Bardock",
        category: "animation",
        img: GokuvsBardock,
        video: "https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s",
        badge: "2D Animation", 
    },
    {
        title: "Pepsiman vs Kefla",
        category: "animation",
        img: PepsimanVsKefla,
        video: "https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s",
        badge: "2D Animation", 
    },
    
    //Illustrations
     {
        title: "Spiclone OC",
        category: "other",
        img: SpicIllustration,
        badge: "Illustration", 
    },
    {
        title: "Matcha OC",
        category: "other",
        img: matcha,
        badge: "Illustration", 
    },
    {
        title: "OC",
        category: "other",
        img: ocArt,
        badge: "Illustration", 
    },
    {
        title: "Goku",
        category: "other",
        img: gokuArt,
        badge: "Illustration", 
    },
]

const TABS = [
    {
        key: "all", label: "All"
    },
    {
        key: "web", label: "Web"
    },
    {
        key: "animation", label: "Animations"
    },
    {
        key: "other", label: "Others"
    },
]

function Projects() {

    const [active, setActive] = useState("all");
    const [lightBox, setLightBox] = useState(null);

    const filtered = useMemo (() => {
        if (active === "all") 
            return PROJECTS;
        return PROJECTS.filter(p => p.category === active);
    }, [active])

    useEffect(() => {
        
        const onKey = (e) => e.key === "Escape" && setLightBox(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

  return (
    <div>
        <section id="projects" className="py-20 dark:bg-[#0e1421] bg-[#f3f3f3] text-gray-300 rounded-2xl shadow-xl">
          <div className="max-w-6xl mx-auto px-6">
            <header className="text-center mb-8">
              <h2 className="text-3xl font-bold dark:text-white text-green-500">Projects</h2>
              <p className="text-gray-400 mt-2">User interfaces & 2D animation work.</p>

              {/* Tabs */}
              <nav className="mt-6 inline-flex flex-wrap justify-center gap-2 rounded-full dark:bg-white/5 p-1 bg-gray-200/50">
                {TABS.map(t => {
                  const isActive = active === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActive(t.key)}
                      className={`px-4 py-2 rounded-full text-sm transition
                        ${isActive
                          ? "dark:bg-[#101a2a] bg-[#22c55e] dark:text-yellow-400 text-white ring-1 ring-green-500/30 dark:ring-yellow-400/30"
                          : "text-gray-400 dark:hover:text-yellow-400 hover:text-green-500"}`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </nav>
            </header>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <article
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl dark:bg-[#101a2a] bg-[#FFFFFF]  border border-white/20 dark:hover:border-yellow-400/40 hover:border-green-800 transition shadow-lg"
                >
                  <button
                    onClick={() => setLightBox({ img: p.img, title: p.title })}
                    className="block w-full"
                    aria-label={`Open preview: ${p.title}`}
                  >
                    <div className="relative w-full overflow-hidden rounded-t-2xl">
                      <img
                        src={p.img}
                        alt={p.title}
                            className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105
                            ${p.category === "others" ? "object-contain bg-[#0e1421]" : "object-cover"}`}
                      />
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="dark:text-white text-gray-800/35 text-[13px] font-semibold">{p.title}</p>
                      {p.badge && (
                        <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full dark:bg-yellow-400/15 bg-green-400/15 dark:text-yellow-300 text-green-500 border dark:border-yellow-400/30
                        border-green-400/30">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-3 flex items-center gap-3">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-sm dark:text-gray-300 dark:hover:text-yellow-400 transition text-gray-800"
                        >
                          <FaGithub className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {p.video && (
                        <a
                          href={p.video}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-sm dark:text-gray-300 dark:hover:text-yellow-400 transition text-gray-800"
                        >
                          <FaPlay className="w-4 h-4" />
                          Watch
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </article>
              ))}
            </div>
          </div>

          {/* Lightbox modal */}
          {lightBox && (
            <div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4"
              onClick={() => setLightBox(null)}
              role="dialog" aria-modal="true"
            >
              <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <img src={lightBox.img} alt={lightBox.title}  className="max-h-[90vh] w-auto max-w-full mx-auto rounded-xl object-contain" />
                <div className="mt-2 text-center text-sm text-gray-300">{lightBox.title}</div>
              </div>
            </div>
          )}
        </section>
    </div>
  )
}

export default Projects