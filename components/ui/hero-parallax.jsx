"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";


export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0], [0, 50]), springConfig);
  return (
    (<div
      ref={ref}
      className="h-full py-4 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:100px] [transform-style:preserve-3d] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <motion.div
        style={{
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10 overflow-hidden ">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={product.title}
      className="group/product h-20 w-20 sm:h-24 sm:w-24 relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.image}
          height="800"
          width="800"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
