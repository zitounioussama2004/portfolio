import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props{

    slug?:string;

}

const ExperienceButton=({

    slug

}:Props)=>{

    if(!slug) return null;

    return(

        <Link

            to={`/projects/${slug}`}

            className="
                mt-8

                inline-flex

                items-center

                gap-2

                rounded-xl

                bg-blue-600

                px-6

                py-3

                font-semibold

                text-white

                transition

                hover:bg-blue-500
            "

        >

            View Project

            <ArrowRight size={18}/>

        </Link>

    );

};

export default ExperienceButton;