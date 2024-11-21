import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import gurubaseImage from "@/public/gurubase.png";
import textaImage from "@/public/texta.png";
import cvImage from "@/public/cv.png";
import cactusImage from "@/public/cactus.png";

// Navigation links
export const LINKS = [
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

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/julian-carter-84a436337",
  github: "https://github.com/gold-goose",
  telegram: "https://t.me/julian623",
  resume: "/resume.pdf",
  email: "juliancarter.softdev@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Senior Full Stack Engineer @ Inmost",
    description:
      "Managed and enhanced a scalable e-commerce platform using React for the front-end and Kotlin for the back-end, incorporating micro front-ends to enhance modularity and reduce load times by 40%. Optimized front-end performance with Progressive Web App (PWA) technologies, service workers, and WebAssembly, leading to a 40% increase in mobile user engagement and offline capabilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022.10 - 2024.9",
  },
  {
    title: "Full Stack Developer @ Yalantis",
    description:
      "Developed and maintained GraphQL APIs and implemented GraphQL server solutions with Apollo Client for flexible data retrieval, improving application performance by 55%. Implemented a robust real-time capability leveraging the WebSocket protocol, significantly enhancing the application’s responsiveness and user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2020.1 - 2022.9",
  },
  {
    title: "Junior Web Developer @ Omisoft",
    description:
      "Architected and led the development of a high-traffic web application using Python (Django) for the back-end and React with TypeScript for the front-end, achieving a 50% improvement in user engagement through advanced features and a highly interactive UI. Enhanced front-end performance with lazy coding, code splitting, and advanced caching strategies, resulting in a 35% improvement in application load times and overall user satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2017.6 - 2019.12",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Cactus",
    description:
      "Cactus is an AI-powered underwriting platform that streamlines commercial real estate deal analysis, reducing the process time from hours to minutes.",
    tags: ["React", "TypeScript", "Tailwind", "OpenAI LLM", "LangChain"],
    imageUrl: cactusImage,
    projectUrl: "https://www.trycactus.com/",
  },
  {
    title: "License plate recognition",
    description: "Automated License Plate Recognition system using YOLO",
    tags: ["OpenCV", "YOLOv8", "PyTorch", "Cuda", "Ultralytics"],
    imageUrl: cvImage,
    projectUrl: "https://github.com/dreamjet31/Licence_Plate_Detection/",
  },
  {
    title: "Texta.ai",
    description:
      "Company bio generation tool based on the scraped data from LinkedIn. Used Puppeteer and Zenrows for web scraping.",
    tags: ["React", "Next.js", "OpenAI API", "LangChain", "Pinecone"],
    imageUrl: textaImage,
    projectUrl: "https://app.texta.ai/short-tools/company-bio",
  },
  {
    title: "GuruBase",
    description:
      "A platform that provides useful information on a variety of technical topics, including Kubernetes, JavaScript, Python, and more.",
    tags: ["React", "Next.js", "OpenAI", "GPT-4"],
    imageUrl: gurubaseImage,
    projectUrl: "https://gurubase.io/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Express",
  "Nest.js",
  "Django",
  "FastAPI",
  "Tensorflow",
  "PyTorch",
  "Keras",
  "Scikit-learn",
  "NLTK",
  "LangChain",
  "Pinecone",
  "ChatGPT",
  "Llama 3",
  "Selenium",
  "Puppeteer",
  "BeautifulSoup",
  "Scrapy",
] as const;

// Owner name
export const OWNER_NAME = "Julian Carter";
