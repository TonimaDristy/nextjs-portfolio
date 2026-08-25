"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzll7wOMtERJa3chSrx1oNG6esgJyNNa2ekK2juxh5JeVy5JYKEo-L83sqExyCi5eTZkw/exec";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setMessageSent(false);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form),
      });

      setMessageSent(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-black/40 px-6 py-24 text-white backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">Contact Me</h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a project idea, job opportunity, or just want to say hello?
            Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 shadow-xl shadow-purple-950/10 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-500/[0.05] hover:shadow-2xl hover:shadow-purple-900/20 md:p-10">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <h3 className="text-2xl font-semibold">Let&apos;s Talk</h3>

              <p className="mt-4 leading-7 text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas,
                opportunities, or ways we can work together.
              </p>

              {/* Contact Information */}
              <div className="mt-8 space-y-6">
                {/* Email */}
                <a
                  href="mailto:dristytonima@gmail.com"
                  className="group/item flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <Mail
                      size={22}
                      className="text-purple-400 transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>

                    <p className="mt-1 text-gray-300 transition duration-300 group-hover/item:text-purple-400">
                      dristytonima@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+8801767022650"
                  className="group/item flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <Phone
                      size={22}
                      className="text-purple-400 transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Phone</p>

                    <p className="mt-1 text-gray-300 transition duration-300 group-hover/item:text-purple-400">
                      01767022650
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <MapPin size={22} className="text-purple-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>

                    <p className="mt-1 text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="mb-4 text-sm font-semibold text-gray-300">
                  Connect with me
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/tonima-dristy650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/TonimaDristy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.facebook.com/TI.Dristy.33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              {/* Download CV */}
              <a
                href="/CV.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-purple-900/40"
              >
                Download CV
                <Download size={18} />
              </a>

              {/* Bottom Accent */}
              <div className="mt-8 h-[2px] w-12 rounded-full bg-purple-500/50 transition-all duration-500 group-hover:w-24 group-hover:bg-purple-400" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 shadow-xl shadow-purple-950/10 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-500/[0.05] hover:shadow-2xl hover:shadow-purple-900/20 md:p-10">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <h3 className="text-2xl font-semibold">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="Name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:bg-purple-500/[0.04] focus:ring-1 focus:ring-purple-500/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:bg-purple-500/[0.04] focus:ring-1 focus:ring-purple-500/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="Message"
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:bg-purple-500/[0.04] focus:ring-1 focus:ring-purple-500/30"
                  />
                </div>

                {/* Success Message */}
                {messageSent && (
                  <p className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    Message sent successfully! Thank you for contacting me.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-purple-900/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}

                  {!isSending && (
                    <Send
                      size={18}
                      className="transition-transform duration-300"
                    />
                  )}
                </button>
              </form>

              {/* Bottom Accent */}
              <div className="mt-8 h-[2px] w-12 rounded-full bg-purple-500/50 transition-all duration-500 group-hover:w-24 group-hover:bg-purple-400" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2026-Designed & Developed by Tonima Islam Dristy • Built with
            Next.js, React & Tailwind CSS.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
