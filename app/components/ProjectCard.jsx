import React from "react";
import Image from "next/image";
function ProjectCard({ image, title, description, badge }) {
  return (
    <div className="h-full min-h-[25rem] bg-secondary-foreground p-2 rounded-md border-2 border-secondary/15 shadow-md shadow-secondary/10 hover:shadow-secondary/20 transition-all duration-300  hover:scale-101">
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-start justify-start gap-2 w-full bg-black/40 p-1.5 rounded-t-md">
            <div className="bg-white/20 rounded-full h-3 w-3 "></div>
            <div className="bg-white/20 rounded-full h-3 w-3"></div>
            <div className="bg-white/20 rounded-full h-3 w-3"></div>
          </div>
          <Image src={image} alt={title} className="h-60 w-full object-cover rounded-b-md" />
        </div>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-xl font-bold font-roboto">{title}</h2>
          <div className="flex items-center gap-2 ">
            <span className="text-xs font-medium p-1 px-2 border-2 border-secondary/50 rounded-md text-muted-foreground/50 bg-muted-foreground/10">{badge}</span>
          </div>
        </div>
        
        <p className="text-sm font-roboto font-medium">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
