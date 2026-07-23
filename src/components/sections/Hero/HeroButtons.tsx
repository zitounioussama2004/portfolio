import { Download, FolderOpen } from "lucide-react";
import cv from "../../../assets/cv/OUSSAMA_ZITOUNI_CV.pdf";

const HeroButtons = () => {
    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <div className="mt-10 flex flex-wrap gap-5">

            {/* View Projects */}

            <button
                onClick={scrollToProjects}
                className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-blue-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-500
                    hover:shadow-blue-500/40
                "
            >
                <FolderOpen
                    size={20}
                    className="transition-transform group-hover:rotate-6"
                />

                View Projects
            </button>

            {/* Download CV */}

            <a
                href={cv}
                download="OUSSAMA_ZITOUNI_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-blue-500
                    bg-white/5
                    px-7
                    py-4
                    font-semibold
                    text-blue-500
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-500
                    hover:text-white
                    hover:shadow-xl
                    hover:shadow-blue-500/30
                "
            >
                <Download
                    size={20}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-y-1
                    "
                />

                Download CV
            </a>

        </div>
    );
};

export default HeroButtons;