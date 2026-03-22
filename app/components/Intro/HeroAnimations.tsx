"use client";

import { motion } from "framer-motion";

interface HeroAnimationsProps {
  aboutMe: string;
}

const HeroAnimations = ({ aboutMe }: HeroAnimationsProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-sm font-medium tracking-widest uppercase text-indigo-400">
          Welcome to my portfolio
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
      >
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Prasoon
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
      >
        {aboutMe}
      </motion.p>
    </>
  );
};

export default HeroAnimations;
