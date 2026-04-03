import SkillChip from "./ui/SkillChip";

export default function Skills(){

    const languages = ["C","C++","C#","Python","Java","JavaScript","TypeScript","Dart"]
    const tools = ["Git","Arduino","Docker,","KiCad","Linux"]
    const frameworks = ["Next.js","FLutter","Tensorflow","TensorflowLite"]

    return(
        <section id="skills" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
            <hr style={{ border: "2px solid white", width: "80%" }} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
                Skills
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold mt-4" >Languages</h3>
            <br></br>
            <div className="flex flex-wrap gap-4 justify-center">
                {languages.map(skill =>(<SkillChip key={skill} name={skill}/>
            ))}
            </div>
            <br></br>

            <h3 className="text-2xl md:text-3xl font-bold mt-4" >Tools</h3>
            <br></br>
            <div className="flex flex-wrap gap-4 justify-center">
                {tools.map(tool =>(<SkillChip key={tool} name={tool}/>
            ))}
            </div>
            <br></br>

            <h3 className="text-2xl md:text-3xl font-bold mt-4" >FrameWorks</h3>
            <br></br>
            <div className="flex flex-wrap gap-4 justify-center">
                {frameworks.map(framework =>(<SkillChip key={framework} name={framework}/>
            ))}
            </div>
            <br></br>
        </section>
    )
}