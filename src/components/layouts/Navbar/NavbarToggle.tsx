import { Menu, X } from "lucide-react";

interface Props {

    open: boolean;

    onClick: () => void;

}

const NavbarToggle = ({ open, onClick }: Props) => {

    return (

        <button

            onClick={onClick}

            className="
                text-white
                bg-slate-900
                lg:hidden
            "

        >

            {

                open

                    ?

                    <X size={30} />

                    :

                    <Menu size={30} />

            }

        </button>

    );

};

export default NavbarToggle;