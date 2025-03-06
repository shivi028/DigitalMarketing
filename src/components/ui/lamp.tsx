"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-[60vh] w-[50vw] flex-col items-center justify-center overflow-hidden bg-[#e6e6fa] rounded-md z-0 sm:w-full sm:h-screen",
        className
      )}
    >
      <div className="relative flex w-60 h-48 scale-y-110 items-center justify-center isolate z-0 mt-44">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-28 w-40 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-[#e6e6fa] h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 h-full left-0 bg-[#e6e6fa] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-28 w-40 bg-gradient-conic from-transparent via-transparent to-purple-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 h-full right-0 #b59dda bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#e6e6fa] h-20 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-20 w-full translate-y-8 scale-x-125 bg-[#ababec] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-20 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-16 w-40 -translate-y-1/2 rounded-full bg-purple-400 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "10rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-16 w-32 -translate-y-10 rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-40 -translate-y-12 bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-24 w-full -translate-y-28  "></div>
      </div>

      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-2">
        {children}
      </div>
    </div>
  );
};
