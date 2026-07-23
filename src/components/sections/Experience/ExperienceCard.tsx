import { motion } from "framer-motion";

import {
    Building2,
    Calendar,
    MapPin,
    BriefcaseBusiness,
} from "lucide-react";

import type { Experience } from "../../../types/experience";

import ExperienceDot from "./ExperienceDot";
import ExperienceTags from "./ExperienceTags";
import ExperienceButton from "./ExperienceButton";

interface Props {
    experience: Experience;
    index: number;
}

const ExperienceCard = ({ experience, index }: Props) => {

    const isLeft = index % 2 === 0;

    return (

        <div
            className={`
                relative
                flex
                w-full
                ${
                    isLeft
                        ? "justify-start"
                        : "justify-end"
                }
            `}
        >

            {/* CARD */}

            <motion.div

                initial={{
                    opacity:0,
                    x:isLeft ? -100 : 100,
                    y:50
                }}

                whileInView={{
                    opacity:1,
                    x:0,
                    y:0
                }}

                viewport={{
                    once:true,
                    amount:.3
                }}

                transition={{
                    duration:.7
                }}

                whileHover={{
                    y:-8
                }}

                className={`
                    relative

                    w-full

                    md:w-[calc(50%-45px)]

                    overflow-hidden

                    rounded-3xl

                    border

                    border-slate-800

                    bg-slate-900/70

                    p-8

                    backdrop-blur-xl

                    transition

                    hover:border-blue-500
                `}
            >

                {/* Glow */}

                <div
                    className="
                        absolute

                        inset-0

                        opacity-0

                        transition

                        duration-500

                        group-hover:opacity-100

                        bg-gradient-to-br

                        from-cyan-500/10

                        via-blue-500/10

                        to-indigo-500/10
                    "
                />

                {/* BIG YEAR */}

                <span
                    className="
                        absolute

                        right-6

                        top-0

                        text-[120px]

                        font-black

                        text-white/5

                        select-none
                    "
                >
                    {experience.end}
                </span>

                {/* DATE */}

                <div
                    className="
                        inline-flex

                        rounded-full

                        bg-blue-500/10

                        px-4

                        py-2

                        text-sm

                        font-semibold

                        text-blue-400
                    "
                >

                    {experience.start} - {experience.end}

                </div>

                {/* ROLE */}

                <h3
                    className="
                        mt-6

                        text-3xl

                        font-bold

                        text-white
                    "
                >

                    {experience.role}

                </h3>

                {/* COMPANY */}

                <p className="mt-2 font-semibold text-cyan-400">

                    {experience.company}

                </p>

                {/* INFO */}

                <div className="mt-8 space-y-4 text-slate-300">

                    <div className="flex items-center gap-3">

                        <Building2 size={20}/>

                        {experience.company}

                    </div>

                    <div className="flex items-center gap-3">

                        <MapPin size={20}/>

                        {experience.location}

                    </div>

                    <div className="flex items-center gap-3">

                        <Calendar size={20}/>

                        {experience.start} - {experience.end}

                    </div>

                    <div className="flex items-center gap-3">

                        <BriefcaseBusiness size={20}/>

                        {experience.role}

                    </div>

                </div>

                {/* DESCRIPTION */}

                <p
                    className="
                        mt-8

                        leading-8

                        text-slate-400
                    "
                >

                    {experience.description}

                </p>

                {/* TECHNO */}

                <ExperienceTags

                    technologies={experience.technologies}

                />

                {/* BUTTON */}

                <ExperienceButton

                    slug={experience.projectSlug}

                />

            </motion.div>

            {/* TIMELINE DOT */}

            <ExperienceDot/>

        </div>

    );

};

export default ExperienceCard;