import { Award, BadgeCheck, Languages } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "AI Workshop",
    organization: "Google Cloud",
    date: "2025",
    description:
      "Completed hands-on training on AI tools, automation workflows, and system visualization using modern AI technologies.",
    certificateLink: "/images/ai-certificate.jpg",
  },
  {
    icon: BadgeCheck,
    title: "Web Development Internship Certificate",
    organization: "D Huda Tech UK Limited",
    date: "2026",
    description:
      "Earned certification for completing an internship focused on frontend development, backend development, API integration, AI APIs, and real-world application development.",
    certificateLink: "/images/web dev certificate.JPG",
  },
  {
    icon: Languages,
    title: "IELTS Masterclass",
    organization: "Certificate of Participation",
    date: "2025",
    description:
      "Completed an IELTS Masterclass focused on improving English communication, academic writing, and speaking skills for professional and international environments.",
    certificateLink: "/images/Ielts.png",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-white/5 bg-black/40 px-6 py-24 text-white backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Achievements
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">Certifications</h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Certifications and professional learning experiences that complement
            my technical skills and academic background.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => {
            const Icon = certificate.icon;

            return (
              <div
                key={certificate.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 shadow-xl shadow-purple-950/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.05] hover:shadow-2xl hover:shadow-purple-900/30"
              >
                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
                  <Icon
                    size={28}
                    className="text-purple-400 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-purple-300">
                  {certificate.title}
                </h3>

                {/* Organization */}
                <p className="relative mt-3 text-sm font-medium text-purple-400">
                  {certificate.organization}
                </p>

                {/* Date */}
                <p className="relative mt-1 text-sm text-gray-500">
                  {certificate.date}
                </p>

                {/* Description */}
                <p className="relative mt-5 leading-7 text-gray-400">
                  {certificate.description}
                </p>

                {/* View Certificate */}
                {certificate.certificateLink !== "#" && (
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-7 inline-flex items-center rounded-lg border border-purple-500/30 bg-purple-500/[0.08] px-5 py-2.5 text-sm font-medium text-purple-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-900/30"
                  >
                    View Certificate
                  </a>
                )}

                {/* Bottom Accent */}
                <div className="relative mt-7 h-[2px] w-10 rounded-full bg-purple-500/50 transition-all duration-500 group-hover:w-20 group-hover:bg-purple-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
