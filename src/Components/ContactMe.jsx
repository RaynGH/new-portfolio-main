import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactMe() {
  const [status, setStatus] = useState('idle');

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...Object.fromEntries(formData),
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-[#0d1726]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-yellow-300">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                Have a project, role, or collaboration in mind?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-gray-600 dark:text-gray-400">
                I’m open to opportunities across web, digital operations, creative work, and animation. Share what you’re working on and I’ll be glad to connect.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:guetaryan@gmail.com"
                className="group flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-yellow-300"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-green-600 shadow-sm dark:bg-white/5 dark:text-yellow-300">
                  <FaEnvelope className="h-4 w-4" />
                </span>
                guetaryan@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/john-averian-oro-b8ab41280/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-yellow-300"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-green-600 shadow-sm dark:bg-white/5 dark:text-yellow-300">
                  <FaLinkedin className="h-4 w-4" />
                </span>
                LinkedIn
              </a>

              <a
                href="https://github.com/RaynGH"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-yellow-300"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-green-600 shadow-sm dark:bg-white/5 dark:text-yellow-300">
                  <FaGithub className="h-4 w-4" />
                </span>
                GitHub
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12 dark:border-white/10 dark:bg-[#101a2a]">
            <form
              name="portfolio-contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="portfolio-contact" />

              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-yellow-300 dark:focus:ring-yellow-300/10"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-yellow-300 dark:focus:ring-yellow-300/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me a little about the opportunity or project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-yellow-300 dark:focus:ring-yellow-300/10"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-200"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Usually easiest to reach me by email.
                </p>
              </div>

              {status === 'success' && (
                <p
                  className="mt-5 rounded-xl border border-green-500/20 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300"
                  role="status"
                >
                  Thanks — your message was sent successfully.
                </p>
              )}

              {status === 'error' && (
                <p
                  className="mt-5 rounded-xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300"
                  role="alert"
                >
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="pb-24 pt-8 text-center text-sm text-gray-400 lg:pb-8 dark:text-gray-600">
        <p>© {new Date().getFullYear()} John Averian Oro. Built with React.</p>
      </footer>
    </div>
  );
}

export default ContactMe;
