import TechStack from "@/components/techStack/TechStack";
import { TextAnimator } from "@/components/TextAnimator";
import Container from "@/components/wrappers/container";
import Header from "@/components/wrappers/header";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Home() {
  const pages = ["Home", "About Me", "Work", "Contact"];
  return (
    <>
      <NextSeo title="Home" />
      <Header pages={pages} />
      <LazyMotion features={domAnimation}>
        <m.main variants={fade} className="mb-12 w-full md:mb-16 xl:mb-24">
          <Container>
            <div className="flex flex-col cursor-default gap-10 justify-between">
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
                className="col-start-1 col-span-full pt-2 relative md:transform md:translate-y-3 lg:translate-y-10"
              >
                <TechStack />
              </motion.div>
            </div>
          </Container>
          <m.main
            variants={fade}
            className="mt-12 h-screen w-full md:mt-16 xl:mt-24"
          >
            <Container>
              <div className="flex items-end h-96">
                <div id={pages[1]}>about</div>
              </div>
            </Container>
          </m.main>
        </m.main>
      </LazyMotion>
    </>
  );
}
