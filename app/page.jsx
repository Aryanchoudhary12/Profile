import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import About from "./Pages/about";
import Link from "next/link";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import avatar from "../public/avatar.png";
export default function Home() {
  return (
    <div>
      <div className="relative w-full h-full ">
        <BackgroundBeams />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 pt-10 h-fit relative antialiased">
          <div className="flex flex-col justify-center items-center lg:items-start lg:ml-16">
            <p className="text-xl font-semibold  ml-2 font-poppins">
              Hello , I'm{" "}
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-center lg:text-left font-rubik">
              ARYAN <br />
              <span className="text-secondary">CHOUDHARY</span>
            </p>
            <p className="text-2xl font-poppins font-semibold">
              And I'm a <span className="text-muted">Web Developer</span>
            </p>
            <p className="text-lg font-roboto font-medium mt-4 border-l-3 border-muted p-2 pl-4 w-5/6">
              I’m a passionate web and mobile app developer with a strong focus
              on building modern, responsive, and user-friendly digital
              experiences.
            </p>
            <div className="flex gap-2 relative">
              <Link href="#Contact">
                <button className=" bg-primary/80 p-2 w-40 rounded-tl-xl rounded-br-xl text-base font-medium font-roboto mt-6">
                  Contact Me
                </button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <button className="bg-button p-2 w-40 rounded-tl-xl rounded-br-xl text-base font-medium font-roboto mt-6">
                  Download Resume
                </button>
              </Link>
            </div>
            <div className="flex gap-4 mt-6 mb-6 relative">
              <Link href="https://github.com/Aryanchoudhary12">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Github className="h-6 w-6 text-secondary " />
                  </span>
                </button>
              </Link>
              <Link href="https://www.linkedin.com/in/aryan-choudhary-9256a7290/">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Linkedin className="h-6 w-6 text-secondary " />
                  </span>
                </button>{" "}
              </Link>
              <Link href="https://www.instagram.com/aryanchoudhary2119/">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Instagram className="h-6 w-6 text-secondary " />
                  </span>
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mb-4 ">
            <div className="relative w-[calc(20rem+6px)] h-[calc(20rem+6px)] sm:w-[calc(22rem+6px)] sm:h-[calc(22rem+6px)] ">
              <div className="absolute inset-0 bg-linear-to-r from-gray-500 via-green-500 to-emerald-800 animate-spin transition-all z-0 [animation-duration:2s] rounded-full -left-2 -top-2 shadow-xl shadow-emerald-500/15"></div>
              <Image
                src={avatar}
                alt="Avatar"
                className="absolute inset-0 w-80 h-80 sm:w-88 sm:h-88 z-10 object-cover rounded-full bg-secondary-foreground"
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href="#About">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none animate-bounce">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <ArrowDown className="h-6 w-6 text-button" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <About id="About" />
      <Projects />
      <Contact />
    </div>
  );
}
