import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react";
import About from "./Pages/about";
import Link from "next/link";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";

import Image from "next/image";
import avatar from "../public/image.png";
export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 mt-10 h-fit">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-4">
          <p className="text-xl font-semibold  ml-2 font-poppins">
            Hello , I'm{" "}
          </p>
          <p className="text-6xl font-extrabold text-center lg:text-left font-rubik">
            ARYAN <br />
            <span className="text-secondary">CHOUDHARY</span>
          </p>
          <p className="text-2xl font-poppins font-semibold">
            And I'm a <span className="text-muted">Web Developer</span>
          </p>
          <p className="text-lg font-roboto font-medium mt-4 border-l-3 border-muted p-2 pl-4 w-5/6">
            I’m a passionate web and mobile app developer with a strong focus on
            building modern, responsive, and user-friendly digital experiences.
          </p>
          <div className="flex gap-2">
            <Link href="#Contact">
              <button className=" bg-button p-2 px-3 rounded-md text-lg font-medium font-roboto mt-6">
                Contact Me
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="border-2 border-button p-2 px-3 rounded-md text-lg font-medium font-roboto mt-6">
                Download Resume
              </button>
            </Link>
          </div>
          <div className="flex gap-4 mt-6 mb-6">
            <Link href="https://github.com/Aryanchoudhary12">
              <Github className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-full" />
            </Link>
            <Link href="https://www.linkedin.com/in/aryan-choudhary-9256a7290/">
              <Linkedin className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-2xl" />
            </Link>
            <Link href="https://www.instagram.com/aryanchoudhary2119/">
              <Instagram className="h-10 w-10 text-secondary p-2 border-2 border-secondary/50 bg-secondary/5 rounded-2xl" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mb-4">
          <div className="relative w-[calc(24rem+6px)] h-[calc(24rem+6px)] ">
            <div className="absolute inset-0 bg-linear-to-r from-gray-500 via-green-500 to-transparent animate-spin transition-all z-0 [animation-duration:2s] rounded-full -left-2 -top-2 shadow-xl shadow-emerald-500/30"></div>
            <Image
              src={avatar}
              alt="Avatar"
              className="absolute inset-0 w-96 h-96 z-10 object-cover rounded-full bg-secondary-foreground"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link href="#About">
          <div className="flex justify-center items-center h-10 w-10 border-2 border-primary rounded-full bg-primary/20 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </Link>
      </div>
      <About id="About" />
      <Projects />
      <Contact />
    </div>
  );
}
