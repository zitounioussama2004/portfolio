import ProjectCard from "./ProjectCard";
import type { Project } from "../../../types/project";

interface Props {
    projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => {

    return (

        <div
            className="
                mt-16
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {

                projects.map(project => (

                    <ProjectCard

                        key={project.id}

                        project={project}

                    />

                ))

            }

        </div>

    );

};

export default ProjectGrid;