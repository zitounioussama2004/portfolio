import { GraduationCap } from "lucide-react";

const EducationDot = () => {

    return (

        <div
            className="
                absolute
                left-6
                top-8
                -translate-x-1/2

                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                border-4

                border-slate-950

                bg-gradient-to-br

                from-cyan-400

                to-blue-600

                shadow-xl
            "
        >

            <GraduationCap

                size={24}

                className="text-white"

            />

        </div>

    );

};

export default EducationDot;