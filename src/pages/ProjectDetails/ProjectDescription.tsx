import type { Project } from "../../types/project";

interface Props {
    project: Project;
}

const ProjectDescription = ({ project }: Props) => {

    return (

        <div className="mt-16">

            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white transition-colors">

                About the Project

            </h2>

            <p className="leading-8 text-slate-600 dark:text-slate-400">

                {project.longDescription}

            </p>

        </div>

    );

};

export default ProjectDescription;