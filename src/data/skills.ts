import type { Skills, Skill } from "../types/skills";

import {
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiFlutter,
  SiPostgresql,
  SiFirebase,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiAndroidstudio,
  SiXml
} from "react-icons/si";

export const heroSkills: Skills[] = [
  {
    name: "Java",
    icon: FaJava,
    level: 90,
    category: "Backend",
    color: "#F89820",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    level: 85,
    category: "Backend",
    color: "#6DB33F",
  },
  {
    name: "Hibernate",
    icon: SiHibernate,
    level: 85,
    category: "Backend",
    color: "#59666C",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: 70,
    category: "Backend",
    color: "#339933",
  },

  {
    name: "React",
    icon: FaReact,
    level: 75,
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 80,
    category: "Frontend",
    color: "#F7DF1E",
  },

  {
    name: "Flutterr",
    icon: SiFlutter,
    level: 85,
    category: "Mobile",
    color: "#02569B",
  },
  {
    name: "XML",
    icon: SiXml,
    level: 85,
    category: "Mobile",
    color: "#ff0000"
  },

  {
    name: "Python",
    icon: FaPython,
    level: 70,
    category: "AI",
    color: "#3776AB",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    level: 60,
    category: "AI",
    color: "#FF6F00",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    level: 65,
    category: "AI",
    color: "#5C3EE8",
  },

  {
    name: "Oracle",
    icon: SiPostgresql,
    level: 85,
    category: "Database",
    color: "#F80000",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: 80,
    category: "Database",
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    level: 80,
    category: "Database",
    color: "#4479A1",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    level: 75,
    category: "Database",
    color: "#FFCA28",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    level: 70,
    category: "Tools",
    color: "#F05032",
  },
  {
    name: "Docker",
    icon: FaDocker,
    level: 55,
    category: "Tools",
    color: "#2496ED",
  },
];



export const skills: Skill[] = [
  // ===========================
  // Backend
  // ===========================

  {
    id: 1,
    name: "Java",
    icon: FaJava,
    color: "#F89820",
    level: 90,
    category: "Backend",
  },

  {
    id: 2,
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    level: 85,
    category: "Backend",
  },

  {
    id: 3,
    name: "Hibernate",
    icon: SiHibernate,
    color: "#59666C",
    level: 85,
    category: "Backend",
  },

  {
    id: 4,
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
    level: 70,
    category: "Backend",
  },

  // ===========================
  // Frontend
  // ===========================

  {
    id: 5,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    level: 75,
    category: "Frontend",
  },

  {
    id: 6,
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 85,
    category: "Frontend",
  },

  {
    id: 7,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 70,
    category: "Frontend",
  },

  // ===========================
  // Mobile
  // ===========================

  {
    id: 8,
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    level: 85,
    category: "Mobile",
  },

  // ===========================
  // Artificial Intelligence
  // ===========================

  {
    id: 9,
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    level: 75,
    category: "AI",
  },

  {
    id: 10,
    name: "OpenCV",
    icon: SiOpencv,
    color: "#5C3EE8",
    level: 70,
    category: "AI",
  },

  {
    id: 11,
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    level: 70,
    category: "AI",
  },

  // ===========================
  // Database
  // ===========================

  {
    id: 12,
    name: "Oracle",
    icon: SiPostgresql,
    color: "#F80000",
    level: 90,
    category: "Database",
  },

  {
    id: 13,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 85,
    category: "Database",
  },

  {
    id: 14,
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    level: 80,
    category: "Database",
  },

  {
    id: 15,
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    level: 80,
    category: "Database",
  },

  // ===========================
  // Tools
  // ===========================

  {
    id: 16,
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    level: 75,
    category: "Tools",
  },

  {
    id: 17,
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    level: 60,
    category: "Tools",
  },

  {
    id: 18,
    name: "VS Code",
    icon: SiAndroidstudio,
    color: "#007ACC",
    level: 95,
    category: "Tools",
  },

  {
    id: 19,
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    level: 95,
    category: "Tools",
  },
];