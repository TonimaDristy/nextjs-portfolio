import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UniShare – University Resource Sharing Platform",
    description:
      "A full-stack platform for sharing academic resources with role-based access. Built with Next.js, React, Tailwind CSS, NestJS, Node.js, and PostgreSQL.",
    image: "/images/Unishare.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "NestJS", "PostgreSQL"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "Luminary – School Web Application",
    description:
      "A responsive full-stack school management website with role-based login, user authentication, and admissions management using PHP and MySQL.",
    image: "/images/schoolweb.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    link: "https://github.com/TonimaDristy/School-Web",
  },

  {
    title: "Trip Planner – Travel Agency Web App",
    description:
      "A responsive travel booking web application featuring Home, Tours, About, Contact, and Login/Signup pages with clean UI and smooth Next.js routing.",
    image: "/images/Trip.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://tripplanner-44da7c.netlify.app/",
  },

  {
    title: "Tangible User Interface (TUI)",
    description:
      "An HCI-based smart billing system using tangible interaction, automatic weight sensing, image-based product detection, and real-time price calculation.",
    image: "/images/Tui.jpeg",
    technologies: ["Arduino", "ESP32", "HCI"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "Movie Discovery Web App",
    description:
      "A responsive movie discovery application using React, Tailwind CSS, and the OMDb API with movie search, IMDb ratings, release dates, loading states, and error handling.",
    image: "/images/Movie.png",
    technologies: ["React", "Tailwind CSS", "OMDb API"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "Dual Axis Solar Tracking System",
    description:
      "An Arduino-based solar tracking system using light sensors to automatically rotate the solar panel toward the sun, with an LCD showing the real-time charge level.",
    image: "/images/Micro.jpg",
    technologies: ["Arduino", "IoT", "Embedded Systems"],
    link: "https://drive.google.com/",
  },

  {
    title: "EatUp – Food Delivery App",
    description:
      "A frontend food delivery application featuring an interactive menu, Add to Cart functionality, local storage cart management, order tracking, and responsive UI/UX.",
    image: "/images/Eatup.jpeg",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "Data Science – Iris Dataset Analysis",
    description:
      "Conducted data preprocessing, visualization, and analysis on the Iris dataset using R, including plots, boxplots, and statistical summaries.",
    image: "/images/Data Science.jpeg",
    technologies: ["R", "Data Science", "Data Visualization"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "Colorful 2D Cityscape",
    description:
      "Built a full 2D city scene using C++ and OpenGL with moving cars, trees, buildings, a river, smooth animations, and dynamic car speed controls.",
    image: "/images/Graphics.png",
    technologies: ["C++", "OpenGL", "Computer Graphics"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "3D Building Model – AutoCAD",
    description:
      "Designed a 3D building structure using AutoCAD, focusing on accurate room dimensions, layout planning, and structural visualization.",
    image: "/images/cad.png",
    technologies: ["AutoCAD", "3D Design"],
    link: "https://www.linkedin.com/",
  },

  {
    title: "2D Moving Cars Scene",
    description:
      "Developed an animated 2D scene in C++ using OpenGL featuring buildings, roads, moving cars, and a rising sun with interactive controls.",
    image: "/images/Gp 2.png",
    technologies: ["C++", "OpenGL", "Animation"],
    link: "https://www.linkedin.com/",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          My Portfolio
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">My Work</h2>

        {/* Project grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* View Project badge */}
                <div className="absolute bottom-4 right-4 rounded-full bg-purple-700/90 px-4 py-2 text-xs font-semibold shadow-lg">
                  View Project
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-purple-400"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
