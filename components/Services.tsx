import { Code2, Database } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Software Engineer Internship",
    description:
      "Currently working as a Software Engineer Intern at Mustaruusu Technology Asia, contributing to API integration, backend development, debugging, Git workflows, and responsive user interface development using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: Code2,
    title: "Web Development Internship",
    description:
      "Completed a Web Development internship at D Huda Tech UK Limited, where I built responsive and user-friendly interfaces, improved application performance, fixed bugs through testing, and integrated AI APIs such as OpenAI, Gemini, and Hugging Face.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-white/5 bg-black/40 px-6 py-24 text-white backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Professional Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">Experiences</h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            My professional experience has given me the opportunity to work with
            modern technologies, contribute to real-world projects, and
            strengthen my skills in software and web development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 shadow-xl shadow-purple-950/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.06] hover:shadow-2xl hover:shadow-purple-900/20 md:p-10"
              >
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

                {/* Icon */}
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
                  <Icon
                    size={28}
                    className="text-purple-400 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-5 text-base leading-8 text-gray-400 md:text-lg">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-8 h-[2px] w-12 rounded-full bg-purple-500/60 transition-all duration-500 group-hover:w-24 group-hover:bg-purple-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
