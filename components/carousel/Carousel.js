import { motion } from "framer-motion";

import { useRef, useEffect, useState, MutableRefObject } from "react";
import images from "./assets/Images";
import Image from "next/image";

export const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      className="cursor-grab overflow-hidden relative flex"
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
              <Image
                className="w-full h-full rounded-3xl z-20 pointer-events-none"
                layout="responsive"
                width={1280}
                height={1920}
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
