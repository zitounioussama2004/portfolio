import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid items-center gap-20 lg:grid-cols-2"
        >
          <HeroContent />

          <HeroImage />
        </motion.div>
      </Container>

    </section>
  );
};

export default Hero;
