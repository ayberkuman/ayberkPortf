import Header from "@/components/wrappers/header";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { fade } from "@/helpers/transitions";

const contact = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div features={fade}>
        <Header />
        contact
      </m.div>
    </LazyMotion>
  );
};

export default contact;
