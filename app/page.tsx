import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= AURORA BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Purple Aurora */}
        <div className="aurora-one absolute -left-40 top-20 h-[600px] w-[700px] rounded-full bg-purple-700/15 blur-[150px]" />

        {/* Blue Aurora */}
        <div className="aurora-two absolute -right-40 top-[20%] h-[650px] w-[750px] rounded-full bg-indigo-600/10 blur-[170px]" />

        {/* Violet Aurora */}
        <div className="aurora-three absolute left-[10%] top-[50%] h-[600px] w-[700px] rounded-full bg-violet-700/10 blur-[170px]" />

        {/* Pink Aurora */}
        <div className="aurora-four absolute -right-20 bottom-[-150px] h-[600px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[180px]" />

        {/* Soft center light */}
        <div className="absolute left-1/2 top-[40%] h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/[0.03] blur-[150px]" />
      </div>

      {/* ================= ALL CONTENT ================= */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
        >
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
            {/* LEFT SIDE */}
            <div className="w-full text-center lg:w-[55%] lg:text-left">
              <p className="mb-4 text-lg font-medium uppercase tracking-[4px] text-purple-400 md:text-xl">
                Hi, I am
              </p>

              <h1 className="text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
                Tonima Islam
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Dristy
                </span>
              </h1>

              <p className="mt-6 text-xl font-medium text-gray-300 md:text-2xl">
                Computer Science & Engineering Graduate
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg lg:mx-0">
                Passionate about building modern web applications, exploring AI
                and machine learning, and turning creative ideas into real-world
                digital solutions.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#work"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/40"
                >
                  View My Work →
                </a>

                <a
                  href="#Contact"
                  className="rounded-full border border-purple-500/50 bg-white/5 px-7 py-3 font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10"
                >
                  Contact Me
                </a>
              </div>

              {/* Tech Tags */}
              <div className="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start">
                {[
                  "React.js",
                  "Next.js",
                  "NestJS",
                  "TypeScript",
                  "PostgreSQL",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md transition hover:border-purple-400/50 hover:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="flex w-full flex-col items-center gap-5 lg:w-[40%] lg:items-end">
              {/* Card 1 */}
              <div className="w-full max-w-md rounded-2xl border border-purple-400/20 bg-white/[0.07] p-6 shadow-2xl shadow-purple-900/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:bg-purple-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/20 text-xl">
                    💻
                  </div>

                  <h3 className="text-lg font-bold">Tech Expertise</h3>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  Experienced with React.js, Next.js, NestJS, HTML, CSS,
                  JavaScript, Tailwind CSS, PostgreSQL, RESTful APIs, and
                  Postman.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-full max-w-md translate-x-0 rounded-2xl border border-purple-400/20 bg-white/[0.07] p-6 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-purple-500/10 lg:translate-x-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/20 text-xl">
                    🤖
                  </div>

                  <h3 className="text-lg font-bold text-purple-400">
                    AI & Data Science
                  </h3>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  Passionate about AI, Data Science, Machine Learning, and
                  exploring intelligent applications and AI agent development.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-full max-w-md rounded-2xl border border-fuchsia-400/20 bg-white/[0.07] p-6 shadow-2xl shadow-fuchsia-900/20 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/20 text-xl">
                    ✨
                  </div>

                  <h3 className="text-lg font-bold">Creative Growth</h3>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  Interested in graphic design, UI/UX, modern technologies, and
                  continuously improving through real-world projects.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500 transition hover:text-purple-400 md:flex"
          >
            <span>Scroll to explore</span>
            <span className="animate-bounce text-lg">↓</span>
          </a>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about">
          <About />
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services">
          <Services />
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="work">
          <Projects />
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* ================= CONTACT ================= */}
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
