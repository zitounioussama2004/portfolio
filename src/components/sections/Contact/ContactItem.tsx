import { motion } from "framer-motion";

interface Props {

    icon: React.ReactNode;

    title: string;

    value: string;

}

const ContactItem = ({ icon, title, value }: Props) => {

    return (

        <motion.div

            whileHover={{
                x: 8
            }}

            className="
                flex
                items-center
                gap-5

                rounded-2xl

                border

                border-slate-800

                bg-slate-900/60

                p-5

                transition

                hover:border-blue-500
            "

        >

            <div
                className="
                    flex

                    h-14

                    w-14

                    items-center

                    justify-center

                    rounded-xl

                    bg-blue-500/10

                    text-blue-400

                    text-xl
                "
            >

                {icon}

            </div>

            <div>

                <p className="text-sm text-slate-500">

                    {title}

                </p>

                <h4 className="font-semibold text-white">

                    {value}

                </h4>

            </div>

        </motion.div>

    );

};

export default ContactItem;