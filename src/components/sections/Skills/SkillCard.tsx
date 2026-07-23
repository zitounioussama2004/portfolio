import { motion } from "framer-motion";

import type { Skill } from "../../../types/skills";

import Card from "../../ui/Card";
import SkillProgress from "./SkillProgress";

interface SkillCardProps{
    skill:Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {

    const Icon = skill.icon;

    return (

        <motion.div

            initial={{
                opacity:0,
                y:30
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            whileHover={{
                y:-8,
                scale:1.02
            }}

        >

            <Card>

                <div className="flex items-center gap-4">

                    <Icon

                        size={34}

                        color={skill.color}

                    />

                    <div>

                        <h3 className="font-semibold">

                            {skill.name}

                        </h3>

                        <p className="text-sm text-slate-400">

                            {skill.category}

                        </p>

                    </div>

                </div>

                <SkillProgress

                    level={skill.level}

                />

            </Card>

        </motion.div>

    );

};

export default SkillCard;