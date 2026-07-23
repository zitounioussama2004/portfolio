import { motion } from "framer-motion";

import { BriefcaseBusiness } from "lucide-react";

const ExperienceDot = () => {

    return (

        <div
            className="
                absolute
                left-1/2
                top-1/2
                z-20
                hidden
                -translate-x-1/2
                -translate-y-1/2
                md:flex
            "
        >

            <motion.div

                animate={{
                    scale: [1, 1.2, 1]
                }}

                transition={{
                    duration: 2,
                    repeat: Infinity
                }}

                className="
                    relative

                    flex

                    h-16

                    w-16

                    items-center

                    justify-center

                    rounded-full

                    bg-gradient-to-br

                    from-cyan-400

                    to-blue-600

                    shadow-[0_0_40px_rgba(59,130,246,.7)]
                "

            >

                <BriefcaseBusiness

                    size={26}

                    className="text-white"

                />

            </motion.div>

        </div>

    );

};

export default ExperienceDot;