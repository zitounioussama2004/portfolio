interface Props{

    categories:string[];

    selected:string;

    onSelect:(category:string)=>void;

}

const ProjectFilters = ({

    categories,

    selected,

    onSelect

}:Props)=>{

    return(

        <div
            className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-3
            "
        >

            {

                categories.map(category=>(

                    <button

                        key={category}

                        onClick={()=>onSelect(category)}

                        className={`

                            rounded-full

                            px-5

                            py-2

                            text-sm

                            font-semibold

                            transition

                            ${
                                selected===category

                                ?

                                "bg-blue-600 text-white"

                                :

                                "bg-slate-800 text-slate-300 hover:bg-slate-700"

                            }

                        `}

                    >

                        {category}

                    </button>

                ))

            }

        </div>

    );

};

export default ProjectFilters;