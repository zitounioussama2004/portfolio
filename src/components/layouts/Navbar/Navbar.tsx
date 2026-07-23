import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Container from "../../ui/Container";
import ThemeToggle from "../../ui/ThemeToggle";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarToggle from "./NavbarToggle";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`

                fixed

                top-0

                left-0

                z-50

                w-full

                transition-all

                duration-500

                ${
                  scrolled
                    ? "border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl"
                    : "bg-transparent"
                }

            `}
    >
      <Container>
        <div
          className="
                        flex
                        h-20
                        items-center
                        justify-between
                    "
        >
          <NavbarLogo />

          <div
            className="

        hidden

        items-center

        gap-8

        lg:flex

    "
          >
            <NavbarLinks />

            <ThemeToggle />
          </div>

          <NavbarToggle open={open} onClick={() => setOpen(!open)} />
        </div>
      </Container>

      <NavbarMobile open={open} close={() => setOpen(false)} />
    </motion.header>
  );
};

export default Navbar;
