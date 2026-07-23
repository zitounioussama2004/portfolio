import { motion } from "framer-motion";

interface Props {

    x: number;

    y: number;

}

const CursorDot = ({ x, y }: Props) => {

    return (

        <motion.div

            animate={{

                x: x - 4,

                y: y - 4,

            }}

            transition={{

                type: "spring",

                stiffness: 900,

                damping: 60,

            }}

            className="

                pointer-events-none

                fixed

                left-0

                top-0

                z-[9999]

                h-2

                w-2

                rounded-full

                bg-blue-500

            "

        />

    );

};

export default CursorDot;