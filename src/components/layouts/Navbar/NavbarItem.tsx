import ActiveIndicator from "./ActiveIndicator";

interface Props{

    id:string;

    label:string;

    active:string;

}

const NavbarItem=({

    id,

    label,

    active

}:Props)=>{

    return(

        <a

            href={`#${id}`}

            className="

                relative

                px-2

                py-2

                font-medium

                transition

                duration-300

            "

        >

            <span

                className={

                    active===id

                    ?

                    "text-blue-400"

                    :

                    "text-slate-300 hover:text-white"

                }

            >

                {label}

            </span>

            {

                active===id &&

                <ActiveIndicator/>

            }

        </a>

    );

};

export default NavbarItem;