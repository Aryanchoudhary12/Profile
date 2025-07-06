import React from "react";
import Blogweb from "@/public/blog-web.png";
import Athletehub from "@/public/athletehub.jpg";
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
      <h1 className="text-4xl font-bold font-rubik text-center">
        MY <span className="text-secondary">WORKS</span>
      </h1>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-10 gap-4 w-fit  h-full p-4">
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
