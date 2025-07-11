"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello, I&apos;m Mehmet Ali, a passionate Frontend Developer with a degree in Management Information Systems from Osmaniye Korkut Ata University,
       graduating in 2022. 
        I decided to pursue my
        passion for programming.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React,React Native, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. 
      </p>

      <p>
        <span className="italic">When I m not coding</span>, I enjoy playing
        video games, watching movies.
      </p>
    </motion.section>
  );
}
