import type { Project } from "../types/project";

// VALORIX

import valorixCover from "../assets/images/valorix/cover.png";
import valorix1 from "../assets/images/valorix/1.png";
import valorix2 from "../assets/images/valorix/2.png";
import valorix3 from "../assets/images/valorix/3.png";

// ACHRILI

import achriliCover from "../assets/images/achrili/cover.png";
import achrili1 from "../assets/images/achrili/1.png";
import achrili2 from "../assets/images/achrili/2.png";

// TRAVEL

import travelCover from "../assets/images/travel/cover.png";

// RESTAURANT

import restaurantCover from "../assets/images/restaurant/cover.png";

// TIC TAC TOE

import tictactoeCover from "../assets/images/tictactoe/cover.png";



export const projects: Project[] = [
    {
        id: 1,

        slug: "valorix",

        title: "VALORIX",

        subtitle: "AI-Powered Smart Waste Management Platform",

        description:
            "An intelligent platform that digitizes waste collection and recycling through Artificial Intelligence, mobile technologies, and modern web applications.",

        longDescription:
            "VALORIX is an AI-powered Smart Waste Management Platform developed as my Master's graduation project. The platform modernizes waste collection and recycling by connecting citizens, collectors, sellers, workers, and administrators through a complete digital ecosystem. It integrates Artificial Intelligence for automatic waste classification, geolocation, collection management, reward points, digital wallet, notifications, and an administrative dashboard. The project was entirely designed and developed by myself, covering software architecture, backend, mobile application, database design, REST APIs, and AI integration.",

        cover: valorixCover,

        images: [
            valorixCover,
            valorix1,
            valorix2,
            valorix3
        ],

        technologies: [

            {
                name: "Java",
                color: "#F89820"
            },

            {
                name: "Spring Boot",
                color: "#6DB33F"
            },

            {
                name: "Hibernate",
                color: "#59666C"
            },

            {
                name: "JPA",
                color: "#6DB33F"
            },

            {
                name: "Oracle Database",
                color: "#F80000"
            },

            {
                name: "Android",
                color: "#3DDC84"
            },

            {
                name: "Python",
                color: "#3776AB"
            },

            {
                name: "OpenCV",
                color: "#5C3EE8"
            }

        ],

        featured: true,

        role: "Software Engineer • Full Stack Developer • AI Developer",

        duration: "2025 – 2026",

        categories: [
            "Artificial Intelligence",
            "Software Engineering",
            "Mobile Development",
            "Web Development",
            "Full Stack"
        ],

        features: [

            "AI-powered Waste Classification",

            "Citizen & Collector Management",

            "Secure Authentication & Authorization",

            "RESTful API",

            "Interactive Admin Dashboard",

            "Collection Request Management",

            "Real-Time Notifications",

            "Digital Wallet",

            "Reward Points System",

            "Waste Selling Marketplace",

            "Location & Mapping",

            "Role-Based Access Control",

            "Oracle Database Integration",

            "Android Mobile Application",

            "Spring Boot Backend",

            "Automatic Waste Recognition"

        ],

    },

    {
        id: 2,

        slug: "achrili-quick-shop",

        title: "Achrili Quick Shop",

        subtitle: "E-Commerce Mobile Application",

        description:
            "Online shopping application inspired by Alibaba and Shein.",

        longDescription:
            "Mobile e-commerce application allowing customers to browse products, place orders, manage shopping carts and securely authenticate.",

        cover: achriliCover,

        images: [
            achrili1,
            achrili2
        ],

        technologies: [

            {
                name: "Flutter",
                color: "#02569B"
            },

            {
                name: "PHP",
                color: "#777BB4"
            },

            {
                name: "MySQL",
                color: "#4479A1"
            }

        ],

        featured: true,
        role: "Full Stack Mobile Developer",

        duration: "2025",

        categories: [
            "AI",
            "Mobile",
            "Full Stack"
        ],

        features: [

            "Authentication",

            "Shopping Cart",

            "Orders",

            "Payment",

            "Categories",

            "Search",

            "Favorites",

            "Profile"

        ],

    },

    {
        id: 3,

        slug: "travel-guide",

        title: "Travel Guide",

        subtitle: "Tourism Application",

        description:
            "Travel guide application for discovering tourist destinations.",

        longDescription:
            "Application designed to help users explore tourist attractions, hotels and restaurants.",

        cover: travelCover,

        images: [],

        technologies: [

            {
                name: "Flutter",
                color: "#02569B"
            }

        ],

        featured: false,
        role: "Full Stack Developer",

        duration: "2024",

        categories: [
            "Web",
            "React"
        ],

        features: [
            "Responsive Design",
            "Authentication",
            "Dashboard",
            "CRUD Operations"
        ],

    },

    {
        id: 4,

        slug: "restaurant-website",

        title: "Restaurant Website",

        subtitle: "Restaurant Management Website",

        description:
            "Modern responsive website for restaurant presentation.",

        longDescription:
            "Responsive website including menu presentation, reservation and contact page.",

        cover: restaurantCover,

        images: [],

        technologies: [

            {
                name: "HTML",
                color: "#E34F26"
            },

            {
                name: "CSS",
                color: "#1572B6"
            },

            {
                name: "JavaScript",
                color: "#F7DF1E"
            }

        ],

        featured: false,
        role: "Full Stack Developer",

        duration: "2024",

        categories: [
            "Web",
            "React"
        ],

        features: [
            "Responsive Design",
            "Authentication",
            "Dashboard",
            "CRUD Operations"
        ],

    },

    {
        id: 5,

        slug: "tic-tac-toe",

        title: "Tic Tac Toe",

        subtitle: "Game Application",

        description:
            "Classic Tic Tac Toe game.",

        longDescription:
            "Interactive game developed to practice programming logic and user interface design.",

        cover: tictactoeCover,

        images: [],

        technologies: [

            {
                name: "Java",
                color: "#F89820"
            }

        ],

        featured: false,

        role: "Full Stack Developer",

        duration: "3 weeks",

        categories: [
            "Web",
            "Java"
        ],

        features: [
            "Responsive Design",
            "Authentication",
            "Dashboard",
            "CRUD Operations"
        ],

    },

]
