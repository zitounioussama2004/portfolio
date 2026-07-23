import type { Project } from "../../types/project";

interface Props {
    project: Project;
}

const ProjectInfo = ({ project }: Props) => {

    const infos = [

        {
            title: "Role",
            value: project.role
        },

        {
            title: "Duration",
            value: project.duration
        },

        {
            title: "Categories",
            value: project.categories.join(",")
        }

    ];

    return (

        <section className="mt-20">

            <div className="grid gap-6 md:grid-cols-3">

                {

                    infos.map((item) => (

                        <div

                            key={item.title}

                            className="
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900
                                p-8
                            "

                        >

                            <h3 className="text-sm uppercase tracking-widest text-slate-500">

                                {item.title}

                            </h3>

                            <p className="mt-4 text-xl font-semibold text-white">

                                {item.value}

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

};

export default ProjectInfo;