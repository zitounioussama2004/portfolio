import { motion } from "framer-motion";
import type { Project } from "../../types/project";

interface Props {
    project: Project;
}

const ProjectHero = ({ project }: Props) => {

    return (

        <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: .8 }}

            className="relative overflow-hidden rounded-3xl"

        >

            <img

                src={project.cover}

                alt={project.title}

                className="h-[500px] w-full object-cover"

            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/40
                    to-transparent
                "
            />

            <div className="absolute bottom-10 left-10">

                <h1 className="text-5xl font-bold text-white">

                    {project.title}

                </h1>

                <p className="mt-3 text-xl text-blue-400">

                    {project.subtitle}

                </p>

            </div>

        </motion.div>

    );

};

export default ProjectHero;