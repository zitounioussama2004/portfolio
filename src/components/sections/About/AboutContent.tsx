import Badge from "../../ui/Badge";

import { aboutData } from "../../../data/about";

const AboutContent = () => {

    return (

        <div>

            <Badge>

                About Me

            </Badge>

            <h2 className="mt-8 text-5xl font-black">

                {aboutData.subtitle}

            </h2>

            <p className="mt-8 text-slate-400 leading-8">

                {aboutData.description}

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

                {

                    aboutData.highlights.map((item) => (

                        <div
                            key={item}
                            className="
                                rounded-full
                                border
                                border-slate-700
                                dark:bg-slate-900
                                px-5
                                py-3
                            "
                        >

                            {item}

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AboutContent;