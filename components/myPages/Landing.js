import { motion } from "framer-motion";
import TechStack from "../techStack/TechStack";
import { TextAnimator } from "../TextAnimator";
import Container from "../wrappers/container";
import { linesUp, linesDown } from "@/helpers/transitions";
import { Carousel } from "../carousel/Carousel";

export const Landing = () => {
  return (
    <Container>
      <div className="flex flex-col min-h-[70vh] p-2 overflow-hidden relative cursor-default justify-between">
        <TextAnimator
          text={[
            `Hi, I'm <span>Ayberk</span>`,
            `Hi, I'm a <span>Frontend Developer</span>`,
            `Nice to meet <span>you!</span>`,
          ]}
          textSize="text-4xl sm:text-5xl lg:text-6xl"
          breakText={true}
          extraStyle="md:pt-14 lg:pt-16 text-black"
        />
        <motion.div className="self-center absolute bottom-0 h-full flex justify-end gap-48 w-4/6">
          <Line variants={linesUp} />
          <Line variants={linesDown} down />
          <Line variants={linesUp} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <TechStack />
        </motion.div>
      </div>
      <Carousel />
    </Container>
  );
};

const Line = ({ variants, down }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`w-1 bg-black flex justify-center relative h-[50vh] ${
        down ? "self-end" : "items-end"
      }`}
    >
      <motion.div
        whileHover={{
          width: 100,
          height: 100,
          borderRadius: "20px",
          backgroundColor: "#FEC601",
        }}
        initial={{ width: 0, height: 0 }}
        animate={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          transition: { delay: 0.8, duration: 0.5 },
        }}
        className="absolute bg-black "
      ></motion.div>
    </motion.div>
  );
};
