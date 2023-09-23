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
    description:"HTML, CSS, Javascript,TailwindCSS, Boostrap5, PrimeReact,Web Services",
    icon: React.createElement(FaReact),
    date: "2021 - 3 Months",
  },
  {
    title: "Osmaniye Korkut Ata Universitesi",
    location: "Osmaniye, Turkey",
    description:"Managment Informations Systems",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  
  {
    title: "Sesasis Information Technologies,Frontend Developer",
    location: "Ankara, Turkey",
    description:
      "React, React Native, Next.js, Redux, RecoilJs, Router, TailwindCSS,Boostrap5, PrimeReact, PrimeFlex ,Postman, Web Services, PostgreSQL, MongoDB, Git, Github, Figma,Adobe Photoshop ",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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