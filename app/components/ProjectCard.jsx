import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
function ProjectCard({ image, title, badge, link, description }) {
  return (
    <div className="relative flex flex-col justify-between items-center gap-3 h-full w-80 bg-gray-800 p-3 rounded-lg project-card border-2 hover:bg-secondary-foreground border-secondary/10">
      <div className="flex flex-col justify-center items-center gap-2 card-object">
        <Image
          src={image}
          alt={title}
          width="auto"
          height="auto"
          priority
          className="h-72 w-full object-cover rounded-sm "
        />
        <div className="flex flex-col items-start w-full">
          <h2 className="text-lg font-normal font-rubik">{title}</h2>
          <p className="text-sm py-2 font-roboto text-gray-400">
            {description}
          </p>
          <div className="flex items-center flex-wrap gap-2 mt-1">
            {(Array.isArray(badge) ? badge : []).map((item, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-sm font-roboto
      ${
        item.name === "React"
          ? "bg-blue-300/20 text-blue-300"
          : item.name === "Next.js"
          ? "bg-gray-900 text-white"
          : item.name === "Tailwind"
          ? "bg-amber-300/20 text-amber-300"
          : item.name === "Postgres"
          ? "bg-primary/20 text-primary"
          : item.name === "Groq AI"
          ? "bg-secondary/20 text-muted"
          : item.name === "Shadcn"
          ? "bg-emerald-400/20 text-emerald-400"
          : "bg-muted-foreground/70 text-gray-800"
      }
    `}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center absolute -bottom-1.5 opacity-0 card-button">
        <p className="text-sm py-2 font-roboto text-gray-400 text-center">{description}</p>
        <Link href={link}>
          <button className="flex justify-center items-center gap-1 font-roboto font-semibold px-3  p-2 bg-primary/80 rounded-sm text-sm ">
            View More <ArrowRight className="h-5 w-5 stroke-3 icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
