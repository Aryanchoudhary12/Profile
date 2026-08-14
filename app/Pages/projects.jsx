import React from "react";
import ProjectCard from "../components/ProjectCard";
import { SparklesCore } from "@/components/ui/sparkles";
function Projects() {
  const projects = [
    {
      index: 1,
      title: "SportsBet",
      badge: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "GraphQL" },
        { name: "Redis" },
        { name: "Kafka" },
        { name: "Agentic AI" },
      ],
      link: "https://sportsbet-ashen.vercel.app/",
      description:
        "A sports betting and stock application with real-time data, event-driven services, and AI-powered insights.",
      details: [
        "SportsBet is a betting and stock platform providing real-time market and sports data with interactive user experiences.",
        "Built using GraphQL, Redis, Kafka, and Agentic AI for scalable data processing, real-time communication, and intelligent insights.",
      ],
    },
    {
      index: 2,
      title: "Athlete Hub",
      badge: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Groq AI" },
        { name: "Node JS" },
        { name: "Prisma ORM" },
        { name: "PostgreSQL" },
        { name: "Groq AI" },
      ],
      link: "https://athletehub-ecru.vercel.app/",
      description:
        "A platform for athletes to track training, monitor performance, manage finances, and connect with coaches and doctors.",
      details: [
        "Athlete Hub helps athletes manage training, performance, expenses, and earnings through a simple dashboard.",
        "Built with React and Tailwind CSS, with AI-powered financial assistance using Groq AI.",
      ],
    },

    {
      index: 3,
      title: "Debatrix",
      badge: [
        { name: "Next JS" },
        { name: "TypeScript" },
        { name: "Node JS" },
        { name: "Prisma ORM" },
        { name: "Redis" },
        { name: "GraphQL" },
        { name: "Livekit" },
        { name: "Groq AI" },
      ],
      link: "https://debatrix-1.onrender.com",
      description:
        "A debate platform where users can participate in discussions, express opinions, and engage with different perspectives.",
      details: [
        "Debatrix is a discussion and debate platform designed to encourage meaningful conversations and opinion sharing.",
        "Built using Next JS, TypeScript, Node JS, Prisma ORM, and MongoDB with a responsive modern interface.",
      ],
    },
    {
      index: 4,
      title: "Singergy",
      badge: [
        { name: "Next JS" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Nest JS" },
        { name: "GraphQL" },
        { name: "Redis" },
        { name: "Prisma ORM" },
        { name: "WebRTC" },
      ],
      link: "/",
      description:
        "A collaborative singing platform where users create jam rooms, sing together, and compete in singing battles.",
      details: [
        "Singergy enables users to create real-time jam rooms, sing collaboratively, and compete with others in singing battles.",
        "Built with Next.js, TypeScript, Tailwind CSS, Nest.js, GraphQL, Redis, Prisma ORM, WebRTC, and MongoDB.",
      ],
    },

    {
      index: 5,
      title: "Samwad",
      badge: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Socket.io" },
        { name: "Prisma ORM" },
        { name: "MongoDB" },
      ],
      link: "/",
      description:
        "A real-time chat application for instant messaging and seamless communication between users.",
      details: [
        "Samwad is a real-time chat application supporting instant messaging and interactive conversations.",
        "Built using Next.js, TypeScript, Node.js, Express.js, Socket.io, Prisma ORM, and MongoDB.",
      ],
    },
  ];
  return (
    <div
      className="mt-6 flex flex-col justify-center items-start mb-2 p-4"
      id="Projects"
    >
      <div className="pl-4 max-w-10/12">
        <p className="font-poppins font-medium text-lg text-gray-300">
          latest Works
        </p>
        <h1 className="text-4xl font-bold font-rubik  text-left">Projects.</h1>
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
        <p className="font-poppins font-medium text-base mb-10 text-gray-400">
          A collection of personal and academic projects that showcase my skills
          in full-stack development, UI/UX design, and problem-solving. Each
          project reflects my commitment to building responsive, user-friendly,
          and performance-optimized web applications. From interactive
          interfaces to scalable backend systems, these works demonstrate both
          creativity and technical expertise.
        </p>
      </div>
      <div className="flex justify-center items-start w-full mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-10 h-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              index={project.index}
              title={project.title}
              badge={project.badge}
              link={project.link}
              description={project.description}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
