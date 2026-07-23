import { heroSkills } from "../../../data/skills";

const HeroTech = () => {
    return (
        <div className="mt-12 flex flex-wrap gap-4">

            {heroSkills.map((skill) => {

                const Icon = skill.icon;

                return (
                    <div
                        key={skill.name}
                        className="
                            flex items-center gap-3
                            rounded-full
                            border border-slate-700
                            bg-slate-900/80
                            px-5
                            py-3
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-500
                        "
                    >
                        <Icon
                            size={22}
                            color={skill.color}
                        />

                        <span className="text-sm font-medium text-slate-300">
                            {skill.name}
                        </span>

                    </div>
                );

            })}

        </div>
    );
};

export default HeroTech;