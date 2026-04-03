"use client"

import GlassCard from "./GlassCard"
import GlassSurface from "./GlassSurface"

type ProjectCardProps = {
  title: string
  image: string
  github: string
  youtube: string
  description:string
  onViewMore: () => void
}

export default function ProjectCard({
  title,
  image,
  github,
  youtube,
  onViewMore
}: ProjectCardProps) {

  return (

    <GlassSurface className="p-3 flex flex-col min-h-[300px]">

      <img
        src={image}
        alt={title}
        className="h-40 md:h-45 w-full object-cover rounded-md mb-4"
      />

      <h3 className="text-lg md:text-xl font-semibold mb-1">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">

        <a
          href={github}
          className="bg-white/20 px-3 py-1 rounded-md text-sm"
        >
          GitHub
        </a>

        <a
          href={youtube}
          className="bg-white/20 px-3 py-1 rounded-md text-sm"
        >
          Demo
        </a>

        {/* View More now opens modal */}
        <button
          onClick={onViewMore}
          className="text-sm text-blue-200"
        >
          View More
        </button>

      </div>

    </GlassSurface>

  )
}