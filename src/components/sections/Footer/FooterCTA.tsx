import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

const FooterCTA = () => {

    return (

        <motion.div

            initial={{
                opacity:0,
                y:60
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:.8
            }}

            className="

                relative

                overflow-hidden

                rounded-[32px]

                bg-gradient-to-r

                from-blue-600

                via-cyan-500

                to-indigo-600

                px-10

                py-20

                text-center

            "

        >

            {/* Glow */}

            <div
                className="
                    absolute

                    -top-24

                    left-1/2

                    h-72

                    w-72

                    -translate-x-1/2

                    rounded-full

                    bg-white/10

                    blur-3xl
                "
            />

            <h2
                className="
                    relative

                    text-5xl

                    font-black

                    text-white
                "
            >

                Let's Build

                <br/>

                Something Amazing

            </h2>

            <p
                className="
                    relative

                    mx-auto

                    mt-8

                    max-w-3xl

                    text-lg

                    leading-8

                    text-blue-100
                "
            >

                I'm currently available for internships,

                freelance projects and full-time opportunities.

                If you have an idea, let's make it happen.

            </p>

            <a

                href="#contact"

                className="

                    relative

                    mt-12

                    inline-flex

                    items-center

                    gap-3

                    rounded-2xl

                    bg-white

                    px-10

                    py-5

                    font-bold

                    text-blue-600

                    transition

                    hover:scale-105

                "

            >

                Contact Me

                <ArrowRight size={22}/>

            </a>

        </motion.div>

    );

};

export default FooterCTA;