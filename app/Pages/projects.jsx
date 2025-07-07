import React from "react";
import Blogweb from "@/public/blog-web.png";
import Athletehub from "@/public/athletehub.jpg";
import trendwise from "@/public/trendwise.png";
import Issuetracker from "@/public/issue-tracker.png";
import ProjectCard from "../components/ProjectCard";
import { SparklesCore } from "@/components/ui/sparkles";
function Projects() {
  const projects = [
    {
      index: 1,
      image: Athletehub,
      title: "Athlete Hub",
      badge: [{ name: "React" }, { name: "Tailwind" }],
      link: "/",
      description:
        "Track training, monitor progress, connect with sports community, and share achievements.",
    },
    {
      index: 2,
      image: Blogweb,
      title: "Blog Website",
      badge: [{ name: "React" }, { name: "Tailwind" }, { name: "Postgres" }],
      link: "/",
      description: "A platform to share blog posts.",
    },
    {
      index: 3,
      image: Issuetracker,
      title: "Issue Tracker",
      badge: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Shadcn" }],
      link: "https://issue-tracker-wine-five.vercel.app/",
      description: "Report and manage project issues.",
    },
    {
      index: 4,
      image: trendwise,
      title: "TrendWise",
      badge: [
        { name: "Next.js" },
        { name: "Tailwind" },
        { name: "Shadcn" },
        { name: "Groq AI" },
      ],
      link: "https://trendwise-navy.vercel.app/",
      description: "Create and share AI-generated blogs.",
    },
  ];
  return (
    <div
      className="mt-6 flex flex-col justify-center items-center mb-2"
      id="Projects"
    >
      <h1 className="text-4xl font-bold font-rubik text-center mt-2">
        MY <span className="text-secondary">WORKS</span>
      </h1>
      <div className="w-60 h-10 relative">
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-10"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  mt-10 gap-4 w-fit  h-full p-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              index={project.index}
              image={project.image}
              title={project.title}
              badge={project.badge}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
