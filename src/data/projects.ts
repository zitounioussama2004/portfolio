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

import trafficCover from "../assets/images/traffic/trafficCover.png"

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

        subtitle: "Modern Mobile E-Commerce Platform",

        description:
            "A full-featured mobile e-commerce application inspired by Alibaba and Shein, providing a modern shopping experience for customers and sellers.",

        longDescription:
            "Achrili Quick Shop is a modern mobile e-commerce application developed to simplify online shopping. The application enables users to browse products, search by category, manage their shopping cart, place orders, and securely authenticate. Built with Flutter and PHP, the project focuses on delivering a fast, responsive, and user-friendly shopping experience while integrating a robust backend with MySQL for efficient product and order management.",

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

        duration: "2024 (4 months)",

        categories: [

            "Mobile Development",

            "E-Commerce",

            "Full Stack",

            "Database"

        ],

        features: [

            "User Authentication",

            "Product Catalog",

            "Product Categories",

            "Advanced Search",

            "Product Details",

            "Shopping Cart",

            "Wishlist",

            "Order Management",

            "Order History",

            "Secure Checkout",

            "User Profile",

            "Responsive Mobile Interface",

            "MySQL Database",

            "PHP REST API"

        ],

    },

    {
        id: 3,

        slug: "travel-guide",

        title: "DZ Travel Guide",

        subtitle: "Smart Tourism Mobile Application",

        description:
            "A mobile tourism application for discovering Algeria's best attractions with Google Maps, ratings, reviews, and location-based recommendations.",

        longDescription:
            "DZ Travel Guide is a smart mobile tourism application developed to help users discover Algeria's most beautiful tourist destinations. The application provides an interactive map of all 58 Algerian wilayas, allowing users to explore each region and discover its best attractions, historical sites, hotels, restaurants, beaches, and natural landscapes. Users can register, authenticate, rate tourist places, write reviews, save favorite destinations, and navigate directly to locations using Google Maps. The backend was developed with PHP and MySQL while the mobile application was built using Flutter.",

        cover: travelCover,

        images: [],

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
            },

            {
                name: "Google Maps",
                color: "#34A853"
            }

        ],

        featured: false,

        role: "Full Stack Mobile Developer",

        duration: "2024 (2 months)",

        categories: [

            "Mobile Development",

            "Tourism",

            "Google Maps",

            "Full Stack"

        ],

        features: [

            "Authentication & Registration",

            "58 Algerian Wilayas Explorer",

            "Interactive Google Maps",

            "Tourist Attractions",

            "Hotels & Restaurants",

            "Location Details",

            "User Ratings",

            "Reviews & Comments",

            "Favorites",

            "Search & Filtering",

            "Responsive Mobile UI",

            "Location Navigation"

        ],

    },

    {
        id: 4,

        slug: "restaurant-website",

        title: "Restaurant Website",

        subtitle: "Modern Restaurant Management Website",

        description:
            "A responsive restaurant website featuring an interactive menu, shopping cart, reservations, and a modern dining experience.",

        longDescription:
            "Restaurant Website is a modern and fully responsive web application designed to enhance the digital experience of restaurant customers. The website showcases food menus with categories and filters, allows customers to browse dishes, add meals to a shopping cart, make table reservations, and explore the restaurant through an elegant gallery. The interface focuses on usability, responsive design, and a smooth customer experience across desktop, tablet, and mobile devices.",

        cover: restaurantCover,

        images: [],

        technologies: [

            {
                name: "HTML5",
                color: "#E34F26"
            },

            {
                name: "CSS3",
                color: "#1572B6"
            },

            {
                name: "JavaScript",
                color: "#F7DF1E"
            }

        ],

        featured: false,

        role: "Frontend Web Developer",

        duration: "2022",

        categories: [

            "Web Development",

            "Restaurant",

            "Responsive Design",

            "Frontend"

        ],

        features: [

            "Responsive User Interface",

            "Interactive Food Menu",

            "Menu Categories",

            "Category Filters",

            "Dish Search",

            "Shopping Cart",

            "Food Details",

            "Special Offers",

            "Online Table Reservation",

            "Restaurant Gallery",

            "Customer Testimonials",

            "Contact Form",

            "Opening Hours",

            "Google Maps Location"

        ],
    },

    {
        id: 5,

        slug: "tic-tac-toe-web",

        title: "Tic Tac Toe",

        subtitle: "Interactive Web Game",

        description:
            "A modern and responsive Tic Tac Toe game built with HTML, CSS, and JavaScript.",

        longDescription:
            "Tic Tac Toe Web is a modern browser-based implementation of the classic game. The application features a clean and responsive interface, smooth animations, score tracking, and multiple game modes. The project was developed to strengthen JavaScript programming skills, DOM manipulation, game logic implementation, and responsive web design.",

        cover: tictactoeCover,

        images: [],

        technologies: [

            {
                name: "HTML5",
                color: "#E34F26"
            },

            {
                name: "CSS3",
                color: "#1572B6"
            },

            {
                name: "JavaScript",
                color: "#F7DF1E"
            }

        ],

        featured: false,

        role: "Frontend Web Developer",

        duration: "2024",

        categories: [

            "Web Development",

            "JavaScript",

            "Game Development"

        ],

        features: [

            "Player vs Player",

            "Player vs Computer",

            "Responsive Design",

            "Game Scoreboard",

            "Winner Detection",

            "Draw Detection",

            "Restart Game",

            "Smooth Animations",

            "Sound Effects",

            "Modern User Interface"

        ],
    },

    {
        id: 6,

        slug: "tic-tac-toe-mobile",

        title: "Tic Tac Toe Mobile",

        subtitle: "Modern Flutter Game",

        description:
            "A modern Tic Tac Toe mobile game featuring multiple game modes, AI opponent, score tracking, and smooth animations.",

        longDescription:
            "Tic Tac Toe Mobile is a modern Flutter application that reimagines the classic Tic Tac Toe game with an intuitive user interface and engaging gameplay. Players can compete against friends locally or challenge an intelligent AI with different difficulty levels. The application includes score tracking, game history, customizable themes, smooth animations, and responsive layouts optimized for Android devices.",

        cover: tictactoeCover,

        images: [],

        technologies: [

            {
                name: "Flutter",
                color: "#02569B"
            },

            {
                name: "Dart",
                color: "#0175C2"
            },

            {
                name: "Shared Preferences",
                color: "#6DB33F"
            }

        ],

        featured: false,

        role: "Flutter Mobile Developer",

        duration: "2024",

        categories: [

            "Mobile Development",

            "Flutter",

            "Game Development"

        ],

        features: [

            "Player vs Player",

            "Player vs AI",

            "Easy, Medium & Hard Difficulty",

            "Game Scoreboard",

            "Game History",

            "Win / Draw Detection",

            "Restart Match",

            "Responsive Mobile UI",

            "Dark & Light Theme",

            "Sound Effects",

            "Smooth Animations",

            "Local Data Storage"

        ],

    },

    {
        id: 7,

        slug: "multi-agent-traffic-simulation",

        title: "Multi-Agent Traffic Simulation",

        subtitle: "Distributed Traffic Management System",

        description:
            "Distributed traffic simulation using JADE where autonomous vehicles coordinate safely at road intersections.",

        longDescription:
            "This project is a distributed traffic simulation developed in Java using the JADE (Java Agent DEvelopment Framework). The application simulates multiple autonomous vehicles navigating a road network while communicating through ACL messages. Each vehicle acts as an intelligent software agent capable of making routing decisions, requesting access to intersections and coordinating with other agents without a centralized controller. A Java Swing graphical interface visualizes the map, roads, intersections and vehicle movements in real time. To prevent collisions, the system implements a distributed mutual exclusion algorithm based on logical clocks and message passing, demonstrating concepts from distributed systems, concurrent programming and multi-agent artificial intelligence.",

        cover: trafficCover,

        images: [],

        technologies: [

            {
                name: "Java",
                color: "#F89820"
            },

            {
                name: "JADE",
                color: "#009688"
            },

            {
                name: "Java Swing",
                color: "#4CAF50"
            },

            {
                name: "ACL Messaging",
                color: "#9C27B0"
            },

            {
                name: "Distributed Systems",
                color: "#E91E63"
            },

            {
                name: "Multi-Agent Systems",
                color: "#3F51B5"
            }

        ],

        featured: true,

        role: "Java & Multi-Agent Systems Developer",

        duration: "2025",

        categories: [
            "Java",
            "Desktop",
            "Artificial Intelligence",
            "Distributed Systems"
        ],

        features: [

            "Multi-Agent Architecture",

            "Real-Time Vehicle Simulation",

            "Road Network Visualization",

            "Distributed Communication",

            "ACL Message Exchange",

            "Intersection Coordination",

            "Distributed Mutual Exclusion",

            "Logical Clock Synchronization",

            "Collision Avoidance",

            "Dynamic Route Planning",

            "Concurrent Vehicle Execution",

            "Java Swing GUI"

        ]

    },

]
