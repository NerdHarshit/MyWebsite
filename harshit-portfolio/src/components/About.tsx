export default function About() {

  return (

    <section
      id="about"
      className="min-h-screen pt-12 pb-12 items-center flex flex-col gap-8 scroll-mt-24 fade-in">
        <hr style={{ border: "2px solid white", width: "80%" }} />

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          About Me
        </h2>


        {/* Two column layout */}

        <div className="flex flex-col md:flex-row items-center gap-12">


          {/* LEFT SIDE — TEXT */}

          <div className="flex-1">

            <p className="text-base md:text-lg leading-relaxed text-gray-200">

              I am a computer engineering student with strong interests in computer systems,
              aerospace systems,AI and  machine learning,robotics and embedded systems.

            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mt-6">

              I enjoy building projects that combine hardware and software and have a real world impact.
              Much of my projects arise from the problems I encounter in my daily life or from my curiosity about how things work.

            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mt-6">

              Other than work and studies, I enjoy listening to music, watching movies ,going for walks and learning new things.

            </p>

          </div>



          {/* RIGHT SIDE — IMAGE + BUTTONS */}

          <div className="flex-1 flex flex-col items-center">

            <img
              src="/pfp.jpeg"
              alt="Harshit Pandya"
              className="rounded-xl w-48 md:w-64 mb-6"
            />

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="Harshit_GPR_20-3-26_newformat.pdf"//no need for path as nextjs handels routing internally just put it in public folder and give filename
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm md:text-base"
              >
                View Resume
              </a>

              <a
                href="Harshit_GPR_20-3-26_newformat.pdf"
                download
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm md:text-base"
              >
                Download Resume
              </a>

            </div>

          </div>


        </div>

      </div>
      

    </section>

  )

}

/*
<section className="min-h-screen pt-32 pb-24">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-16">
      Section Title
    </h2>

    { content }

  </div>

</section>

*/