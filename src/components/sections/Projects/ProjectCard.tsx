import { motion } from "framer-motion";

import Card from "../../ui/Card";

import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

import type { Project } from "../../../types/project";

interface Props {

    project: Project;

}

const ProjectCard = ({ project }: Props) => {

    return (

        <motion.div

            initial={{
                opacity:0,
                y:40
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:.6
            }}

            whileHover={{
                y:-8
            }}

        >

            <Card className="overflow-hidden p-0">

                <ProjectImage

                    project={project}

                />

                <ProjectContent

                    project={project}

                />

            </Card>

        </motion.div>

    );

};

export default ProjectCard;