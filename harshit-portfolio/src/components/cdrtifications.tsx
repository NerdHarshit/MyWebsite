"use client"

import AcievementCard from "./ui/AchievementsCard"

import { useState } from "react"

export default function Certifications() {

  const certifications = [
    {
      title: "Machine Learning - Udemy",
      image: "/image placeholder.png",
      linkedin: "https://linkedin.com/..."
    },
    {
      title: "Python for data science - Udemy",
      image: "/image placeholder.png",
      linkedin: "https://linkedin.com/..."
    },
    {
      title: "PCB design - Udemy",
      image: "/image placeholder.png",
      linkedin: "https://linkedin.com/..."
    }
  ]

  const certPerPage = 6;
  const [currentPage,setCurrentPage] = useState(1);

  //pagination logic
  const startIndex = (currentPage-1) *certPerPage;
  const endIndex = startIndex + certPerPage;
  const visibleCerts = certifications.slice(startIndex,endIndex);
  const totalPages = Math.ceil(certifications.length/certPerPage);

  return (

    <section id="certifications" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
<hr style={{ border: "2px solid white", width: "80%" }} />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {visibleCerts.map((cert, index) => (

            <AcievementCard
              key={index}
              title={cert.title}
              image={cert.image}
              linkedin={cert.linkedin}
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

    </section>

  )
}