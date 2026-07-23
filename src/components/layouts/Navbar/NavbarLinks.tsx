import { navigation } from "../../../data/navigation";

import NavbarItem from "./NavbarItem";

import useActiveSection from "./useActiveSection";

const NavbarLinks = () => {

    const { active } = useActiveSection();

    return (

        <nav
            className="
                hidden
                items-center
                gap-8
                lg:flex
            "
        >

            {

                navigation.map((item) => (

                    <NavbarItem

                        key={item.id}

                        id={item.id}

                        label={item.label}

                        active={active}

                        

                    />

                ))

            }

        </nav>

    );

};

export default NavbarLinks;