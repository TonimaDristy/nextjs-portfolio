"use client";

import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");

  return (
    <section id="about" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2">
        {/* Text - Shows first on mobile, right side on desktop */}
        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get to know me
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>

          <p className="leading-8 text-gray-400">
            I am a Computer Science & Engineering graduate from American
            International University-Bangladesh (AIUB), passionate about
            building innovative projects and transforming ideas into real-world
            solutions through modern technologies and hands-on experimentation.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex gap-8">
            <button
              onClick={() => setActiveTab("skills")}
              className={`border-b-2 pb-2 text-lg font-semibold transition ${
                activeTab === "skills"
                  ? "border-purple-500 text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`border-b-2 pb-2 text-lg font-semibold transition ${
                activeTab === "education"
                  ? "border-purple-500 text-white"
                  : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              Education
            </button>
          </div>

          {/* Skills Content */}
          {activeTab === "skills" && (
            <div className="mt-8 space-y-5">
              <div>
                <h3 className="font-semibold text-purple-400">
                  Web Development
                </h3>
                <p className="mt-1 text-gray-400">
                  Next.js, React.js, NestJS, Node.js, PostgreSQL, Tailwind CSS,
                  HTML, CSS, JavaScript, and RESTful APIs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">
                  IoT & Embedded Systems
                </h3>
                <p className="mt-1 text-gray-400">
                  Developed Arduino and ESP32-based projects including a smart
                  billing system and a dual-axis solar tracking system.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">
                  AI & Data Science
                </h3>
                <p className="mt-1 text-gray-400">
                  Interested in AI, Machine Learning, data analysis,
                  visualization, and intelligent application development.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">
                  Computer Graphics
                </h3>
                <p className="mt-1 text-gray-400">
                  Developed interactive 2D graphics and animated cityscape
                  projects using C++ and OpenGL.
                </p>
              </div>
            </div>
          )}

          {/* Education Content */}
          {activeTab === "education" && (
            <div className="mt-8 space-y-5">
              <div>
                <h3 className="font-semibold text-purple-400">2022 – 2026</h3>
                <p className="mt-1 text-gray-400">
                  B.Sc. in Computer Science & Engineering, American
                  International University-Bangladesh (AIUB)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">2020</h3>
                <p className="mt-1 text-gray-400">
                  Higher Secondary Certificate (HSC), Police Lines School and
                  College, Rangpur
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">2018</h3>
                <p className="mt-1 text-gray-400">
                  Secondary School Certificate (SSC), Setabgonj Ideal Academy,
                  Dinajpur
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Image - Shows after text on mobile, left side on desktop */}
        <div className="order-2 md:order-1">
          <img
            src="/images/user.png.jpg"
            alt="Tonima Islam Dristy"
            className="mx-auto h-[420px] w-full rounded-2xl object-cover sm:h-[520px] sm:w-3/4 md:h-[690px]"
          />
        </div>
      </div>
    </section>
  );
}
