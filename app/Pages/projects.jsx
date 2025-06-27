import React from "react";
import Athletehub from "@/public/athletehub.jpg";
import Blogweb from "@/public/blog-web.png";
import Issuetracker from "@/public/issue-tracker.png";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  const projects = [
    {
      index: 1,
      image: Athletehub,
      title: "Athlete Hub",
      description: " Athlete Hub is a full-stack web application designed to bring together athletes, coaches, doctors, and organizations into a single collaborative platform. It empowers athletes to monitor their fitness progress, communicate with health and training professionals, and receive personalized guidance - all in one place.",
      badge: "Web Development",
    },
    {
      index: 2,
      image: Blogweb,
      title: "Blog Website",
      description: " a dynamic and responsive blog website using React, Next.js, and Tailwind CSS, with a Node.js and Express backend connected to a PostgreSQL database.",
      badge: "Web Development",
    },
    {
      index: 3,
      image: Issuetracker,
      title: "Issue Tracker",
      description: "A full-stack Issue Tracking App built with Next.js, Tailwind CSS, Redux UI, Node.js, Prisma, and Firebase, allowing users to log, track, and visualize issues in real-time using interactive tables and graphs.",
      badge: "Web Development",
    },
  ];
  return (
    <div className="mt-6 flex flex-col justify-center items-center mb-2" id="Projects">
      <h1 className="text-4xl font-bold font-rubik text-center mt-6">
        My Projects
      </h1>
      <div className="flex items-center justify-center w-60 h-1 bg-white/20 rounded-2xl mt-1">
        <div className="w-6/12 h-full bg-secondary rounded-2xl"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-4 mt-6 w-full max-w-screen-xl place-items-center h-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.index}
            index={project.index}
            image={project.image}
            title={project.title}
            description={project.description}
            badge={project.badge}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
