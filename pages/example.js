import Container from "@/components/wrappers/container";
import Footer from "@/components/wrappers/footer";
import Header from "@/components/wrappers/header";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
const Example = () => {
  return (
    <>
      <NextSeo title="About" />
      <Header />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.div variants={fade}>
            <Container>
              <div>hello</div>
            </Container>
          </m.div>
        </m.div>
      </LazyMotion>

      <Footer />
    </>
  );
};

export default Example;
