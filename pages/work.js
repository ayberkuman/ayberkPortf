import Header from "@/components/wrappers/header";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fade } from "@/helpers/transitions";

const work = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={fade}>
        <Header />
        work
      </m.div>
    </LazyMotion>
  );
};

export default work;
