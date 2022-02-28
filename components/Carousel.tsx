import { motion } from "framer-motion";

import { useRef, useEffect, useState, MutableRefObject } from "react";
import images from "../assets/images";
import Image from "next/image";

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      className="cursor-grab  overflow-hidden"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex "
      >
        {images.map((x, index) => {
          return (
            <motion.div
              className="min-h-[20rem] min-w-[22rem] p-10"
              key={index}
            >
              <img
                className="w-full h-full rounded-3xl pointer-events-none"
                src={x.src}
                alt="hey"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
