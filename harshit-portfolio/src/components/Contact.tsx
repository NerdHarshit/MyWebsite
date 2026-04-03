"use client"
import { LinkedinLogoIcon,InstagramLogoIcon,GithubLogoIcon,YoutubeLogoIcon,MapPinIcon,EnvelopeIcon,DownloadSimpleIcon} from "@phosphor-icons/react"

export default function Contact() {
  return (

    <section id="contact" className="min-h-screen pt-32 pb-24 items-center flex flex-col gap-8 scroll-mt-24 fade-in px-4">
      <hr style={{ border: "2px solid white", width: "80%"}} />

      <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            Contact Me
          </h2>

          <h3 className="text-xl font-semibold mb-6 text-center">
            Harshit Pandya
          </h3>

          <div className="space-y-4 text-gray-200">

            <div className="flex items-center justify-center gap-3">
              <MapPinIcon size={30} />
              Mumbai, India
            </div>


            <div className="flex items-center justify-center gap-3">
              <EnvelopeIcon size={30} />
              harshit4pandya@gmail.com
            </div>

            <div className="flex items-center justify-center gap-3">
              <DownloadSimpleIcon size={30} />
              <a href="/Harshit_GPR_20-3-26_newformat.pdf" download>
                Download Resume
              </a>
            </div>

          </div>

          {/* Social Icons */}

          <div className="flex justify-center gap-6 mt-10 text-xl">

            
            <a href="https://www.linkedin.com/in/harshit-pandya-169116338/"><LinkedinLogoIcon size={30}/></a>
            <a href="https://github.com/NerdHarshit"><GithubLogoIcon size={30}/></a>
            <a href="http://www.youtube.com/@TheEngineer-j6j"><YoutubeLogoIcon size={30}/></a>
          </div>


      </div>

    </section>

  )
}