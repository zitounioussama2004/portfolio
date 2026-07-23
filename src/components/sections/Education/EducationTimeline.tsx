import { education } from "../../../data/education";

import EducationCard from "./EducationCard";

const EducationTimeline = () => {

    return (

        <div className="relative mt-20">

            <div
                className="
                    absolute
                    left-6
                    top-0
                    h-full
                    w-[3px]
                    rounded-full
                    bg-gradient-to-b
                    from-cyan-500
                    via-blue-500
                    to-indigo-600
                "
            />

            <div className="space-y-16">

                {

                    education.map(item=>(

                        <EducationCard

                            key={item.id}

                            education={item}

                        />

                    ))

                }

            </div>

        </div>

    );

};

export default EducationTimeline;