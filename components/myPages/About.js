import Footer from "@/components/wrappers/footer";
import Container from "@/components/wrappers/container";
import FancyLink from "@/components/wrappers/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export const About = () => {
  return (
    <>
      <NextSeo title="About" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div className="p-2" variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">
                About Me
              </h1>
              <div className="content max-w-3xl mb-4">
                <p>
                  Frontend developer with 2+ years of experience designing and
                  building responsive web design and web applications.
                  Proficient with JS Frameworks, with extensive knowledge of UX
                  and user psychology. Specialized in ReactJs, NextJs and
                  responsive design. Experience with animation libraries, modern
                  web development architecture that emphasizes the use of micro
                  interactions and cool animations.
                </p>

                <p>
                  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </>
  );
};
