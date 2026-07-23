import type { ProjectTech } from "../../../types/project";

interface Props {

    technologies: ProjectTech[];

}

const ExperienceTags = ({

    technologies

}: Props) => {

    return (

        <div className="mt-8 flex flex-wrap gap-3">

            {

                technologies.map((tech) => (

                    <span

                        key={tech.name}

                        style={{

                            color: tech.color,

                            borderColor: tech.color

                        }}

                        className="
                            rounded-full

                            border

                            px-4

                            py-2

                            text-sm

                            font-medium

                            transition

                            hover:bg-white/10
                        "

                    >

                        {tech.name}

                    </span>

                ))

            }

        </div>

    );

};

export default ExperienceTags;