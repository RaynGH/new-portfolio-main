import { FaCheckCircle, FaSearch, FaSitemap, FaWordpress } from 'react-icons/fa';

const CONTRIBUTIONS = [
  {
    icon: FaSearch,
    title: 'SEO & Keyword Research',
    description:
      'Researched keywords, reviewed search intent, checked page overlap, and helped shape content briefs for new and existing pages.',
  },
  {
    icon: FaSitemap,
    title: 'Internal Linking & Content Architecture',
    description:
      'Reviewed relationships between service, solution, integration, guide, blog, comparison, and case-study pages to strengthen useful internal paths.',
  },
  {
    icon: FaWordpress,
    title: 'WordPress Implementation',
    description:
      'Prepared and refined production-ready content for WordPress and Elementor, including page structure, calls to action, related resources, and QA.',
  },
];

const DELIVERABLES = [
  'Integration and platform pages',
  'Case-study refinement and interlinking',
  'Solution and service content support',
  'SEO titles, metadata, and content briefs',
  'Keyword coverage and cannibalization checks',
  'Content QA and technical-claim review',
];

function FeaturedCaseStudy() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/75 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#101a2a]/85">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-gray-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12 dark:border-white/10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
              Featured Case Study
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                Alltomate
              </h2>
              <span className="rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:border-yellow-300/20 dark:bg-yellow-300/10 dark:text-yellow-300">
                SEO · WordPress · Content Operations
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold leading-snug text-gray-900 dark:text-white">
              Supporting a growing automation website through structured content, SEO, and production QA.
            </h3>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              My work with Alltomate spans research, page planning, content refinement, internal linking, and WordPress implementation. The focus is not simply publishing more pages—it is making sure each page has a clear purpose, fits the site architecture, and connects naturally to related resources.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
              Because this work is ongoing and performance data is not presented here, this case study focuses on responsibilities, process, and deliverables rather than unsupported ranking, traffic, or revenue claims.
            </p>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              What I Contributed
            </p>

            <div className="mt-6 space-y-6">
              {CONTRIBUTIONS.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-50 text-green-600 dark:bg-yellow-300/10 dark:text-yellow-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 border-t border-gray-200 pt-7 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                Representative Deliverables
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DELIVERABLES.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-300"
                  >
                    <FaCheckCircle className="mt-1 h-3.5 w-3.5 shrink-0 text-green-500 dark:text-yellow-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCaseStudy;
