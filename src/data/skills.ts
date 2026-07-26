import type { Skill } from "../types/skills";

import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiFlutter,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiAndroidstudio,
  SiXml,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiTailwindcss,
  SiVuedotjs,
  SiIntellijidea,
} from "react-icons/si";

export const skills: Skill[] = [

  // ==========================
  // Backend
  // ==========================

  {
    id: 1,
    name: "Java",
    icon: FaJava,
    color: "#F89820",
    level: 95,
    category: "Backend",
  },

  {
    id: 2,
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: 92,
    category: "Backend",
  },

  {
    id: 3,
    name: "Hibernate",
    icon: SiHibernate,
    color: "#59666C",
    level: 90,
    category: "Backend",
  },

  {
    id: 4,
    name: "JPA",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: 90,
    category: "Backend",
  },

  {
    id: 5,
    name: "REST API",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: 90,
    category: "Backend",
  },

  {
    id: 6,
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
    level: 75,
    category: "Backend",
  },

  {
    id: 7,
    name: "PHP",
    icon: FaPhp,
    color: "#777BB4",
    level: 80,
    category: "Backend",
  },

  // ==========================
  // Frontend
  // ==========================

  {
    id: 8,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 88,
    category: "Frontend",
  },

  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 80,
    category: "Frontend",
  },

  {
    id: 10,
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 90,
    category: "Frontend",
  },

  {
    id: 11,
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    level: 95,
    category: "Frontend",
  },

  {
    id: 12,
    name: "CSS",
    icon: SiCss,
    color: "#1572B6",
    level: 90,
    category: "Frontend",
  },

  {
    id: 13,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    level: 90,
    category: "Frontend",
  },

  {
    id: 14,
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "#42B883",
    level: 75,
    category: "Frontend",
  },

  // ==========================
  // Mobile
  // ==========================

  {
    id: 15,
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    level: 88,
    category: "Mobile",
  },

  {
    id: 16,
    name: "Android (Java)",
    icon: SiAndroidstudio,
    color: "#3DDC84",
    level: 90,
    category: "Mobile",
  },

  {
    id: 17,
    name: "XML",
    icon: SiXml,
    color: "#FF5722",
    level: 95,
    category: "Mobile",
  },

  // ==========================
  // Artificial Intelligence
  // ==========================

  {
    id: 18,
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    level: 85,
    category: "Artificial Intelligence",
  },

  {
    id: 19,
    name: "OpenCV",
    icon: SiOpencv,
    color: "#5C3EE8",
    level: 80,
    category: "Artificial Intelligence",
  },

  {
    id: 20,
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    level: 75,
    category: "Artificial Intelligence",
  },

  // ==========================
  // Database
  // ==========================

  {
    id: 21,
    name: "Postgres Database",
    icon: SiPostgresql,
    color: "#F80000",
    level: 95,
    category: "Database",
  },

  {
    id: 22,
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    level: 90,
    category: "Database",
  },

  {
    id: 23,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 88,
    category: "Database",
  },

  // ==========================
  // Development Tools
  // ==========================

  {
    id: 24,
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 90,
    category: "Development Tools",
  },

  {
    id: 25,
    name: "GitHub",
    icon: FaGithub,
    color: "#181717",
    level: 90,
    category: "Development Tools",
  },

  {
    id: 26,
    name: "VS Code",
    icon: SiAndroidstudio,
    color: "#007ACC",
    level: 98,
    category: "Development Tools",
  },

  {
    id: 27,
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    color: "#FE315D",
    level: 95,
    category: "Development Tools",
  },

  {
    id: 28,
    name: "Android Studio",
    icon: SiAndroidstudio,
    color: "#3DDC84",
    level: 95,
    category: "Development Tools",
  },

  {
    id: 29,
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    level: 95,
    category: "Development Tools",
  },

];