"use client"

import GlassSurface from "./ui/GlassSurface"

export default function GlassNavbar() {

  return (

    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-5xl">

      <GlassSurface className="px-4 md:px-10 py-3 md:py-4 flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-8 text-xs md:text-base lg:text-lg">

        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>

      </GlassSurface>

    </nav>

  )
}