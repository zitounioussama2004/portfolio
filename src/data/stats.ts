import type { IconType } from "react-icons";

import {
    FaFolderOpen,
    FaLaptopCode,
    FaGraduationCap,
} from "react-icons/fa";

export interface HeroStat {
    number: string;
    title: string;
    icon: IconType;
}

export const heroStats: HeroStat[] = [
    {
        number: "8+",
        title: "Projects",
        icon: FaFolderOpen,
    },
    {
        number: "15+",
        title: "Technologies",
        icon: FaLaptopCode,
    },
    {
        number: "2026",
        title: "Master STIC",
        icon: FaGraduationCap,
    },
];