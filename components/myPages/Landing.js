import { motion } from "framer-motion";
import TechStack from "../techStack/TechStack";
import { TextAnimator } from "../TextAnimator";
import Container from "../wrappers/container";

export const Landing = () => {
  return (
    <Container>
      <div className="flex flex-col min-h-[60vh] cursor-default bg-blue justify-between">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <TechStack />
        </motion.div>
      </div>
    </Container>
  );
};
