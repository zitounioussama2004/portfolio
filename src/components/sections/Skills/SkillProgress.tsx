import { motion } from "framer-motion";

interface SkillProgressProps {
  level: number;
}

const SkillProgress = ({ level }: SkillProgressProps) => {
  return (
    <div className="mt-5">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-slate-400">Proficiency</span>

        <span className="font-semibold text-blue-400">{level}%</span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "250%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
        absolute
        top-0
        h-full
        w-8
        -skew-x-12
        bg-white/30
        blur-[2px]
      "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;