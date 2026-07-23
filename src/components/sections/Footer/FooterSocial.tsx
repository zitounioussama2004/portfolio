import { socials } from "../../../data/social";

import { motion } from "framer-motion";

const FooterSocial = () => {

    return (

        <motion.div

            initial={{

                opacity:0

            }}

            whileInView={{

                opacity:1

            }}

            viewport={{

                once:true

            }}

            transition={{

                delay:.2

            }}

            className="

                mt-14

                flex

                justify-center

                gap-5

            "

        >

            {

                socials.map(item=>{

                    const Icon=item.icon;

                    return(

                        <motion.a

                            whileHover={{

                                scale:1.15,

                                rotate:8

                            }}

                            whileTap={{

                                scale:.9

                            }}

                            key={item.name}

                            href={item.url}

                            target="_blank"

                            rel="noopener noreferrer"

                            style={{

                                borderColor:item.color,

                                color:item.color

                            }}

                            className="

                                flex

                                h-14

                                w-14

                                items-center

                                justify-center

                                rounded-full

                                border-2

                                text-2xl

                                transition

                            "

                        >

                            <Icon/>

                        </motion.a>

                    );

                })

            }

        </motion.div>

    );

};

export default FooterSocial;