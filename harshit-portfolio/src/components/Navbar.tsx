export default function Navbar(){

    return (

        <nav className = "fixed top-0 w-full flex justify-center p-4">

            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded full flex gap-6">

            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}