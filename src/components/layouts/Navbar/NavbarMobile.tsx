import { motion, AnimatePresence } from "framer-motion";

import { navigation } from "../../../data/navigation";

interface Props {

    open: boolean;

    close: () => void;

}

const NavbarMobile = ({ open, close }: Props) => {

    return (

        <AnimatePresence>

            {

                open && (

                    <motion.div

                        initial={{ opacity: 0, x: 300 }}

                        animate={{ opacity: 1, x: 0 }}

                        exit={{ opacity: 0, x: 300 }}

                        transition={{ duration: .35 }}

                        className="
                            fixed
                            inset-0
                            z-40
                            bg-slate-950/95
                            backdrop-blur-xl
                            lg:hidden
                        "

                    >

                        <div
                            className="
                                mt-32
                                flex
                                flex-col
                                items-center
                                gap-8
                            "
                        >

                            {

                                navigation.map((item) => (

                                    <a

                                        key={item.id}

                                        href={`#${item.id}`}

                                        onClick={close}

                                        className="
                                            text-2xl
                                            font-semibold
                                            text-white
                                            transition
                                            hover:text-blue-400
                                        "

                                    >

                                        {item.label}

                                    </a>

                                ))

                            }

                        </div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

};

export default NavbarMobile;