import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';

import Image from '../Images/CroppedPic.png';
import CV from '../Assets/John_Averian_Oro_Resume.pdf';

import Skills from '../Components/Skills.jsx';
import BottomDock from '../Components/BottomDock.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Projects from '../Components/Projects.jsx';
import Services from '../Components/Services.jsx';
import ContactMe from '../Components/ContactMe.jsx';
import Experience from '../Components/Experience.jsx';
import FeaturedCaseStudy from '../Components/FeaturedCaseStudy.jsx';
import PixelNameTransition from '../Components/PixelNameTransition.jsx';

const CLIENTS = [
  {
    name: 'Alltomate',
    role: 'SEO, WordPress & Content Operations',
    description:
      'Supporting website growth through SEO-focused content production, internal linking, keyword research, content QA, and WordPress implementation.',
    tags: ['WordPress', 'Elementor', 'SEO', 'Content Strategy'],
  },
  {
    name: 'Dunrite',
    role: 'Digital & Creative Support',
    description:
      'Contributed to client-facing digital work with an emphasis on clean presentation, practical execution, and brand-aligned content.',
    tags: ['Creative Support', 'Digital Content', 'Design'],
  },
  {
    name: 'Junkshot',
    role: 'Digital & Creative Support',
    description:
      'Handled digital creative work designed to support the brand’s online presence and day-to-day marketing needs.',
    tags: ['Creative Support', 'Digital Content', 'Marketing'],
  },
];

function Homepage() {
  const [darkMode, setDarkMode] = useState(true);

  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = ((event.clientX - rect.left) / rect.width) * 100;
    const pointerY = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty('--pointer-x', `${pointerX}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${pointerY}%`);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BottomDock />
      <Sidebar />

      <main className="portfolio-shell min-h-screen px-6 transition-colors duration-300 sm:px-10 md:px-16 lg:px-28 xl:px-44 2xl:px-64">
        <section
          id="home"
          className="hero-atmosphere relative -mx-6 min-h-screen overflow-hidden px-6 flex flex-col sm:-mx-10 sm:px-10 md:-mx-16 md:px-16 lg:-mx-28 lg:px-28 xl:-mx-44 xl:px-44 2xl:-mx-64 2xl:px-64"
          onPointerMove={handleHeroPointerMove}
        >
          <div className="hero-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
          <div className="hero-pointer-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <nav className="relative z-10 py-8 sm:py-10 flex items-center justify-between">
            <a
              href="#home"
              className="text-lg font-bold tracking-[0.2em] text-gray-900 dark:text-white"
            >
              RAYN
            </a>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle light and dark mode"
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-200/80 bg-white/45 text-gray-700 backdrop-blur-md transition hover:border-green-500 hover:text-green-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-yellow-300 dark:hover:text-yellow-300"
            >
              <MdSunny className="text-xl" />
            </button>
          </nav>

          <div className="relative z-10 flex flex-1 items-center justify-center py-16 sm:py-24">
            <div className="max-w-4xl text-center">
              <p className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-green-600 dark:text-yellow-300">
                Web · Digital · Creative
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
                aria-label="John Averian Oro"
              >
                <PixelNameTransition />
              </h1>

              <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
                Web & Digital Specialist · Creative Technologist · 2D Animator
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
                I build, improve, and support digital experiences across web development,
                SEO and content operations, creative production, and 2D animation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/10 transition hover:bg-green-600 dark:bg-yellow-400 dark:text-gray-900 dark:shadow-yellow-400/10 dark:hover:bg-yellow-300"
                >
                  View My Work
                </a>

                <a
                  href={CV}
                  download="John_Averian_Oro_Resume"
                  className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-green-500 bg-white/30 px-6 py-3 font-semibold text-green-600 backdrop-blur-sm transition hover:bg-green-500 hover:text-white dark:border-yellow-300 dark:bg-white/[0.025] dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-gray-900"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-10 flex justify-center gap-6 text-2xl">
                <a
                  href="https://www.linkedin.com/in/john-averian-oro-b8ab41280/"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-gray-500 transition hover:text-green-500 dark:text-gray-400 dark:hover:text-yellow-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/Rayn2D"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="YouTube"
                  className="text-gray-500 transition hover:text-green-500 dark:text-gray-400 dark:hover:text-yellow-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://github.com/RaynGH"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-gray-500 transition hover:text-green-500 dark:text-gray-400 dark:hover:text-yellow-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full border border-green-500/20 dark:border-yellow-300/20" />
                <img
                  src={Image}
                  className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full object-cover border-2 border-green-500 shadow-xl dark:border-yellow-300"
                  alt="John Averian Oro"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
                About Me
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Creative thinking backed by technical execution.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-300">
                I’m a multidisciplinary digital professional with experience across web
                development, website operations, SEO-driven content work, technical
                support, and 2D animation. I enjoy work that sits between creativity and
                technology—whether that means improving a website, organizing content for
                better discoverability, solving a technical problem, or bringing a visual
                idea to life through animation.
              </p>
              <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-300">
                My goal is simple: create work that is useful, clear, polished, and built
                with the end user in mind.
              </p>
            </div>
          </div>
        </section>

        <section id="clients" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
                Selected Client Work
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Real work. Real responsibilities.
              </h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                A selection of brands I’ve supported across website operations, SEO,
                digital content, and creative execution.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {CLIENTS.map((client) => (
                <article
                  key={client.name}
                  className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#101a2a]/90"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-yellow-300">
                    Client
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {client.role}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {client.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-yellow-400/10 dark:text-yellow-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 sm:py-32">
          <Experience />
        </section>

        <section id="skills" className="py-24 sm:py-32">
          <Skills />
        </section>

        <section id="services" className="py-16 sm:py-24">
          <Services />
        </section>

        <section id="case-study" className="py-24 sm:py-32">
          <FeaturedCaseStudy />
        </section>

        <section id="projects" className="py-24 sm:py-32">
          <Projects />
        </section>

        <section
          id="contact"
          className="relative overflow-hidden py-24 sm:py-32 text-gray-800 dark:text-gray-300"
        >
          <div className="mx-auto max-w-7xl">
            <ContactMe />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
