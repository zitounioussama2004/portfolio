import type { Project } from "../../../types/project";

import ProjectButtons from "./ProjectButtons";
import ProjectTags from "./ProjectTags";

interface Props {
  project: Project;
}

const ProjectContent = ({ project }: Props) => {
  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>

      <p className="mt-2 text-blue-400">{project.subtitle}</p>

      <p className="mt-5 leading-7 text-slate-400">{project.description}</p>

      <ProjectTags technologies={project.technologies} />

      <ProjectButtons slug={project.slug} />
    </div>
  );
};

export default ProjectContent;
