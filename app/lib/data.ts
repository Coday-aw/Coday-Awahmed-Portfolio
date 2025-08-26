import StayBnbImage from "@/public/StayBnb.png";
import movieTrackerImg from "@/public/MovieTracker.png";
import SnipSaverImg from "@/public/SnipSaver.png";
import QuizlyImg from "@/public/Quizly.png";
import { SiClerk } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCss } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";

export const links = [
  {
    title: "Home",
    href: "#Home",
  },
  {
    title: "About",
    href: "#About",
  },
  {
    title: "Projects",
    href: "#Projects",
  },
  {
    title: "Skills",
    href: "#Skills",
  },
] as const;

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const projectsData = [
  {
    title: "Snip Saver",
    description:
      "Effortlessly organize your code snippets and components in one place.",
    tags: ["Nextjs", "Tailwind", "TypeScript", "Supabase", "Clerk"],
    imageUrl: SnipSaverImg,
    gitHubUrl: "https://github.com/Coday-aw/SnipSaver",
    demoUrl: "https://snip-saver.vercel.app/",
  },
  {
    title: "Quizly",
    description:
      "A quiz app that allows you to create and take quizzes on various topics.",
    tags: ["Next.js", "Tailwind", "MongoDB", "Node.js", "Typescript"],
    imageUrl: QuizlyImg,
    gitHubUrl: "https://github.com/Coday-aw/Quizly",
    demoUrl: "https://quizly-two.vercel.app/",
  },
  {
    title: "StayBnb",
    description:
      "A clone of the popular website Airbnb. It has features like authentication, booking and more.",
    tags: ["Typescript", "Tailwind", "Next.js", "Firebase", "Clerk"],
    imageUrl: StayBnbImage,
    gitHubUrl: "https://github.com/Coday-aw/StayBnb",
    demoUrl: "https://stay-bnb-eta.vercel.app/",
  },
  {
    title: "Movie Tracker",
    description:
      "A movie tracker app that helps you keep track of all the trending,upcoming and top rated movies.",
    tags: ["Next.js", "Tailwind", "JavaScript", "Framer-motion"],
    imageUrl: movieTrackerImg,
    gitHubUrl: "https://github.com/Coday-aw/MovieTracker",
    demoUrl: "https://movie-tracker-lake.vercel.app/",
  },
] as const;

export const skills = [
  { name: "React", emoji: FaReact, color: "#61DAFB" },
  { name: "TypeScript", emoji: BiLogoTypescript, color: "#3178C6" },
  { name: "Next.js", emoji: RiNextjsFill, color: "#000000" },
  { name: "Nuxt.js", emoji: SiNuxtdotjs, color: "#4FC08D" },
  { name: "Vue.js", emoji: SiClerk, color: "#4FC08D" },
  { name: "CSS/Sass", emoji: PiFileCss, color: "#2965F1" },
  { name: "JavaScript", emoji: IoLogoJavascript, color: "#F7DF1E" },
  { name: "Node.js", emoji: FaNodeJs, color: "#339933" },
  { name: "Tailwind CSS", emoji: RiTailwindCssFill, color: "#38BDF8" },
  { name: "HTML5", emoji: FaHtml5, color: "#E34F26" },
  { name: "MongoDB", emoji: SiMongodb, color: "#47A248" },
  { name: "Express.js", emoji: SiExpress, color: "#000000" },
  { name: "Firebase", emoji: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", emoji: RiSupabaseFill, color: "#3ECF8E" },
  { name: "Redux", emoji: SiRedux, color: "#764ABC" },
];
