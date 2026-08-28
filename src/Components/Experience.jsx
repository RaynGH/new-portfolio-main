import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal.jsx';

const EXPERIENCE = [
  {
    period: 'Present',
    role: 'Tech Virtual Assistant',
    company: 'Alltomate · Dunrite · Junkshot',
    type: 'Current Role',
    description:
      'Support multiple client brands across website operations, SEO and content tasks, digital production, quality assurance, and day-to-day technical and creative execution.',
    highlights: ['Website operations', 'SEO & content', 'Digital production', 'Client support'],
  },
  {
    period: 'Aug 2024 — Jul 2025',
    role: '2D Pixel Animator',
    company: 'Trapsoul Games',
    type: 'Project-Based',
    description:
      'Created characters, animation work, and environmental effects while collaborating with clients to understand project requirements and creative goals.',
    highlights: ['2D pixel animation', 'Character design', 'Environmental effects', 'Client collaboration'],
  },
  {
    period: 'Feb 2024 — Aug 2024',
    role: 'IT Service Desk L1',
    company: 'PCTECH',
    type: 'Technical Support',
    description:
      'Provided first-line support through calls and email, created support tickets, and coordinated with technical teams to help resolve employee concerns.',
    highlights: ['L1 support', 'Ticket management', 'Email & call support', 'Team coordination'],
  },
  {
    period: 'Oct 2023 — Feb 2024',
    role: 'Customer Service Representative',
    company: 'Teleperformance',
    type: 'Retail Account',
    description:
      'Supported customers through chat with online order concerns and helped them identify suitable offers and product deals.',
    highlights: ['Chat support', 'Order assistance', 'Customer communication', 'Retail support'],
  },
];

function Experience() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    if (!timeline || !line) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      line.style.transform = 'scaleY(1)';
      return undefined;
    }

    line.style.transform = 'scaleY(0)';
    line.style.transformOrigin = 'top';

    let control;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        observer.disconnect();
        control = animate(
          line,
          { scaleY: [0, 1] },
          { duration: 1.15, delay: 0.1, easing: [0.22, 1, 0.36, 1] }
        );
      },
      { threshold: 0.12 }
    );

    observer.observe(timeline);

    return () => {
      observer.disconnect();
      control?.stop?.();
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <ScrollReveal className="mb-12 max-w-3xl">
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            A career built across support, technology, and creative work.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            My professional path has moved from customer support into technical support, creative production, and client-facing digital operations, building communication, problem-solving, and execution skills along the way.
          </p>
        </header>
      </ScrollReveal>

      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div ref={timelineRef} className="relative">
          <div
            ref={lineRef}
            className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-green-500/50 via-gray-200 to-transparent dark:from-yellow-300/40 dark:via-white/10"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((item, index) => (
              <ScrollReveal
                key={`${item.company}-${item.role}`}
                delay={0.12 + index * 0.1}
                distance={18}
              >
                <article className="relative pl-14">
                  <div className="experience-node absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-green-500/25 bg-white text-green-600 shadow-sm dark:border-yellow-300/25 dark:bg-[#101a2a] dark:text-yellow-300">
                    <FaBriefcase className="h-4 w-4" />
                  </div>

                  <div className="experience-motion-card rounded-2xl border border-gray-200 bg-white/75 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#101a2a]/85">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-yellow-300">
                          {item.type}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 font-medium text-gray-500 dark:text-gray-400">
                          {item.company}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-medium text-gray-400 dark:text-gray-500">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal x={28} distance={8} delay={0.18} className="lg:pt-2">
          <aside>
            <div className="education-motion-card rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#101a2a]/75">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-green-600 dark:bg-yellow-300/10 dark:text-yellow-300">
                <FaGraduationCap className="h-5 w-5" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-yellow-300">
                Education
              </p>
              <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-2 font-medium text-gray-500 dark:text-gray-400">
                STI College Munoz-EDSA
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                Jul 2017 — Aug 2023
              </p>
              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                Relevant coursework included computer programming and established the technical foundation behind my later web and digital work.
              </p>
            </div>
          </aside>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default Experience;
