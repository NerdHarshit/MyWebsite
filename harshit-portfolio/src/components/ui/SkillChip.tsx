export default function SkillChip({name}:{name :String}){
    return(
        <span className="
        bg-white/10
        bprder border-white/20
        px-4 py-2
        rounded-xl
        backdrop-blur-xl
        transition
        hover:bg-white/20
        hover:shadow-[0_0_10px_rgba(150,200,255,0.4)]
        text-sm
        ">
            {name}
        </span>
    )

}