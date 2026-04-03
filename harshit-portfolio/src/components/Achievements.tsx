"use client"
import { useState } from "react";
import AcievementCard from "./ui/AchievementsCard";

export default function Achievements() {

    const achievements = [
        {
            title: "2nd place - Loop 1.0 Hackathon",
            image: "loop.jpeg",
            github: "https://github.com/NerdHarshit/Agro_tech",
            linkedin: "https://www.linkedin.com/posts/harshit-pandya-169116338_agritech-hackathon-iot-activity-7438592893684015104-jrEO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS8BmEB4AFCJ3O4D-SUly-3OoWcjEAmJFI"
        },

        {
            title: "3rd place - UniHacks Hackathon",
            image: "unihack.jpeg",
            github: "https://github.com/MalayBhaveshPandya/UniHacks_Commit-Kings_PS1",
            linkedin: "https://www.linkedin.com/posts/harshit-pandya-169116338_hackathon-ai-teamwork-activity-7428702121287524352-LlTc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS8BmEB4AFCJ3O4D-SUly-3OoWcjEAmJFI"
        },

    ]

    const AchPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    //pagination logic
    const startIndex = (currentPage - 1) * AchPerPage
    const endIndex = startIndex + AchPerPage

    const visibleAch = achievements.slice(startIndex, endIndex)

    const totalPages = Math.ceil(achievements.length / AchPerPage)



    return (
        <section id="achievements" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
            <hr style={{ border: "2px solid white", width: "80%" }} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
                Achievements
            </h2>

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleAch.map((ach, index) => (
                        <AcievementCard
                            key={index}
                            title={ach.title}
                            image={ach.image}
                            github={ach.github}
                            linkedin={ach.linkedin}
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