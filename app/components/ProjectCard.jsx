import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";
function ProjectCard({ image, title, badge, link, description }) {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 h-96 mb-10">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full tracking-tight flex-col justify-center items-center gap-2 card-object w-76 rounded-2xl">
          <Image
            src={image}
            alt={title}
            width="auto"
            height="auto"
            priority
            className="h-72 w-72 object-cover rounded-lg "
          />
          <div className="flex flex-col items-start w-full">
            <h2 className="text-xl font-semibold font-poppins">{title}</h2>
            <p className="text-sm py-2 font-roboto text-gray-400">
              {description}
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              {(Array.isArray(badge) ? badge : []).map((item, index) => (
                <span
                  key={index}
                  className={`text-sm font-medium py-1  font-poppins
      ${
        item.name === "React"
          ? " text-blue-300"
          : item.name === "Next.js"
          ? " text-white"
          : item.name === "Tailwind"
          ? " text-cyan-300"
          : item.name === "Postgres"
          ? " text-primary"
          : item.name === "Groq AI"
          ? " text-muted"
          : item.name === "Shadcn"
          ? " text-emerald-400"
          : " text-gray-300"
      }
    `}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard;
