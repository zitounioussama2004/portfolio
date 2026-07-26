import type { ProjectTech } from "../../../types/project";

interface ProjectTagsProps {
  technologies: ProjectTech[];
  total?: number;
}

const ProjectTags = ({
  technologies,
  total,
}: ProjectTagsProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">

      {technologies.map((tech) => (

        <span
          key={tech.name}
          className="
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            text-white
          "
          style={{
            backgroundColor: tech.color,
          }}
        >
          {tech.name}
        </span>

      ))}

      {total && total > technologies.length && (

        <span
          className="
            rounded-full
            bg-slate-200
            dark:bg-slate-700
            px-3
            py-1
            text-xs
            font-semibold
            text-slate-700
            dark:text-slate-300
          "
        >
          +{total - technologies.length}
        </span>

      )}

    </div>
  );
};

export default ProjectTags;