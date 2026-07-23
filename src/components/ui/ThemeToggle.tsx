import { motion } from "framer-motion";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {

    const {

        theme,

        toggleTheme,

    } = useTheme();

    const dark = theme === "dark";

    return (

        <motion.button

            whileHover={{

                scale: 1.08,

            }}

            whileTap={{

                scale: .92,

            }}

            onClick={toggleTheme}

            className="

                relative

                flex

                h-12

                w-24

                items-center

                rounded-full

                border

                border-slate-700

                bg-slate-900

                px-2

                shadow-lg

                transition

                dark:border-slate-600

            "

        >

            <motion.div

                layout

                transition={{

                    type: "spring",

                    stiffness: 500,

                    damping: 35,

                }}

                className={`

                    absolute

                    h-8

                    w-8

                    rounded-full

                    bg-gradient-to-r

                    from-blue-500

                    to-cyan-400

                    shadow-lg

                    ${

                        dark

                            ? "translate-x-12"

                            : "translate-x-0"

                    }

                `}

            />

            <div

                className="

                    relative

                    z-10

                    flex

                    w-full

                    items-center

                    justify-between

                    px-1

                "

            >

                <Sun

                    size={18}

                    className={

                        dark

                            ? "text-slate-500"

                            : "text-yellow-400"

                    }

                />

                <Moon

                    size={18}

                    className={

                        dark

                            ? "text-white"

                            : "text-slate-500"

                    }

                />

            </div>

        </motion.button>

    );

};

export default ThemeToggle;