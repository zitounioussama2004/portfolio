import type { ProjectTech } from "../../../types/project";

interface ProjectTagsProps {
    technologies: ProjectTech[];
}

const ProjectTags = ({ technologies }: ProjectTagsProps) => {
    return (
        <div className="mt-5 flex flex-wrap gap-2">

            {technologies.map((tech) => (

                <span
                    key={tech.name}
                    style={{
                        borderColor: tech.color,
                        color: tech.color,
                    }}
                    className="
                        rounded-full
                        border
                        px-3
                        py-1
                        text-xs
                        font-medium
                        transition
                        duration-300
                        hover:bg-white/10
                    "
                >
                    {tech.name}
                </span>

            ))}

        </div>
    );
};

export default ProjectTags;