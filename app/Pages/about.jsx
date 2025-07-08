"use client";
import React from "react";
import Card from "@/app/components/card.jsx";
import webdev from "@/public/web-services.png";
import uiux from "@/public/ui.png";
import appdev from "@/public/mobile-app-development.png";
import html from "@/public/html.png";
import css from "@/public/css-3.png";
import js from "@/public/js.png";
import nodejs from "@/public/node-js.png";
import react from "@/public/react.png";
import postgre from "@/public/postgre.png";
import prisma from "@/public/prisma.png";
import cpp from "@/public/cpp.png";
import python from "@/public/python.png";
import Robo from "../components/3d";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { SparklesCore } from "@/components/ui/sparkles";
function About() {
  const skills = [
    {
      index: "1",
      image: webdev,
      title: "Web Development",
      description: "Building responsive and accessible web applications.",
    },
    {
      index: "2",
      image: uiux,
      title: "UI/UX Design",
      description:
        "Creating user-friendly interfaces with a focus on user experience.",
    },
    {
      index: "3",
      image: appdev,
      title: "App Development",
      description:
        "Developing interactive and dynamic mobile applications using React Native.",
    },
  ];
  const techStack = [
    {
      key: 1,
      image: html,
      title: "HTML",
    },
    {
      key: 2,
      image: css,
      title: "CSS",
    },
    {
      key: 3,
      image: js,
      title: "JavaScript",
    },
    {
      key: 4,
      image: nodejs,
      title: "Node.js",
    },
    {
      key: 5,
      image: react,
      title: "React",
    },
    {
      key: 6,
      image: postgre,
      title: "PostgreSQL",
    },
    {
      key: 7,
      image: prisma,
      title: "Prisma",
    },
    {
      key: 8,
      image: cpp,
      title: "C++",
    },
    {
      key: 9,
      image: python,
      title: "Python",
    },
  ];
  return (
    <div className="mt-6 flex flex-col justify-center items-center" id="About">
      <div className="flex flex-col justify-center items-center"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-4 gap-4 mt-6 w-full">
        <div className="w-full">
          <div className="flex justify-center lg:justify-start ">
            <div className=" p-1 bg-gradient from-secondary-foreground to-background">
              <div className="flex flex-col justify-center items-start p-6">
                <p className="font-poppins font-medium text-base mb-1 text-gray-400">
                  INTRODUCTION
                </p>
                <h1 className="text-4xl font-bold font-rubik text-left">
                  Overview .
                </h1>
                <div className="w-60 h-4 relative">
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-4"
                    particleColor="#FFFFFF"
                  />

                  <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <p className="text-base font-poppins font-medium text-gray-400 text-left w-full mb-2">
                  I’m Aryan Choudhary, a developer from the vibrant town of
                  Begusarai, Bihar. I specialize in creating smooth,
                  user-friendly experiences as a front-end and back-end
                  developer. Currently, I’m pursuing a Bachelor of Technology in
                  Computer Science and Engineering at IIIT Ranchi, where I’ve
                  been building my skills in web development, design, and
                  problem-solving through hands-on projects and academic
                  learning. I’m passionate about technology, always eager to
                  learn, and driven to build meaningful digital experiences.
                </p>
                <div className="flex gap-10 justify-center items-center w-fit pl-2">
                  <div className="flex flex-col gap-2">
                    <div className="relative h-20 w-20 mt-6">
                      <div className="absolute inset-0 bg-linear-to-r from-gray-500 via-green-500 to-green-600 z-0 rounded-full -top-[9px] -left-[9px] shadow-xl "></div>
                      <div className="flex justify-center items-center absolute inset-0 rounded-full bg-secondary-foreground h-18 w-18">
                        <h1 className="text-xl font-rubik text-green-300">
                          100%
                        </h1>
                      </div>
                    </div>
                    <p className="text-base font-roboto font-semibold text-emerald-400">
                      HTML & CSS
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative h-20 w-20 mt-6">
                      <div className="absolute inset-0 progress z-0 rounded-full -top-[9px] -left-[9px] shadow-xl progress"></div>
                      <div className="flex justify-center items-center absolute inset-0 rounded-full bg-secondary-foreground h-18 w-18">
                        <h1 className="text-xl font-rubik text-green-300">
                          80%
                        </h1>
                      </div>
                    </div>
                    <p className="text-base font-roboto font-semibold text-emerald-400 text-center">
                      JAVASCRIPT
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative h-20 w-20 mt-6">
                      <div className="absolute inset-0 progress z-0 rounded-full -top-[9px] -left-[9px] shadow-xl progress"></div>
                      <div className="flex justify-center items-center absolute inset-0 rounded-full bg-secondary-foreground h-18 w-18">
                        <h1 className="text-xl font-rubik text-green-300">
                          80%
                        </h1>
                      </div>
                    </div>
                    <p className="text-base font-roboto font-semibold text-emerald-400 text-center">
                      React JS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-full">
          <Robo />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 relative w-full overflow-hidden">
        {skills.map((skills) => {
          return (
            <Card
              key={skills.index}
              index={skills.index}
              image={skills.image}
              title={skills.title}
              description={skills.description}
            />
          );
        })}
      </div>
      <div className="h-fit flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
        <HeroParallax products={techStack} />
      </div>
    </div>
  );
}

export default About;
