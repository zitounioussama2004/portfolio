interface Props {
    value: string;
    onChange: (value: string) => void;
}

import { Search } from "lucide-react";

const ProjectSearch = ({ value, onChange }: Props) => {

    return (

        <div className="relative w-full md:max-w-md">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                "
            />

            <input

                type="text"

                value={value}

                onChange={(e)=>onChange(e.target.value)}

                placeholder="Search projects..."

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    py-3
                    pl-11
                    pr-4
                    text-white
                    outline-none
                    transition
                    focus:border-blue-500
                "

            />

        </div>

    );

};

export default ProjectSearch;