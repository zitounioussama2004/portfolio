import { useEffect,useState } from "react";

import { ChevronUp } from "lucide-react";

import { motion,AnimatePresence } from "framer-motion";

const BackToTop=()=>{

    const[visible,setVisible]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            setVisible(window.scrollY>500);

        };

        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    return(

        <AnimatePresence>

            {

                visible && (

                    <motion.button

                        initial={{

                            opacity:0,

                            scale:.7

                        }}

                        animate={{

                            opacity:1,

                            scale:1

                        }}

                        exit={{

                            opacity:0,

                            scale:.7

                        }}

                        onClick={()=>window.scrollTo({

                            top:0,

                            behavior:"smooth"

                        })}

                        className="

                            fixed

                            bottom-8

                            right-8

                            z-50

                            flex

                            h-14

                            w-14

                            items-center

                            justify-center

                            rounded-full

                            bg-blue-600

                            text-white

                            shadow-xl

                            transition

                            hover:bg-blue-500

                        "

                    >

                        <ChevronUp/>

                    </motion.button>

                )

            }

        </AnimatePresence>

    );

};

export default BackToTop;