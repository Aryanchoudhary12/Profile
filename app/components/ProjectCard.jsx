import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
function ProjectCard({ image, title, badge, link }) {
  return (
    <div className="relative flex flex-col justify-between items-center gap-3 h-full w-80 bg-secondary-foreground p-3 rounded-lg project-card border-2 border-secondary/10">
      <div className="flex flex-col items-start gap-2 card-object">
        <Image
          src={image}
          alt={title}
          width={340}
          height={288}
          className="h-72 w-full object-cover rounded-sm "
        />
        <div className="flex flex-col items-start w-full">
          <h2 className="text-lg font-semibold font-roboto ">{title}</h2>
          <div className="flex items-center flex-wrap gap-2 mt-1">
            {(Array.isArray(badge) ? badge : []).map((item, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-full font-roboto
      ${
        item.name === "React"
          ? "bg-blue-300/20 text-blue-400"
          : item.name === "Next.js"
          ? "bg-gray-900 text-white"
          : item.name === "Tailwind"
          ? "border-1 text-secondary"
          : item.name === "Postgres"
          ? "border-1 text-primary"
          : item.name === "Groq AI"
          ? "bg-secondary/30 text-muted"
          : "bg-muted-foreground text-gray-800"
      }
    `}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Link href={link} className="absolute -bottom-1.5 opacity-0 card-button">
        <button className="flex justify-center items-center gap-1 font-poppins font-medium  p-2 bg-button rounded-sm text-sm ">
          View More <ArrowRight className="h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;
