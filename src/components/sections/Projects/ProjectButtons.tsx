import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
    slug: string;
}

const ProjectButtons = ({ slug }: Props) => {
    return (
        <div className="mt-8">

            <Link
                to={`/projects/${slug}`}
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-500
                "
            >
                View Project
                <ArrowRight size={18} />
            </Link>

        </div>
    );
};

export default ProjectButtons;