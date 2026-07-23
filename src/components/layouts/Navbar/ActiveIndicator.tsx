import { motion } from "framer-motion";

const ActiveIndicator=()=>{

    return(

        <motion.div

            layoutId="navbar-active"

            transition={{

                type:"spring",

                stiffness:400,

                damping:35

            }}

            className="

                absolute

                -bottom-2

                left-0

                h-[3px]

                w-full

                rounded-full

                bg-blue-500

            "

        />

    );

};

export default ActiveIndicator;