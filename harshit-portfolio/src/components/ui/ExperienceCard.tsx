import GlassSurface from "./GlassSurface"

type ExperienceCardProps = {
  title: string
  description: string
  isActive: boolean
  position: number
}

export default function ExperienceCard({
  title,
  description,
  isActive,
  position
}: ExperienceCardProps) {

  let style = ""

  if (position === 0) {
    style = "scale-110 opacity-100 drop-shadow-lg"
  }
  else if (Math.abs(position) === 1) {
    style = "scale-90 opacity-50 blur-sm"
  }
  else {
    style = "hidden"
  }

  return (

    <GlassSurface className={`p-6 w-full max-w-4xl mx-auto ${style}`}>

      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-200">
        {description}
      </p>

    </GlassSurface>

  )
}