import type { Variants } from "framer-motion";

export const animationsConfig: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  },
  hoverScale: {
    rest: { scale: 1 },
    hover: {
      scale: 1.04,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.96 },
  },
  cardHover: {
    rest: { y: 0 },
    hover: {
      y: -6,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  },
};
