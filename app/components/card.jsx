import React from "react";
import Image from "next/image";
function Card({ index, image, title, description }) {
  return (
    <div className=" card relative h-32 w-full">
      <div className="  bg-secondary-foreground p-4 h-[calc(100%-4px)] w-[calc(100%-4px)] absolute top-[2px] left-[2px] rounded-md  border border-[rgba(255,255,255,0.10)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
        <p className="text-right font-bold text-lg">{index}.</p>
        <div className="flex items-center gap-4">
          <Image src={image} alt={title} className="h-12 w-12 object-cover"/>
          <div>
            <h2 className="text-xl font-bold font-roboto">{title}</h2>
            <p className="text-sm font-roboto font-medium">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
