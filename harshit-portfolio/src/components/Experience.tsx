"use client"

import { useState } from "react"
import ExperienceCard from "./ui/ExperienceCard"
import Timeline from "./ui/timeline"

//console.log(ExperienceCard)
//    console.log(Timeline)

type Experiencetype = {
  year: string
  title: string
  description: string
}



export default function Experience() {

  const [viewMode, setViewMode] = useState<"cards" | "text">("cards")
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragStart, setDragStart] = useState<number | null>(null)

  const handlePointerDown = (e: React.PointerEvent) => {
    setDragStart(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent) => {

    if (dragStart === null) return

    const dragEnd = e.clientX
    const difference = dragStart - dragEnd

    const threshold = 50

    if (difference > threshold && activeIndex < experiences.length - 1) {
      setActiveIndex(activeIndex + 1)
    }

    if (difference < -threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }

    setDragStart(null)
  }

  const nextCard = () => {
    setActiveIndex((prev) =>
      prev < experiences.length - 1 ? prev + 1 : prev
    )
  }

  const prevCard = () => {
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : prev
    )
  }

  const experiences: Experiencetype[] = [
    {
      year: "September 2025-Present",
      title: "Undergrad Researcher at DJS ACM Student Chapter",
      description:
        "Researching on usage of ML in aerosapce applications.Developing a CNN-based star tracker using synthetic astronomical datasets, enabling robust and scalable spacecraft orientation determination under varied conditions"
    },
    {
      year: "August 2025-Present",
      title: "Flutter Developer in DJS Unicode student club",
      description:
        "Learnt and built projects in Flutter,enhancing my skills in cross-platform and scalable app development."
    },
    {
      year: "March 2025-Present",
      title: "Student Rocket team Avionics Developer",
      description:
        "Actively working on avionics software , hardware and telemetry systems for high power rockets, contributing to the development of HPR for national and international competitions."
    }
  ]

  return (

    <section id="experience" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
<hr style={{ border: "2px solid white", width: "80%" }} />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="flex justify-center gap-4 mb-12">

        <button
          onClick={() => setViewMode("cards")}
          className={`px-4 py-2 border border-white/20 rounded-md ${viewMode === "cards" ? "bg-white/20" : "bg-white/5"
            }`}
        >
          Card View
        </button>

        <button
          onClick={() => setViewMode("text")}
          className={`px-4 py-2 border border-white/20 rounded-md ${viewMode === "text" ? "bg-white/20" : "bg-white/5"
            }`}
        >
          Text View
        </button>

      </div>

      {viewMode === "cards" && (
        <div className="max-w-6xl mx-auto px-2 md:px-6 flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* LEFT SIDE — CARDS */}

          <div className="flex-1 flex justify-center items-center gap-6 cursor-grab active:cursor-grabbing select-none"
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}>

            {experiences.map((exp, index) => (

              <ExperienceCard
                key={index}
                title={exp.title}
                description={exp.description}
                isActive={index === activeIndex}
                position={index - activeIndex}
              />

            ))}

          </div>


          {/* RIGHT SIDE — TIMELINE */}

          <Timeline
            experiences={experiences}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

        </div>
      )}

      {viewMode === "text" && (

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-2 md:px-6 max-w-4xl mx-auto">

          {/* LEFT SIDE TEXT */}

          <div className="flex-1 flex flex-col gap-5">

            {experiences.map((exp, index) => (

              <div
                key={exp.year}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer p-4 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >

                <h3 className="text-xl font-semibold">
                  {exp.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {exp.description}
                </p>

              </div>

            ))}

          </div>


          {/* RIGHT SIDE TIMELINE */}

          <Timeline
            experiences={experiences}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

        </div>

      )}

    </section>

  )
}