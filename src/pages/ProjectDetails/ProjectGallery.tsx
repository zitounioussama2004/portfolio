import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

const AUTOPLAY_DELAY = 3000;

const ProjectGallery = ({ project }: Props) => {
  const [current, setCurrent] = useState(0);

  const [pause, setPause] = useState(false);

  const images = project.images.length ? project.images : [project.cover];

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [pause, images.length]);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-28">
      <h2 className="mb-10 text-4xl font-bold text-white">Gallery</h2>

      <div
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={project.title}
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
                            h-[650px]
                            w-full
                            rounded-3xl
                            object-cover
                            border
                            border-slate-800
                        "
          />
        </AnimatePresence>

        <button
          onClick={previous}
          className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-slate-900/80
                        p-3
                        text-white
                        transition
                        hover:bg-blue-600
                    "
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-slate-900/80
                        p-3
                        text-white
                        transition
                        hover:bg-blue-600
                    "
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`

                                h-3
                                rounded-full
                                transition-all
                                duration-300

                                ${
                                  current === index
                                    ? "w-10 bg-blue-500"
                                    : "w-3 bg-slate-600"
                                }

                            `}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrent(index)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={`

                    h-14
                    w-20
                    cursor-pointer
                    rounded-lg
                    object-cover
                    border-2
                    shadow-lg
                    transition-all
                    duration-300

                    ${
                      current === index
                        ? "border-blue-500 opacity-100 scale-105"
                        : "border-slate-700 opacity-60 hover:opacity-100"
                    }

                `}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
