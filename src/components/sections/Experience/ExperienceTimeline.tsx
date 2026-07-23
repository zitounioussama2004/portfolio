import { motion, useScroll, useSpring } from "framer-motion";

import { experience } from "../../../data/experience";

import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {

    const { scrollYProgress } = useScroll();

    const scaleY = useSpring(scrollYProgress, {

        stiffness: 120,

        damping: 20

    });

    return (

        <div className="relative mt-24">

            {/* Desktop */}

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    hidden
                    h-full
                    w-1
                    -translate-x-1/2
                    rounded-full
                    bg-slate-800
                    md:block
                "
            />

            <motion.div

                style={{
                    scaleY,
                    transformOrigin: "top"
                }}

                className="
                    absolute
                    left-1/2
                    top-0
                    hidden
                    h-full
                    w-1
                    -translate-x-1/2
                    rounded-full

                    bg-gradient-to-b

                    from-cyan-400

                    via-blue-500

                    to-indigo-600

                    md:block
                "

            />

            {/* Mobile */}

            <div
                className="
                    absolute
                    left-6
                    top-0
                    h-full
                    w-1
                    rounded-full
                    bg-slate-800
                    md:hidden
                "
            />

            <motion.div

                style={{
                    scaleY,
                    transformOrigin: "top"
                }}

                className="
                    absolute
                    left-6
                    top-0
                    h-full
                    w-1

                    rounded-full

                    bg-gradient-to-b

                    from-cyan-400

                    via-blue-500

                    to-indigo-600

                    md:hidden
                "

            />

            <div className="space-y-24">

                {

                    experience.map((item, index) => (

                        <ExperienceCard

                            key={item.id}

                            experience={item}

                            index={index}

                        />

                    ))

                }

            </div>

        </div>

    );

};

export default ExperienceTimeline;