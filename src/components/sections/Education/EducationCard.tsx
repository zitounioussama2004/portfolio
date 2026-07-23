import { motion } from "framer-motion";

import EducationDot from "./EducationDot";

import type { Education } from "../../../types/education";

import {

    MapPin,

    Award,

    Building2

} from "lucide-react";

interface Props{

    education:Education;
    

}

const EducationCard=({

    education

}:Props)=>{

    return(

        <motion.div

            initial={{
                opacity:0,
                x:50
            }}

            whileInView={{
                opacity:1,
                x:0
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:.6
            }}

            className="relative pl-24"

        >

            <EducationDot/>

            <div
                className="
                    rounded-3xl

                    border

                    border-slate-800

                    bg-slate-900/60

                    p-8

                    backdrop-blur-md

                    transition

                    duration-300

                    hover:border-blue-500

                    hover:-translate-y-2
                "
            >

                <div
                    className="
                        inline-flex
                        rounded-full
                        bg-blue-600/20
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-blue-400
                    "
                >

                    {education.start} - {education.end}

                </div>

                <h3
                    className="
                        mt-5
                        text-2xl
                        font-bold
                        text-white
                    "
                >

                    {education.degree}

                </h3>

                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-5
                        text-slate-400
                    "
                >

                    <div className="flex items-center gap-2">

                        <Building2 size={18}/>

                        {education.school}

                    </div>

                    <div className="flex items-center gap-2">

                        <MapPin size={18}/>

                        {education.location}

                    </div>

                    <div className="flex items-center gap-2">

                        <Award size={18}/>

                        {education.grade}

                    </div>

                </div>

                <p
                    className="
                        mt-8
                        leading-8
                        text-slate-300
                    "
                >

                    {education.description}

                </p>

            </div>

        </motion.div>

    );

};

export default EducationCard;