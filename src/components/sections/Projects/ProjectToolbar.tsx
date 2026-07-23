import ProjectFilters from "./ProjectsFilter";
import ProjectSearch from "./ProjectsSearch";

interface Props{

    search:string;

    onSearch:(value:string)=>void;

    selected:string;

    onSelect:(value:string)=>void;

    categories:string[];

}

const ProjectToolbar=(props:Props)=>{

    return(

        <>

            <div className="mt-12 flex justify-center">

                <ProjectSearch

                    value={props.search}

                    onChange={props.onSearch}

                />

            </div>

            <ProjectFilters

                categories={props.categories}

                selected={props.selected}

                onSelect={props.onSelect}

            />

        </>

    );

};

export default ProjectToolbar;