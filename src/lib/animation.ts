import type { Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const SlideUp = (delay: number): Variants => ({
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, delay, ease } },
});

export const SlideLeft = (delay: number): Variants => ({
  initial: { x: 80, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6, delay, ease } },
});

export const SlideRight = (delay: number): Variants => ({
  initial: { x: -80, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6, delay, ease } },
});

export const FadeIn = (delay: number): Variants => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, delay } },
});

export const ScaleUp = (delay: number): Variants => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, delay, ease } },
});

export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};
