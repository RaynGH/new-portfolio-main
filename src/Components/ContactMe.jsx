import React, { useState } from "react";
import { MdMail} from "react-icons/md";
function ContactMe() {
  const [status, setStatus] = useState("idle");

  // return the encoded string and close the function
  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...Object.fromEntries(formData),
        }),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-green-500 dark:text-yellow-400 mb-10">Get in touch</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 text-justify">
            I’d love to hear about{" "}
            <span className="dark:text-yellow-400 text-green-400 font-medium">opportunities</span>,
            collaborations, or projects you’re passionate about.
            Let’s connect and build something amazing together.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <form
          name="portfolio-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="dark:bg-[#101a2a] bg-green-500 border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <input type="hidden" name="form-name" value="portfolio-contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm dark:text-gray-400 text-white mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl dark:bg-transparent bg-white border border-green-500 dark:border-yellow-500
                  dark:focus:border-yellow-400/40 focus:border-green-400/40 dark:focus:ring-yellow-400/20
                focus:ring-green-500/20  text-gray-900 dark:text-white px-4 py-3 outline-none placeholder:text-gray-500/50"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm dark:text-gray-400 text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl dark:bg-transparent bg-white border border border-green-500  dark:border-yellow-500
                 dark:focus:border-yellow-400/40 focus:border-green-400/40 dark:focus:ring-yellow-400/20
                focus:ring-green-500/20 text-gray-900 dark:text-white px-4 py-3 outline-none placeholder:text-gray-500/50"
                placeholder="jane@company.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm dark:text-gray-400 text-white mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl dark:bg-transparent bg-white border border-green-500  dark:border-yellow-500
                dark:focus:border-yellow-400/40 focus:border-green-400/40 dark:focus:ring-yellow-400/20
                focus:ring-green-500/20 text-gray-900 dark:text-white px-4 py-3 outline-none placeholder:text-gray-500/50"
              placeholder="Write your message here…"
            />
          </div>

          <div className="mt-6 flex items-center gap-3 flex-col sm:flex-row text-center sm:text-left">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center bg-emerald-600 dark:bg-transparent rounded-full border dark:border-yellow-400 border-green-300 px-5 py-2.5
                dark:text-yellow-300 text-white font-medium dark:hover:bg-yellow-400 hover:bg-green-800 hover:text-[#FFFFFF]
                 dark:hover:text-white transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <a
              href="mailto:guetaryan@gmail.com"
              className="text-sm dark:text-gray-400 text-white dark:hover:text-yellow-400 hover:text-green-200"
            >
              or email me directly → guetaryan@gmail.com
            </a>
          </div>

          {status === "success" && (
            <p className="mt-4 text-green-400">Thanks! Your message was sent.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400">
              Something went wrong. Please try again or use the email link.
            </p>
          )}
        </form>
        <footer>
            <p>	&#169; John Averian Oro 2025.</p>
        </footer>
      </div>
  );
}

export default ContactMe;
