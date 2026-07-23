import { skills } from "../../../data/skills";

import SkillCard from "./SkillCard";

interface SkillCategoryProps{

    category:string;

}

const SkillCategory = ({

    category

}:SkillCategoryProps)=>{

    const categorySkills = skills.filter(

        skill=>skill.category===category

    );

    return(

        <section className="mb-20">

            <h2 className="mb-8 text-3xl font-bold">

                {category}

            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {

                    categorySkills.map(skill=>(

                        <SkillCard

                            key={skill.id}

                            skill={skill}

                        />

                    ))

                }

            </div>

        </section>

    );

};

export default SkillCategory;