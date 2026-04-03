type Experiencetype = {
  year: string
  title: string
  description: string
}

type TimelineProps = {
  experiences: Experiencetype[]
  activeIndex: number
  setActiveIndex:(index:number)=>void
}


export default function Timeline({ experiences, activeIndex,setActiveIndex }: TimelineProps) {

  return (

    <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-10 flex-wrap justify-center">

      {experiences.map((exp, index) => (

        <div key={index} className="flex flex-col items-center cursor-pointer"
        onClick={()=>setActiveIndex(index)}>

          <div
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-yellow-400" : "bg-white/30"
            }`}
          />

          <p className="text-sm mt-2">
            {exp.year}
          </p>

        </div>

      ))}

    </div>

  )
}