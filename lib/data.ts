import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import doctordedi from "@/public/doctordedi.png"
import atmYerimVar from "@/public/atmYerimVar.png"
import adisyon from "@/public/foto2.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sesasis Information Technologies, Software Support Personel(Intern)",
    location: "Ankara, Turkey",
    
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Sesasis Information Technologies,Front-End Developer",
    location: "Ankara, Turkey",
    
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DoctorDedi",
    description:
      "An online platform with mobile and web interfaces that allows doctors and patients to make virtual appointments.",
    tags: ["React", "React Native", "PostgreSQL", "PrimeReact","Boostrap","Redux"],
    imageUrl: doctordedi,
  },
  {
    title: "ATM Yerim Var",
    description:
      "Promotional website designated for ATMs",
    tags: ["React", "CSS","PrimeReact","Figma"],
    imageUrl: atmYerimVar,
  },
  {
    title: "Restaurant Business Intelligence",
    description:
      "It is a React-based front-end project that we developed for taking orders and all billing transactions and tracking of received orders.",
    tags: ["React", "Redux","PrimeReact","PostgreSQL","Recoiljs"],
    imageUrl: adisyon,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PrimeReact",
  "PrimeFlex",
  "RecoilJs",
  "Redux",
  "PostgreSQL",
  
] as const;