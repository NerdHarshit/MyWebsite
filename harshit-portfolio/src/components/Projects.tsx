// Next.js needs this when we use state or browser events
"use client"

// React hook that lets us store changing values
import { useState } from "react"

// Your reusable card component
import ProjectCard from "./ui/ProjectsCard"

type Project = {
  title: string
  image: string
  github: string
  youtube: string
  category: string
  description: string
}

export default function Projects() {

  // -----------------------------
  // 1️⃣ React STATE
  // -----------------------------
  // filter = current selected filter
  // setFilter = function used to change filter
  // initial value = "all"

  const [filter, setFilter] = useState("all")
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // -----------------------------
  // 2️⃣ Project Data
  // -----------------------------
  // Each project now contains a "category"
  // This will allow us to filter them later

  const projects = [

    // software projects
    {
      title: "Windows widgets mod",
      image: "/demo.jpeg",
      github: "https://github.com/NerdHarshit/Windows11-UI-MOD-v1",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "software",
      description: "A Windows 11 UI mod that adds customizable widgets to the desktop, built using C++ and WinUI. It features a modular design for easy addition of new widgets, and includes a variety of built-in widgets such as weather, calendar, and system monitoring. The project is open-source and available on GitHub."
    },

    {
      title: "Ground Station Software",
      image: "/impulsegui.jpeg",
      github: "https://github.com/NerdHarshit/Flight_GUI",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "software",
      description: "A ground station software for telemetry monitoring and control of High power rockets, developed using Python and PyQt for DJS Impulse team. It provides real-time data visualization,data saving in csv,pdf report generation and live animation. The software is designed for ease of use and is available on GitHub."
    },

    {
      title: "Rocket ML filter Payload",
      image: "/mlfilter.jpeg",
      github: "https://colab.research.google.com/drive/1kNT_AxCry_mbEO8Lp07sR7Mg15Qod5JY?usp=sharing",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "ML",
      description: "A ml based filter that corrects the errors in height values gotten through the barometer in high power rockets "
    },

    {
      title: "ML star tracker",
      image: "/image placeholder.png",
      github: "#",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "ML",
      description: "A star tracker that uses machine learning to identify stars and calculate the orientation of a spacecraft, developed using Python and TensorFlow. It provides accurate and real-time attitude determination for space missions, and is available on GitHub."
    },

    // hardware projects
    {
      title: "3D Scanner",
      image: "/image placeholder.png",
      github: "http://github.com/NerdHarshit/3D_SCANNER",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "hardware",
      description: "A 3D scanner that uses a rotating platform and a laser line to capture the shape of objects, developed using raspberrypi pico2 and open3d. It provides accurate 3D models for use in 3D printing and computer graphics, and is available on GitHub."
    },

    {
      title: "Agrotech Node",
      image: "/agronode.jpeg",
      github: "https://github.com/NerdHarshit/Agro_tech",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "hardware",
      description: "An IoT-based agricultural monitoring system that uses sensors to collect data on soil moisture, temperature, and humidity, developed using Arduino and Node-RED. It provides real-time monitoring and alerts for farmers to optimize crop growth, and is available on GitHub."
    },

    {
      title: "DataLogger PCB",
      image: "/datalogger.jpeg",
      github: "https://github.com/NerdHarshit/Datalogger_PCB",
      youtube: "https://www.youtube.com/@TheEngineer-j6j",
      category: "hardware",
      description: "A custom-designed PCB for data logging applications, developed using KiCad. It features multiple sensor inputs, a microcontroller for data processing, and an SD card slot for data storage. The PCB is designed for ease of use and is available on GitHub."
    }
  ]


  // -----------------------------
  // 3️⃣ FILTER LOGIC
  // -----------------------------
  // If filter = "all" → return all projects
  // Otherwise → return only projects that match category

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.category === filter)


  //pagination logic
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage

  const visibleProjects = filteredProjects.slice(startIndex, endIndex)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  //page reset logic when filter changes
  const changeFilter = (newFilter: string) => {
  setFilter(newFilter)
  setCurrentPage(1)
}


  return (

    <section id="projects" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
      <hr style={{ border: "2px solid white", width: "80%" }} />

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Projects
      </h2>


      {/* -----------------------------
          4️⃣ FILTER BUTTONS (Glass Style)
         ----------------------------- */}

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">

        {/* When clicked → change filter state */}

        <button
          onClick={() => changeFilter("all")}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        >
          All
        </button>

        <button
          onClick={() => changeFilter("software")}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        >
          Software
        </button>

        <button
          onClick={() => changeFilter("ML")}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        >
          ML
        </button>

        <button
          onClick={() => changeFilter("hardware")}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
        >
          Hardware
        </button>

      </div>


      <div className="max-w-6xl mx-auto px-6">

        {/* Responsive grid layout */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* -----------------------------
              5️⃣ RENDER FILTERED PROJECTS
             ----------------------------- */}

          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              github={project.github}
              youtube={project.youtube}
              description={project.description}
              onViewMore={() => setActiveProject(project)}
            />
          ))}



        </div>

      </div>

      <div className="flex justify-center gap-4 mt-8">

        {Array.from({ length: totalPages }, (_, i) => (

          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-xl border border-white/20 backdrop-blur-xl
      ${currentPage === i + 1 ? "bg-white/30" : "bg-white/10"}`}
          >
            {i + 1}
          </button>

        ))}

      </div>

      {/* -----------------------------
    PROJECT MODAL
   ----------------------------- */}

      {activeProject && (

        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}   // clicking outside closes modal
        >

          {/* stop click from closing when clicking inside */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 md:p-8 max-w-xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="rounded-lg mb-4 w-full object-cover"
            />

            <h3 className="text-2xl font-bold mb-3">
              {activeProject.title}
            </h3>

            <p className="text-gray-200 mb-4">
              {activeProject.description}
            </p>

            <div className="flex gap-3">

              <a
                href={activeProject.github}
                className="bg-white/20 px-4 py-2 rounded-md"
              >
                GitHub
              </a>

              <a
                href={activeProject.youtube}
                className="bg-white/20 px-4 py-2 rounded-md"
              >
                Demo
              </a>

            </div>

          </div>

        </div>

      )}

    </section>

  )
}