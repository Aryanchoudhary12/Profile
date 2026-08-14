"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, heading, subheading }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 15%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-poppins" ref={containerRef}>
      {(heading || subheading) && (
        <div className="w-full flex flex-col">
          {subheading && (
            <p className="text-sm font-medium text-muted max-w-xl">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div ref={ref} className="relative w-full mx-auto pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-32 self-start max-w-[6rem] sm:max-w-xs md:w-full">
              <div className="h-9 w-9 absolute left-0 md:left-0 rounded-full bg-background border border-button/30 flex items-center justify-center shrink-0">
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
              </div>
              {item.eyebrow && (
                <p className="hidden md:block md:pl-12 text-xs font-semibold tracking-wide uppercase text-muted">
                  {item.eyebrow}
                </p>
              )}
            </div>

            <div className="relative pl-16 pr-2 md:pl-4 w-full">
              {item.eyebrow && (
                <p className="md:hidden text-xs font-semibold tracking-wide uppercase text-muted mb-1">
                  {item.eyebrow}
                </p>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-4 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-button/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-secondary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
