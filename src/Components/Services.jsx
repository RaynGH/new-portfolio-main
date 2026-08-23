import {
  FaCode,
  FaHeadset,
  FaPhotoVideo,
  FaSearch,
  FaVideo,
  FaWordpress,
} from 'react-icons/fa';

const EXPERTISE = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: FaCode,
    description:
      'Building and improving responsive interfaces with a focus on usability, structure, and maintainable front-end implementation.',
    outcomes: ['Responsive interfaces', 'Front-end implementation', 'UI improvements'],
  },
  {
    id: 'wordpress-operations',
    title: 'WordPress & Website Operations',
    icon: FaWordpress,
    description:
      'Supporting live websites through content implementation, Elementor updates, page QA, formatting, and ongoing site improvements.',
    outcomes: ['WordPress publishing', 'Elementor updates', 'Website QA'],
  },
  {
    id: 'seo-content',
    title: 'SEO & Content Operations',
    icon: FaSearch,
    description:
      'Helping websites become easier to discover and navigate through keyword research, content planning, internal linking, and on-page optimization.',
    outcomes: ['Keyword research', 'Internal linking', 'Content optimization'],
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    icon: FaHeadset,
    description:
      'Troubleshooting user and workplace technology issues with clear communication, documentation, and practical problem solving.',
    outcomes: ['Troubleshooting', 'Microsoft 365 support', 'User assistance'],
  },
  {
    id: 'animation',
    title: '2D & Pixel Animation',
    icon: FaPhotoVideo,
    description:
      'Creating sprite-based character animation, action sequences, effects, and motion work for games, media, and creative collaborations.',
    outcomes: ['Sprite animation', 'Character motion', 'Action choreography'],
  },
  {
    id: 'creative-production',
    title: 'Creative Production',
    icon: FaVideo,
    description:
      'Producing visual and short-form digital content that supports social media, marketing, presentations, and online brand communication.',
    outcomes: ['Digital graphics', 'Video editing', 'Social content'],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
            What I Do
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
            Technical execution with a creative edge.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400">
            My work sits across web, content, support, and creative production. That range lets me contribute not only to how something looks, but also to how it works, how it is maintained, and how people find and use it.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-green-500 px-5 py-2.5 text-sm font-semibold text-green-600 transition hover:bg-green-500 hover:text-white dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-gray-900"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {EXPERTISE.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-xl dark:border-white/10 dark:bg-[#101a2a] dark:hover:border-yellow-300/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-100 dark:bg-yellow-300/10 dark:text-yellow-300 dark:group-hover:bg-yellow-300/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-gray-300 dark:text-white/15">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 dark:bg-yellow-300" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;