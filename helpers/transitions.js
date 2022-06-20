export const fade = {
  initial: { opacity: 0, x: -200 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};
export const linesUp = {
  initial: { y: -600 },
  enter: {
    y: 0,
    transition: {
      duration: 2,
      delay: 0.4,
      type: "spring",
      bounce: 0.4,
    },
  },
  exit: {
    y: 600,
    transition: {
      duration: 2,
      delay: 0.4,
      type: "spring",
      bounce: 0.4,
    },
  },
};
export const linesDown = {
  initial: { y: 600 },
  enter: {
    y: 0,
    transition: {
      duration: 2,
      delay: 0.4,
      type: "spring",
      bounce: 0.4,
    },
  },
  exit: {
    y: -600,
    transition: {
      duration: 2,
      delay: 0.4,
      type: "spring",
      bounce: 0.4,
    },
  },
};
