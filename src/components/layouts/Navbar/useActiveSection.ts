import { useEffect, useState } from "react";

const SECTION_IDS = [
    "hero",
    "about",
    "skills",
    "projects",
    "education",
    "experience",
    "contact",
];

const useActiveSection = () => {

    const [active, setActive] = useState("hero");

    useEffect(() => {

        const handleScroll = () => {

            let current = "hero";

            SECTION_IDS.forEach((id) => {

                const section = document.getElementById(id);

                if (!section) return;

                const top = section.offsetTop - 120;

                if (window.scrollY >= top) {

                    current = id;

                }

            });

            setActive(current);

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    return {

        active,

        setActive,

    };

};

export default useActiveSection;