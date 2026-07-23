import { motion } from "framer-motion";

const links = [

    {
        title:"Home",
        href:"#hero"
    },

    {
        title:"About",
        href:"#about"
    },

    {
        title:"Skills",
        href:"#skills"
    },

    {
        title:"Projects",
        href:"#projects"
    },

    {
        title:"Education",
        href:"#education"
    },

    {
        title:"Experience",
        href:"#experience"
    },

    {
        title:"Contact",
        href:"#contact"
    },

];

const FooterLinks = () => {

    return (

        <motion.div

            initial={{

                opacity:0,

                y:40

            }}

            whileInView={{

                opacity:1,

                y:0

            }}

            viewport={{

                once:true

            }}

            transition={{

                duration:.7

            }}

            className="

                mt-20

                flex

                flex-wrap

                justify-center

                gap-8

            "

        >

            {

                links.map(link=>(

                    <a

                        key={link.title}

                        href={link.href}

                        className="

                            font-medium

                            text-slate-400

                            transition

                            hover:text-blue-400

                        "

                    >

                        {link.title}

                    </a>

                ))

            }

        </motion.div>

    );

};

export default FooterLinks;