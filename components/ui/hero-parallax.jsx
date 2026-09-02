"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

// `products` — array of category groups:
// [{ category: "Languages", items: [{ title, image?, iconUrl?, link? }, ...] }, ...]
export const HeroParallax = ({ products }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Progress runs for as long as the whole section is anywhere in the
    // viewport, so rings keep rotating the entire time you scroll through it.
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };

  // Section fade/slide-in as it enters view.
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [0.2, 1]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [40, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="w-full py-10 antialiased relative flex flex-col items-center"
    >
      <motion.div
        style={{ translateY, opacity }}
        className="w-full flex flex-col items-center gap-14"
      >
        {products.map((group, idx) => (
          <TechRing
            key={group.category}
            group={group}
            scrollYProgress={scrollYProgress}
            reverse={idx % 2 === 1}
          />
        ))}
      </motion.div>
    </div>
  );
};

const TechRing = ({ group, scrollYProgress, reverse }) => {
  const count = group.items.length;

  const radius = Math.min(170, Math.max(110, count * 14));
  const ringSize = radius * 2 + 96; // leave room for icon bubbles at the rim
  const iconSize = 64;


  const rotateRaw = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [0, -360] : [0, 360]
  );
  const rotate = useSpring(rotateRaw, { stiffness: 90, damping: 20, mass: 0.6 });

  const counterRotate = useTransform(rotate, (r) => -r);

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-lg sm:text-xl font-poppins font-bold mb-6 px-2 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent text-center">
        {group.category}
      </h3>
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: ringSize, height: ringSize, maxWidth: "90vw" }}
      >
        <div
          className="absolute rounded-full border border-white/10"
          style={{ width: radius * 2, height: radius * 2 }}
        />

        <motion.div className="absolute inset-0" style={{ rotate }}>
          {group.items.map((item, i) => {
            const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <motion.div
                key={item.title}
                className="absolute top-1/2 left-1/2"
                style={{
                  x: x - iconSize / 2,
                  y: y - iconSize / 2,
                  width: iconSize,
                  height: iconSize,
      
                }}
              >
                <motion.div style={{ rotate: counterRotate }} className="h-full w-full">
                  <IconBubble item={item} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="h-3 w-3 rounded-full bg-secondary/60 blur-[2px]" />
      </div>
    </div>
  );
};

const IconBubble = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="group/product h-full w-full relative"
    >
      <a
        href={item.link || "#"}
        target={item.link ? "_blank" : undefined}
        rel={item.link ? "noopener noreferrer" : undefined}
        className="flex items-center justify-center h-full w-full rounded-full bg-white/5 border border-white/10 shadow-lg group-hover/product:shadow-2xl group-hover/product:border-secondary/60 overflow-hidden transition-colors"
      >
        {item.image ? (
          <Image
            src={item.image}
            height={64}
            width={64}
            className="object-contain h-full w-full p-2.5"
            alt={item.title}
          />
        ) : item.iconUrl ? (
          <img
            src={item.iconUrl}
            alt={item.title}
            className="object-contain h-full w-full p-2.5 brightness-0 invert"
            loading="lazy"
          />
        ) : null}
      </a>
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs text-white bg-black/80 px-2 py-0.5 rounded opacity-0 group-hover/product:opacity-100 transition-opacity z-10">
        {item.title}
      </span>
    </motion.div>
  );
};