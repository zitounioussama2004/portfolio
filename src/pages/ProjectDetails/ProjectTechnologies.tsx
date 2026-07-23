import { motion } from "framer-motion";

import type { Project } from "../../types/project";

interface Props {

    project: Project;

}

const ProjectTechnologies = ({ project }: Props) => {

    return (

        <motion.section

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: .7 }}

            className="mt-24"

        >

            <h2 className="mb-10 text-4xl font-bold text-white">

                Technologies

            </h2>

            <div className="flex flex-wrap gap-4">

                {

                    project.technologies.map((tech) => (

                        <div

                            key={tech.name}

                            style={{
                                borderColor: tech.color,
                                color: tech.color
                            }}

                            className="
                                rounded-full
                                border
                                px-6
                                py-3
                                font-medium
                            "

                        >

                            {tech.name}

                        </div>

                    ))

                }

            </div>

        </motion.section>

    );

};

export default ProjectTechnologies;