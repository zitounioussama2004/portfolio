import type { Experience } from "../types/experience";

export const experience: Experience[] = [

    {

        id: 1,

        company: "Open To Work",

        role: "Software Engineer",

        start: "2026",

        end: "Present",

        location: "Algeria",

        description:
            "Actively seeking full-time opportunities as a Software Engineer. Capable of independently designing and developing complete software solutions, including frontend, backend, mobile applications, databases, and AI-powered systems. Passionate about building scalable, maintainable, and high-performance applications using modern technologies.",

        technologies: [

            { name: "Java", color: "#F89820" },

            { name: "Spring Boot", color: "#6DB33F" },

            { name: "React", color: "#61DAFB" },

            { name: "Python", color: "#FFD43B" },

            { name: "Flutter", color: "#42A5F5" }

        ]

    },

    {

        id: 2,

        company: "University Constantine 2 Abdelhamid Mehri",

        role: "Software Engineer | Graduation Project – VALORIX",

        start: "2025",

        end: "2026",

        location: "Constantine, Algeria",

        description:
            "Designed, architected and developed VALORIX entirely independently, an intelligent platform for waste collection and recycling. Built the complete solution from scratch, including frontend, backend, mobile application, database architecture and AI integration. Implemented REST APIs, authentication, data management, and intelligent waste classification while applying modern software engineering principles.",

        projectSlug: "valorix",

        technologies: [

            { name: "Java", color: "#F89820" },

            { name: "Spring Boot", color: "#6DB33F" },

            { name: "Hibernate", color: "#59666C" },

            { name: "JPA", color: "#6DB33F" },

            { name: "Oracle", color: "#F80000" },

            { name: "Android", color: "#3DDC84" },

            { name: "Python", color: "#FFD43B" }

        ]

    },

    {

        id: 3,

        company: "Personal Projects",

        role: "Full Stack & AI Developer",

        start: "2024",

        end: "2026",

        location: "Remote",

        description:
            "Independently designed and developed multiple web, mobile, desktop and AI applications from concept to deployment. Responsible for system architecture, UI/UX implementation, backend development, database design, API integration, testing and deployment while working with modern development tools and frameworks.",

        technologies: [

            { name: "React", color: "#61DAFB" },

            { name: "Vue.js", color: "#42B883" },

            { name: "Spring Boot", color: "#6DB33F" },

            { name: "Node.js", color: "#68A063" },

            { name: "Flutter", color: "#42A5F5" },

            { name: "MySQL", color: "#4479A1" },

            {name: "And other Technologies", color:"#ff0000"}

        ]

    }

];