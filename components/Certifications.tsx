import { Award, BadgeCheck, Languages } from "lucide-react";
const certifications = [
  {
    icon: Award,
    title: "AI Workshop",
    organization: "Google Cloud",
    date: "2025",
    description:
      "Completed hands-on training on AI tools, automation workflows, and system visualization using modern AI technologies.",
  },
  {
    icon: BadgeCheck,
    title: "Web Development Internship Certificate",
    organization: "D Huda Tech UK Limited",
    date: "2026",
    description:
      "Earned certification for completing an internship focused on frontend development, backend development, API integration, AI APIs, and real-world application development.",
  },
  {
    icon: Languages,
    title: "IELTS Masterclass",
    organization: "Certificate of Participation",
    date: "2025",
    description:
      "Completed an IELTS Masterclass focused on improving English communication, academic writing, and speaking skills for professional and international environments.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Achievements
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">Certifications</h2>

        {/* Certification Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => {
            const Icon = certificate.icon;

            return (
              <div
                key={certificate.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-950/20 hover:shadow-xl hover:shadow-purple-900/20"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
                  <Icon
                    size={30}
                    className="text-purple-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">{certificate.title}</h3>

                {/* Organization */}
                <p className="mt-3 text-sm font-medium text-purple-400">
                  {certificate.organization}
                </p>

                {/* Date */}
                <p className="mt-1 text-sm text-gray-500">{certificate.date}</p>

                {/* Description */}
                <p className="mt-5 leading-7 text-gray-400">
                  {certificate.description}
                </p>

                {/* Button */}
                <button
                  type="button"
                  className="mt-6 rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition hover:bg-purple-500 hover:text-white"
                >
                  View Certificate
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
