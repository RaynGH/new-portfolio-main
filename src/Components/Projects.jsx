import { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';

import HomepageImg from '../Images/Homepage 1.png';
import OrdersImg from '../Images/Orders.png';
import ProductsImg from '../Images/Products.png';
import PepsimanVsKefla from '../Images/PepsimanVsKefla.jpg';
import GohanvsBlack from '../Images/GohanvsGokuBlack.jpg';
import FCvsB from '../Images/FriezaCellVsBroly.jpg';
import GokuvsBardock from '../Images/GokuVsBardock.jpg';
import SimpleLoginPage from '../Images/SimpleLoginPage.png';
import TodoApp from '../Images/Todoapp.png';
import SpicIllustration from '../Images/SpicloneArt.png';
import ocArt from '../Images/OCArt.png';
import gokuArt from '../Images/GokuArt.png';

const PROJECTS = [
  {
    title: 'Corumed — Homepage',
    category: 'development',
    img: HomepageImg,
    badge: 'Featured Project',
    featured: true,
    description:
      'A responsive e-commerce capstone interface focused on clear navigation, product discovery, and an approachable healthcare shopping experience.',
    stack: ['Web Design', 'Front-End', 'UI/UX'],
  },
  {
    title: 'Corumed — Products',
    category: 'development',
    img: ProductsImg,
    badge: 'Capstone Project',
    featured: true,
    description:
      'Product browsing interface created as part of the Corumed capstone project, with an emphasis on structured content and usability.',
    stack: ['Front-End', 'UI Design'],
  },
  {
    title: 'Corumed — Orders',
    category: 'development',
    img: OrdersImg,
    badge: 'Capstone Project',
    description:
      'Order-management interface designed to organize transaction information into a cleaner, easier-to-review workflow.',
    stack: ['Front-End', 'UI Design'],
  },
  {
    title: 'Simple Login Page',
    category: 'development',
    img: SimpleLoginPage,
    badge: 'Vue.js',
    description:
      'A focused Vue.js interface exercise exploring component structure, responsive layout, and form presentation.',
    stack: ['Vue.js', 'CSS'],
    repo: 'https://github.com/RaynGH/LoginPageVue',
  },
  {
    title: 'Todo App',
    category: 'development',
    img: TodoApp,
    badge: 'Vue.js',
    description:
      'A lightweight task-management project built to practice Vue.js state handling and everyday interface interactions.',
    stack: ['Vue.js', 'JavaScript'],
    repo: 'https://github.com/RaynGH/Todo-appVue',
  },
  {
    title: 'Gohan vs Goku Black',
    category: 'animation',
    img: GohanvsBlack,
    badge: '2D Animation',
    featured: true,
    description:
      'Sprite-based action animation focused on combat pacing, posing, impact, and character-driven movement.',
    stack: ['Sprite Animation', 'Action Choreography'],
    video: 'https://www.youtube.com/watch?v=e-2fx5O60rg',
  },
  {
    title: 'Frieza, Cell vs Broly',
    category: 'animation',
    img: FCvsB,
    badge: '2D Animation',
    featured: true,
    description:
      'A high-energy sprite animation combining multiple characters, effects, timing, and cinematic fight choreography.',
    stack: ['Sprite Animation', 'Effects'],
    video: 'https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s',
  },
  {
    title: 'Goku vs Bardock',
    category: 'animation',
    img: GokuvsBardock,
    badge: '2D Animation',
    description:
      'A character-versus-character animation built around readable action, transitions, and dramatic timing.',
    stack: ['Sprite Animation', 'Fight Choreography'],
    video: 'https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s',
  },
  {
    title: 'Pepsiman vs Kefla',
    category: 'animation',
    img: PepsimanVsKefla,
    badge: '2D Animation',
    description:
      'A stylized crossover animation combining humor, sprite work, and fast-paced action sequencing.',
    stack: ['Sprite Animation', 'Compositing'],
    video: 'https://www.youtube.com/watch?v=SXvjhHey3Nc&t=1s',
  },
  {
    title: 'Spiclone OC',
    category: 'illustration',
    img: SpicIllustration,
    badge: 'Illustration',
    description:
      'Original-character illustration exploring silhouette, costume design, and stylized character presentation.',
    stack: ['Character Design', 'Digital Art'],
  },
  {
    title: 'Original Character',
    category: 'illustration',
    img: ocArt,
    badge: 'Illustration',
    description:
      'Personal character artwork focused on shape language, expression, and visual identity.',
    stack: ['Character Design', 'Illustration'],
  },
  {
    title: 'Goku Illustration',
    category: 'illustration',
    img: gokuArt,
    badge: 'Illustration',
    description:
      'Fan illustration created as a study in stylized anatomy, rendering, and character expression.',
    stack: ['Illustration', 'Fan Art'],
  },
];

const TABS = [
  { key: 'featured', label: 'Featured' },
  { key: 'development', label: 'Development' },
  { key: 'animation', label: 'Animation' },
  { key: 'illustration', label: 'Illustration' },
  { key: 'all', label: 'All Work' },
];

function Projects() {
  const [active, setActive] = useState('featured');
  const [lightBox, setLightBox] = useState(null);

  const filteredProjects = useMemo(() => {
    if (active === 'all') return PROJECTS;
    if (active === 'featured') return PROJECTS.filter((project) => project.featured);
    return PROJECTS.filter((project) => project.category === active);
  }, [active]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightBox(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
          Selected Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Development, animation, and visual work.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
          A curated mix of technical and creative projects. Featured work appears first,
          while the filters let you explore each discipline in more detail.
        </p>

        <nav
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Project filters"
        >
          {TABS.map((tab) => {
            const isActive = active === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-yellow-300 ${
                  isActive
                    ? 'border-green-500 bg-green-500 text-white shadow-sm dark:border-yellow-300 dark:bg-yellow-300 dark:text-gray-900'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-green-500/40 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-yellow-300/40 dark:hover:text-yellow-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-[#101a2a] ${
              project.featured
                ? 'border-green-500/25 dark:border-yellow-300/20'
                : 'border-gray-200 dark:border-white/10'
            }`}
          >
            <button
              type="button"
              onClick={() => setLightBox({ img: project.img, title: project.title })}
              className="relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-500 dark:focus-visible:ring-yellow-300"
              aria-label={`Open preview: ${project.title}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-950/30">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                    project.category === 'illustration' ? 'object-contain' : 'object-cover'
                  }`}
                />
              </div>

              {project.featured && (
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-gray-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  Featured
                </span>
              )}
            </button>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-600 dark:text-yellow-300">
                    {project.badge}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {(project.repo || project.video) && (
                <div className="mt-auto flex items-center gap-4 pt-6">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-yellow-300"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </a>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-yellow-300"
                    >
                      <FaPlay className="h-3.5 w-3.5" />
                      Watch
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {lightBox && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightBox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview of ${lightBox.title}`}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightBox.img}
              alt={lightBox.title}
              className="mx-auto max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-gray-300">
              <span>{lightBox.title}</span>
              <button
                type="button"
                onClick={() => setLightBox(null)}
                className="rounded-full border border-white/20 px-4 py-2 font-medium transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
