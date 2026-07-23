import { motion } from "framer-motion";

interface Props {

    features: string[];

}

const ProjectFeatures = ({ features }: Props) => {

    return (

        <motion.section

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            transition={{ duration: .7 }}

            className="mt-24"

        >

            <h2 className="mb-10 text-4xl font-bold text-white">

                Features

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {

                    features.map((feature) => (

                        <div

                            key={feature}

                            className="
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900
                                p-6
                                text-slate-300
                            "

                        >

                            ✓ {feature}

                        </div>

                    ))

                }

            </div>

        </motion.section>

    );

};

export default ProjectFeatures;