import { useEffect, useState } from "react";

const useCursor = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [hovered, setHovered] = useState(false);

    useEffect(() => {

        const move = (e: MouseEvent) => {

            setPosition({

                x: e.clientX,

                y: e.clientY,

            });

        };

        const enter = () => setHovered(true);

        const leave = () => setHovered(false);

        window.addEventListener("mousemove", move);

        const elements = document.querySelectorAll(

            "a,button,input,textarea,.cursor-hover"

        );

        elements.forEach((el) => {

            el.addEventListener("mouseenter", enter);

            el.addEventListener("mouseleave", leave);

        });

        return () => {

            window.removeEventListener("mousemove", move);

            elements.forEach((el) => {

                el.removeEventListener("mouseenter", enter);

                el.removeEventListener("mouseleave", leave);

            });

        };

    }, []);

    return {

        x: position.x,

        y: position.y,

        hovered,

    };

};

export default useCursor;