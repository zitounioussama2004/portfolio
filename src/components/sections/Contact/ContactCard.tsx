import { motion } from "framer-motion";

interface Props {

    children: React.ReactNode;

}

const ContactCard = ({ children }: Props) => {

    return (

        <motion.div

            initial={{
                opacity: 0,
                x: -50
            }}

            whileInView={{
                opacity: 1,
                x: 0
            }}

            viewport={{
                once: true
            }}

            transition={{
                duration: .7
            }}

            className="
                rounded-3xl

                border

                border-slate-800

                bg-slate-900/60

                p-10

                backdrop-blur-xl
            "

        >

            {children}

        </motion.div>

    );

};

export default ContactCard;