import Footer from "@/components/wrappers/footer";
import Container from "@/components/wrappers/container";
import FancyLink from "@/components/wrappers/fancyLink";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export const Contact = () => {
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
                Find <span className="text-yellow">Me</span>
              </h1>
              <div className="content max-w-3xl mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=ayberkuman1@gmail.com&tf=1"
                >
                  Mail me
                </a>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </>
  );
};
