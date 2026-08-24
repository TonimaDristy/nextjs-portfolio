"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown } from "lucide-react";

const projects = [
  {
    title: "ASD Detection Using Explainable Machine Learning",
    description:
      "Developed a machine learning framework for ASD screening across multiple age groups using data preprocessing, feature selection, model optimization, and SHAP-based Explainable AI.",
    image: "/images/Poster.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Feature Selection",
      "SHAP",
      "Explainable AI",
    ],
    link: "https://www.kaggle.com/code/tonimadristy/asd-detection-using-explainable-machine-learning",
  },
  {
    title: "UniShare – University Resource Sharing Platform",
    description:
      "A full-stack platform for sharing academic resources with role-based access. Built with Next.js, React, Tailwind CSS, NestJS, Node.js, and PostgreSQL.",
    image: "/images/Unishare.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "NestJS", "PostgreSQL"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_fullstackdevelopment-typescript-nestjs-ugcPost-7420757094708080640-9oFG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
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
    title: "MTR Technology – Business Solutions & Technology Services",
    description:
      "Contributed to developing and improving responsive web pages for MTR Technology, including reusable React components, responsive layouts, navigation features, and modern UI designs.",
    image: "/images/MTR.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router"],
    link: "https://mustaruusu.com/",
  },
  {
    title: "Complete Pro3AI – Programme Management Platform",
    description:
      "A responsive programme management platform featuring RAID-D, Resource Management, Planning, Procurement Management, and other project management features with interactive navigation and responsive UI.",
    image: "/images/Pro3AI.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    link: "https://pro3-eta.vercel.app/",
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
    link: "https://www.linkedin.com/posts/tonima-dristy650_arduinoide-tangibleui-smartbilling-ugcPost-7420105767573184514-udO2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "Movie Discovery Web App",
    description:
      "A responsive movie discovery application using React, Tailwind CSS, and the OMDb API with movie search, IMDb ratings, release dates, loading states, and error handling.",
    image: "/images/Movie.png",
    technologies: ["React", "Tailwind CSS", "OMDb API"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_reactjs-tailwindcss-frontenddevelopment-activity-7409927699986620416-Pw_l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "Dual Axis Solar Tracking System",
    description:
      "An Arduino-based solar tracking system using light sensors to automatically rotate the solar panel toward the sun, with an LCD showing the real-time charge level.",
    image: "/images/Micro.jpg",
    technologies: ["Arduino", "IoT", "Embedded Systems"],
    link: "https://drive.google.com/file/d/1o0aNST_9eLMRQKwmzzyA40d-k-EzVU_9/view?usp=drivesdk",
  },
  {
    title: "EatUp – Food Delivery App",
    description:
      "A frontend food delivery application featuring an interactive menu, Add to Cart functionality, local storage cart management, order tracking, and responsive UI/UX.",
    image: "/images/Eatup.jpeg",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_excited-to-share-my-latest-project-eatup-activity-7412758175512408064-RMxw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "Data Science – Iris Dataset Analysis",
    description:
      "Conducted data preprocessing, visualization, and analysis on the Iris dataset using R, including plots, boxplots, and statistical summaries.",
    image: "/images/Data Science.jpeg",
    technologies: ["R", "Data Science", "Data Visualization"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_datascience-rprogramming-eda-activity-7405945049395404801-lczG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "Colorful 2D Cityscape",
    description:
      "Built a full 2D city scene using C++ and OpenGL with moving cars, trees, buildings, a river, smooth animations, and dynamic car speed controls.",
    image: "/images/Graphics.png",
    technologies: ["C++", "OpenGL", "Computer Graphics"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_just-finished-building-an-animated-2d-activity-7405320842966093824--v31?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "Real-Time Object Detection Using TinyML",
    description:
      "A research project focused on optimizing lightweight object detection models for resource-constrained IoT devices using quantization, pruning, and hardware-aware optimization.",
    image: "/images/TinyML.png",
    technologies: [
      "Python",
      "TinyML",
      "Machine Learning",
      "Model Optimization",
      "IoT",
    ],
  },
  {
    title: "3D Building Model – AutoCAD",
    description:
      "Designed a 3D building structure using AutoCAD, focusing on accurate room dimensions, layout planning, and structural visualization.",
    image: "/images/cad.png",
    technologies: ["AutoCAD", "3D Design"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_i-designed-a-full-3d-building-model-in-autocad-activity-7405187631229292545-piqS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
  {
    title: "2D Moving Cars Scene",
    description:
      "Developed an animated 2D scene in C++ using OpenGL featuring buildings, roads, moving cars, and a rising sun with interactive controls.",
    image: "/images/Gp 2.png",
    technologies: ["C++", "OpenGL", "Animation"],
    link: "https://www.linkedin.com/posts/tonima-dristy650_opengl-computergraphics-cplusplus-activity-7406300531654172672-TpyU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGJiCyAByfYldJjo8GpGkK_Diuy6aJjW3Zo",
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  // Show 6 projects initially, or all projects after clicking See More
  const displayedProjects = showMore ? projects : projects.slice(0, 6);

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
          {displayedProjects.map((project) => (
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 whitespace-normal break-words overflow-visible">
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-purple-400"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {projects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 rounded-xl border border-purple-500/50 bg-purple-500/10 px-6 py-3 font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white"
            >
              {showMore ? "See Less" : "See More"}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
