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
    <section id="services" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Professional Journey
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">Experiences</h2>

        {/* Experience Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group min-h-[350px] rounded-2xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-950/30"
              >
                <Icon
                  size={50}
                  className="mb-8 text-purple-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
