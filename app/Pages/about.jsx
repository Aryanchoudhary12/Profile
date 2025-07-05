import React from "react";
import Image from "next/image";
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
import Robo, { Preload } from "../components/3d";
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
      image: html,
      title: "HTML",
    },
    {
      image: css,
      title: "CSS",
    },
    {
      image: js,
      title: "JavaScript",
    },
    {
      image: nodejs,
      title: "Node.js",
    },
    {
      image: react,
      title: "React",
    },
    {
      image: postgre,
      title: "PostgreSQL",
    },
    {
      image: prisma,
      title: "Prisma",
    },
    {
      image: cpp,
      title: "C++",
    },
    {
      image: python,
      title: "Python",
    },
  ];
  return (
    <div className="mt-6 flex flex-col justify-center items-center" id="About">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-rubik text-center">ABOUT ME</h1>
        <div className="flex items-center justify-center w-52 h-2 bg-secondary-foreground rounded-2xl mt-1">
          <div className="w-full h-full bg-secondary rounded-2xl underline"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-4 gap-2 mt-6 w-10/12">
        <div className="w-11/12">
          <div className="flex justify-center lg:justify-start about-border">
            <div className="about p-1">
              <div className="flex flex-col justify-center items-center p-6">
                <p className="text-lg font-poppins font-medium text-center md:text-left w-full">
                  Hello ! I’m Aryan Choudhary, hailing from the vibrant town of
                  Begusarai in Bihar. I specialize in crafting seamless user
                  experiences as a front-end and backend developer . Currently
                  I'm studing in IIIT Ranchi , pursuing Bachelor of Technology
                  in Computer and Engineering .
                </p>
                <div className="flex gap-10 justify-center items-center w-full">
                  <div className="flex flex-col gap-2">
                    <div className="relative h-24 w-24 mt-6">
                      <div className="absolute inset-0 bg-linear-to-r from-gray-500 via-green-500 to-green-600 z-0 rounded-full -top-[14px] -left-[14px] shadow-xl "></div>
                      <div className="flex justify-center items-center absolute inset-0 rounded-full bg-secondary-foreground h-20 w-20">
                        <h1 className="text-xl font-rubik text-green-300">
                          100%
                        </h1>
                      </div>
                    </div>
                    <p className="text-base font-roboto font-semibold text-emerald-400">HTML & CSS</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative h-24 w-24 mt-6">
                      <div className="absolute inset-0 progress z-0 rounded-full -top-[14px] -left-[14px] shadow-xl "></div>
                      <div className="flex justify-center items-center absolute inset-0 rounded-full bg-secondary-foreground h-20 w-20">
                        <h1 className="text-xl font-rubik text-green-300">
                          80%
                        </h1>
                      </div>
                    </div>
                    <p className="text-base font-roboto font-semibold text-emerald-400 text-center">JAVASCRIPT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 w-full">
          <Preload />
          <Robo />
        </div>
      </div>

      <h1 className="text-4xl font-bold font-rubik text-center mt-6 ">
        What I Do ?
      </h1>
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
      <h1 className="text-4xl font-bold font-rubik text-center mt-6">
        Tech Stack
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
        {techStack.map((stack, index) => {
          return (
            <div
              key={stack.title}
              className="flex flex-col items-center gap-2  border-2 border-secondary/20 rounded-md p-2 py-4 bg-secondary-foreground"
            >
              <p className="w-full text-base font-bold text-muted-foreground text-left">
                {index + 1}.
              </p>
              <Image
                src={stack.image}
                alt={stack.title}
                className="h-12 w-12 object-cover"
              />
              <p className="text-lg font-semibold font-roboto">{stack.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
