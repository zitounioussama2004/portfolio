import type { Project } from "../../../types/project";

import ProjectButtons from "./ProjectButtons";
import ProjectTags from "./ProjectTags";

interface Props {
  project: Project;
}

const ProjectContent = ({ project }: Props) => {
  return (
    <div className="flex h-full flex-col p-8">

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-2 text-blue-500 dark:text-blue-400">
        {project.subtitle}
      </p>

      {/* Description : une seule ligne */}

      <p
        className="
          mt-5
          text-slate-600
          dark:text-slate-400
          line-clamp-1
        "
      >
        {project.description}
      </p>

      {/* 3 technologies maximum */}

      <ProjectTags
        technologies={project.technologies.slice(0, 3)}
        total={project.technologies.length}
      />

      <div className="mt-auto pt-6">
        <ProjectButtons slug={project.slug} />
      </div>

    </div>
  );
};

export default ProjectContent;