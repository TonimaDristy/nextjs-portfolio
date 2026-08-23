"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-24 text-white">
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
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Let&apos;s Talk</h3>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas,
              opportunities, or ways we can work together.
            </p>

            {/* Contact Information */}
            <div className="mt-8 space-y-6">
              {/* Email */}
              <a
                href="mailto:your.email@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <Mail
                    size={22}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="mt-1 text-gray-300 transition group-hover:text-purple-400">
                    dristytonima@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801767022650"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <Phone
                    size={22}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p className="mt-1 text-gray-300 transition group-hover:text-purple-400">
                    +880 1767022650
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
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

              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/TonimaDristy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Send Me a Message</h3>

            <form className="mt-6 space-y-5">
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
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
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
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
