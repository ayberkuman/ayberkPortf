import { Landing } from "@/components/myPages/Landing";
import { About } from "@/components/myPages/About";
import { Contact } from "@/components/myPages/Contact";
import { Work } from "@/components/myPages/Work";
import Header from "@/components/wrappers/header";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <>
      <NextSeo title="Home" />
      <Header page={page} setPage={setPage} />
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fade}
          className="mb-12 w-full md:mb-16 xl:mb-24"
        >
          <AnimatePresence>
            {page === 0 && <Landing />}
            {page === 1 && <About />}
            {page === 2 && <Work />}
            {page === 3 && <Contact />}
          </AnimatePresence>
        </m.main>
        <Link href="/example">
          <button>Click</button>
        </Link>
      </LazyMotion>
    </>
  );
}
