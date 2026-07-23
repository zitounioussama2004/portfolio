import { motion } from "framer-motion";

import {
    FaJava,
    FaReact,
    FaPython,
    FaHtml5
} from "react-icons/fa";

import photo from "../../../assets/images/photo.png";

import FloatingCard from "./FloatingCard";

const HeroImage = () => {

    return (

        <div className="relative flex justify-center">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

            <motion.img
                src={photo}
                alt="Zitouni Oussama"
                initial={{
                    opacity: 0,
                    scale: .8
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: .8
                }}
                className="relative z-10 w-[380px] rounded-[40px] border border-white/10 shadow-2xl"
            />

            <FloatingCard
                icon={<FaJava color="#F89820" />}
                title="Java"
                subtitle="Backend"
                className="-left-5 top-20"
            />

            <FloatingCard
                icon={<FaReact color="#61DAFB" />}
                title="React"
                subtitle="Frontend"
                className="-right-5 top-40"
            />

            <FloatingCard
                icon={<FaPython color="#3776AB" />}
                title="Python"
                subtitle="AI"
                className="bottom-10 left-0"
            />

            <FloatingCard
                icon={<FaHtml5 color="#3776AB" />}
                title="HTML"
                subtitle="Web"
                className="right-5 bottom-10"
            />

        </div>

    );

};

export default HeroImage;