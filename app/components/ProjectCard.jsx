import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { TiArrowRightOutline } from "react-icons/ti";
function ProjectCard({ title, badge, link, description, details }) {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 h-full">
      <PinContainer title={title} href={link}>
        <div className="flex flex-col justify-center items-center gap-2 card-object w-80 rounded-2xl">
          <div className="flex flex-col items-start w-full">
            <h2 className="text-xl font-semibold font-poppins">{title}</h2>
            <p className="text-sm py-2 font-poppins text-muted">
              {description}
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              {(Array.isArray(badge) ? badge : []).map((item, index) => (
                <span
                  key={index}
                  className={`text-xs font-medium px-3 py-1.5 font-poppins backdrop-blur-md border transition-colors overflow-hidden bg-gradient-to-t border-r-0 duration-200 whitespace-nowrap from-muted/10 to-button/15 text-foreground hover:text-secondary border-button/20 rounded-3xl`}
                >
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 mt-3 w-full">
              {details.map((detail, index) => (
                <div className="flex gap-1.5 text-xs" key={index}>
                  <TiArrowRightOutline className="size-3 shrink-0 mt-0.5"/>
                  <p key={index} className="font-poppins text-muted">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard;
