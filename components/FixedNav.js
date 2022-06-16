import { motion, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const FixedNav = ({ page, setPage }) => {
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState("");
  const tabs = [
    {
      name: (
        <svg
          width={30}
          height={30}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 30V19.412h6V30h7.5V15.882H30L15 0 0 15.882h4.5V30H12Z"
            fill="#000"
          />
        </svg>
      ),
      id: 0,
    },
    {
      name: "About Me",
      id: 1,
    },
    {
      name: "Work",
      id: 2,
    },
    {
      name: "Contact Me",
      id: 3,
    },
  ];
  return (
    <AnimateSharedLayout>
      <motion.div
        onMouseLeave={() => setFocused(null)}
        className="grid grid-cols-2 rounded-xl gap-1 p-1"
      >
        {tabs.map((item) => (
          <motion.li
            onFocus={() => setFocused(item.id)}
            onMouseEnter={() => setFocused(item.id)}
            onClick={() => setPage(item.id)}
            className="list-none relative cursor-pointer flex justify-center items-center text-center p-2"
          >
            <span className="z-30 font-koulen p-[2px] font-semibold">
              {item.name}
            </span>
            {page === item.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-1 w-[75%] h-1 bg-gray z-10"
              ></motion.div>
            )}
            {focused === item.id && (
              <motion.div
                className="absolute top-0 bottom-0 left-0 right-0  bg-yellow rounded-xl w-full h-full "
                layoutId="hover"
              ></motion.div>
            )}
          </motion.li>
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};
