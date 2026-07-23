import { motion } from "framer-motion";

interface Props {

    x: number;

    y: number;

    hovered: boolean;

}

const CursorRing = ({

    x,

    y,

    hovered,

}: Props) => {

    return (

        <motion.div

            animate={{

                x: x - (hovered ? 30 : 18),

                y: y - (hovered ? 30 : 18),

                width: hovered ? 60 : 36,

                height: hovered ? 60 : 36,

            }}

            transition={{

                type: "spring",

                stiffness: 250,

                damping: 20,

            }}

            className="

                pointer-events-none

                fixed

                left-0

                top-0

                z-[9998]

                rounded-full

                border-2

                border-blue-500

                bg-blue-500/10

                backdrop-blur-sm

            "

        />

    );

};

export default CursorRing;