import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    className?: string;
}

const FloatingCard = ({
    icon,
    title,
    subtitle,
    className = "",
}: FloatingCardProps) => {
    return (
        <motion.div
            animate={{
                y: [0, -12, 5],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`
                absolute
                rounded-2xl
                border
                border-white/10
                bg-slate-300/50
                dark:bg-slate-900/90
                backdrop-blur-xl
                px-5
                py-4
                shadow-2xl
                ${className}
            `}
        >
            <div className="flex items-center gap-3 ">

                <div className="text-3xl">
                    {icon}
                </div>

                <div>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                        {title}
                    </h4>

                    <p className="text-sm text-slate-900 dark:text-slate-400">
                        {subtitle}
                    </p>

                </div>

            </div>
        </motion.div>
    );
};

export default FloatingCard;