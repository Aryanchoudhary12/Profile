import React from "react";
import Athletehub from "@/public/athletehub.jpg";
import Blogweb from "@/public/blog-web.png";
import trendwise from "@/public/trendwise.png";
import Issuetracker from "@/public/issue-tracker.png";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  const projects = [
    {
      index: 1,
      image: Athletehub,
      title: "Athlete Hub",
      badge: [{ name: "React" }, { name: "Tailwind" }],
      link:"/"
    },
    {
      index: 2,
      image: Blogweb,
      title: "Blog Website",
      badge: [{ name: "React" }, { name: "Tailwind" }, { name: "Postgres" }],
      link: "/",
    },
    {
      index: 3,
      image: Issuetracker,
      title: "Issue Tracker",
      badge: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Shadcn" }],
      link: "https://issue-tracker-wine-five.vercel.app/",
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
    },
  ];
  return (
    <div
      className="mt-6 flex flex-col justify-center items-center mb-2"
      id="Projects"
    >
       <h1 className="text-6xl font-bold font-rubik text-center">MY WORKS</h1>
        <div className="flex items-center justify-center w-52 h-2 bg-white/20 rounded-2xl mt-1">
          <div className="w-full h-full bg-secondary rounded-2xl underline"></div>
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-4 mt-6 w-full max-w-screen-xl place-items-center h-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.index}
            index={project.index}
            image={project.image}
            title={project.title}
            badge={project.badge}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
