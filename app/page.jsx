import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import About from "./Pages/about";
import Link from "next/link";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import avatar from "../public/avatar.png";
import Button from "@/app/components/ui/button";
import ExperienceSection from "@/app/components/experienceSection";
export default function Home() {
  return (
    <div>
      <div className="relative w-full h-full ">
        <BackgroundBeams />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-4 pt-10 h-fit relative antialiased">
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
            <div className="flex gap-4 mt-6 relative">
              <div className="flex flex-col items-center gap-1 relative pr-6 border-r-2 border-secondary/30">
                <span className="font-poppins text-3xl font-extrabold text-secondary">
                  500+
                </span>
                <span className="font-poppins text-xs font-medium text-muted">
                  DSA Problems
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 relative pl-6">
                <span className="font-poppins text-3xl font-extrabold text-secondary">
                  0.5 Year
                </span>
                <span className="font-poppins text-xs font-medium text-muted">
                  Internship Experience
                </span>
              </div>
            </div>
            <div className="flex gap-4 relative mt-6">
              <Link href="#Contact">
                <Button
                  variant={"outline"}
                  size={"medium"}
                  className="rounded-md font-roboto font-semibold text-base w-40"
                >
                  Contact Me
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1EKZXsIl6wEWOlhTU7ESDOm3d8OCgFXwe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"primary"}
                  size={"medium"}
                  className="rounded-md font-roboto font-semibold text-base w-40"
                >
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mb-4 ">
            <div className="relative w-[calc(18rem+4px)] h-[calc(18rem+4px)] sm:w-[calc(22rem+6px)] sm:h-[calc(22rem+6px)] ">
              <div className="absolute inset-0 bg-linear-to-r from-gray-500 via-green-500 to-emerald-800 animate-spin transition-all z-0 [animation-duration:2s] rounded-full -left-2 -top-2 shadow-xl shadow-emerald-500/15"></div>
              <Image
                src={avatar}
                alt="Avatar"
                className="absolute inset-0 w-72 h-72 sm:w-88 sm:h-88 z-10 object-cover rounded-full bg-background shrink-0"
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
                <ArrowDown className="h-6 w-6 text-sky-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <About id="About" />
      <Projects />
      <ExperienceSection />
      <Contact />
    </div>
  );
}
