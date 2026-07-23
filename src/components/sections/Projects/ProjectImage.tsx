import { motion } from "framer-motion";
import type { Project } from "../../../types/project";

interface Props {
    project: Project;
}

const ProjectImage = ({ project }: Props) => {

    return (

        <div className="group relative overflow-hidden">

            <motion.img

                whileHover={{
                    scale: 1.08
                }}

                transition={{
                    duration: .6
                }}

                src={project.cover}

                alt={project.title}

                className="
                    h-72
                    w-full
                    object-cover
                "

            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/20
                    to-transparent
                "
            />

        </div>

    );

};

export default ProjectImage;