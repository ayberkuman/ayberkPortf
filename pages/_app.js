import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SEO from "@/helpers/seo.config";
import { CustomCursor } from "@/components/customCursor/CustomCursor";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <CustomCursor />
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
