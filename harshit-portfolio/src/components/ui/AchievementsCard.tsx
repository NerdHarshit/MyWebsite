import GlassSurface from "./GlassSurface"

type CardProps = {

    title:string
    image:string
    github?: string 
    linkedin?: string 
}

export default function AcievementCard({
    title,
    image,
    github,
    linkedin
}:CardProps){

    return(
        <GlassSurface className="p-3 flex flex-col min-h-[300px]">

            <img
            src = {image}
            alt={title}
            className="h-40 md:h-45 w-full object-cover rounded-md mb-4"
            />

            <h3 className="text-base md:text-lg font-semibold mb-3 break-words">{title}</h3>

            <div className="flex flex-wrap gap-3">
                {
                    github && (
                        <a
                        href={github}
                        className="bg-white/20 px-3 py-1 rounded-md text-sm"
                        >
                            GitHub
                        </a>
                    )
                }

                {
                    linkedin && (
                        <a
                        href={linkedin}
                        className="bg-white/20 px-3 py-1 rounded-md text-sm"
                        >
                            LinkedIn
                        </a>
                    )
                }
            </div>
        </GlassSurface>
    )
}