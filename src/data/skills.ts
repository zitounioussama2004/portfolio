import type { Skill } from "../types/skills";

import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
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
  SiPostman,
  SiAndroidstudio,
  SiXml
} from "react-icons/si";

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

  // ===========================
  // Mobile
  // ===========================

  {
    id: 7,
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    level: 85,
    category: "Mobile",
  },

  {
    id: 8,
    name: "XML",
    icon: SiXml,
    color: "#ec0202",
    level:85,
    category: "Mobile"
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