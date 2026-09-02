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
import { AnimatedCircularProgressBar } from "@/components/ui/progressBar";

const si = (slug) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`;

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
      category: "Languages",
      items: [
        { title: "C", image: cpp },
        { title: "C++", image: cpp },
        { title: "JavaScript", image: js },
        { title: "TypeScript", iconUrl: si("typescript") },
        { title: "Python", image: python },
        { title: "SQL", iconUrl: si("postgresql") },
      ],
    },
    {
      category: "Frameworks & Frontend",
      items: [
        { title: "HTML", image: html },
        { title: "CSS", image: css },
        { title: "React", image: react },
        { title: "Next.js", iconUrl: si("nextdotjs") },
        { title: "Tailwind CSS", iconUrl: si("tailwindcss") },
      ],
    },
    {
      category: "Backend",
      items: [
        { title: "Node.js", image: nodejs },
        { title: "Express", iconUrl: si("express") },
        { title: "FastAPI", iconUrl: si("fastapi") },
        { title: "Socket.IO", iconUrl: si("socketdotio") },
        { title: "WebRTC", iconUrl: si("webrtc") },
        { title: "GraphQL", iconUrl: si("graphql") },
        { title: "Prisma", image: prisma },
        { title: "Redis", iconUrl: si("redis") },
        { title: "Turborepo", iconUrl: si("turborepo") },
      ],
    },
    {
      category: "Databases & Messaging",
      items: [
        { title: "PostgreSQL", image: postgre },
        { title: "MongoDB", iconUrl: si("mongodb") },
        { title: "Redis", iconUrl: si("redis") },
        { title: "Elasticsearch", iconUrl: si("elasticsearch") },
        { title: "Kafka", iconUrl: si("apachekafka") },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { title: "GCP", iconUrl: si("googlecloud") },
        { title: "Vercel", iconUrl: si("vercel") },
        { title: "Cloudflare", iconUrl: si("cloudflare") },
        { title: "Docker", iconUrl: si("docker") },
        { title: "Kubernetes", iconUrl: si("kubernetes") },
        { title: "Terraform", iconUrl: si("terraform") },
        { title: "Prometheus", iconUrl: si("prometheus") },
        { title: "GitHub Actions", iconUrl: si("githubactions") },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { title: "LangChain", iconUrl: si("langchain") },
        { title: "Gemini", iconUrl: si("googlegemini") },
      ],
    },
    {
      category: "Testing & Tooling",
      items: [
        { title: "Jest", iconUrl: si("jest") },
        { title: "Git", iconUrl: si("git") },
      ],
    },
  ];

  return (
    <div className="mt-6 flex flex-col justify-center items-center" id="About">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-4 px-6 sm:px-10 gap-4 mt-6 w-full">
        <div className="w-full">
          <div className="flex justify-center lg:justify-start ">
            <div className=" p-1 bg-gradient from-secondary-foreground to-background">
              <div className="flex flex-col justify-center items-start">
                <p className="font-poppins font-medium text-lg mb-1 text-gray-300">
                  Introduction
                </p>
                <h1 className="text-4xl font-black font-poppins text-left">
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
                <p className="text-sm font-poppins font-medium text-secondary text-left w-full mb-2">
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
                <div className="flex gap-4 sm:gap-10 justify-center items-center w-fit mt-6">
                  <div className="flex flex-col gap-2">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={95}
                      gaugePrimaryColor="var(--primary)"
                      gaugeSecondaryColor="var(--secondary)"
                      className="sm:h-24 sm:w-24 h-16 w-16"
                    />
                    <p className="text-xs font-poppins font-semibold text-secondary text-center">
                      HTML & CSS
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={95}
                      gaugePrimaryColor="var(--primary)"
                      gaugeSecondaryColor="var(--secondary)"
                      className="sm:h-24 sm:w-24 h-16 w-16"
                    />
                    <p className="text-sm font-poppins font-semibold text-secondary text-center">
                      JavaScript
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <AnimatedCircularProgressBar
                      max={100}
                      min={0}
                      value={90}
                      gaugePrimaryColor="var(--primary)"
                      gaugeSecondaryColor="var(--secondary)"
                      className="sm:h-24 sm:w-24 h-16 w-16"
                    />
                    <p className="text-sm font-poppins font-semibold text-secondary text-center">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 sm:px-10 relative w-full overflow-hidden">
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
      <div className="h-fit flex flex-col antialiased items-center justify-center relative overflow-hidden w-full px-6 sm:px-10">
        <HeroParallax products={techStack} />
      </div>
    </div>
  );
}

export default About;