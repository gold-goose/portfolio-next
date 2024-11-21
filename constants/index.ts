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
  linkedin: "https://www.linkedin.com/in/sanidhyy",
  github: "https://github.com/dreamjet31",
  telegram: "https://t.me/jwson61",
  resume: "/resume.pdf",
  email: "jaychu259@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Full Stack AI Engineer @ Qupital",
    description:
      "Developed and implemented various AI and machine learning solutions such as a product recommendation system, an online chatbot, a blog title generator and an advanced image generator, utilizing technologies like ChatGPT and PyTorch, which led to significant improvements in user engagement, system efficiency, and accuracy of the NLP models; also built a web scraping engine to amass a comprehensive dataset for the company.",
    icon: React.createElement(CgWorkAlt),
    date: "2022.3 - 2024.8",
  },
  {
    title: "ML Engineer @ Xenyo",
    description:
      "Successfully developed advanced models for emotion recognition and speech enhancement, and also designed systems for mask detection and super resolution, significantly improving efficiency and accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "2018.5 - 2022.2",
  },
  {
    title: "Junior Developer @ Tai Tong Organic Eco Park",
    description:
      "Contributed to projects ranging from an AI-based leaf disease detection system that improved agricultural efficiency by 12%, to various game designs like Tetris using reinforcement learning, and also upgraded the company's landing website.",
    icon: React.createElement(CgWorkAlt),
    date: "2017.5 - 2018.4",
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
export const OWNER_NAME = "Jay Chu";
