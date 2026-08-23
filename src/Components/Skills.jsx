import { useMemo, useState } from 'react';
import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaSearch,
  FaTools,
  FaWordpress,
} from 'react-icons/fa';

const SKILL_GROUPS = [
  {
    key: 'web',
    label: 'Web Development',
    icon: FaCode,
    summary:
      'Building and improving responsive web interfaces with modern front-end tools and practical development workflows.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Responsive Design'],
  },
  {
    key: 'wordpress',
    label: 'WordPress & Web Ops',
    icon: FaWordpress,
    summary:
      'Publishing, updating, and quality-checking production website content with an emphasis on usability and consistency.',
    skills: ['WordPress', 'Elementor', 'Content Implementation', 'Page QA', 'Internal Linking'],
  },
  {
    key: 'seo',
    label: 'SEO & Content',
    icon: FaSearch,
    summary:
      'Supporting organic growth through structured keyword research, on-page improvements, content planning, and internal linking.',
    skills: ['Keyword Research', 'On-Page SEO', 'Content Briefs', 'Internal Linking', 'Content QA'],
  },
  {
    key: 'data',
    label: 'Data & Backend',
    icon: FaDatabase,
    summary:
      'Working with databases and application data while maintaining a practical understanding of backend fundamentals.',
    skills: ['MySQL', 'MongoDB', 'SQL', 'Microsoft Access'],
  },
  {
    key: 'creative',
    label: 'Creative Production',
    icon: FaPalette,
    summary:
      'Creating digital visuals, motion work, and 2D animation for personal, client, and collaborative projects.',
    skills: ['Aseprite', 'Adobe Animate', 'After Effects', 'Photoshop', 'Canva', 'CapCut'],
  },
  {
    key: 'workflow',
    label: 'Productivity & Support',
    icon: FaTools,
    summary:
      'Using everyday productivity and troubleshooting tools to support teams, organize work, and solve operational issues.',
    skills: ['Microsoft 365', 'Google Sheets', 'Technical Support', 'Troubleshooting', 'Documentation'],
  },
];

const FILTERS = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'web', label: 'Web' },
  { key: 'seo', label: 'SEO' },
  { key: 'creative', label: 'Creative' },
  { key: 'workflow', label: 'Support' },
];

function Skills() {
  const [active, setActive] = useState('all');

  const filteredGroups = useMemo(() => {
    if (active === 'all') return SKILL_GROUPS;
    if (active === 'web') {
      return SKILL_GROUPS.filter((group) => ['web', 'wordpress', 'data'].includes(group.key));
    }
    return SKILL_GROUPS.filter((group) => group.key === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
          Skills & Tools
        </p>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Capabilities built through real projects and client work.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
          I work across development, website operations, SEO, creative production, and technical support.
          These are the areas and tools I use to turn ideas and tasks into practical digital work.
        </p>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Skill filters">
          {FILTERS.map((filter) => {
            const isActive = active === filter.key;

            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-yellow-300 ${
                  isActive
                    ? 'border-green-500 bg-green-500 text-white shadow-sm dark:border-yellow-300 dark:bg-yellow-300 dark:text-gray-900'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-green-500/40 hover:text-green-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:border-yellow-300/40 dark:hover:text-yellow-300'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              key={group.key}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-xl dark:border-white/10 dark:bg-[#101a2a] dark:hover:border-yellow-300/25"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-50 text-green-600 dark:bg-yellow-300/10 dark:text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {group.label}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {group.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
