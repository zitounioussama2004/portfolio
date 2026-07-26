import Container from "../../ui/Container";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {

    return (

       <section>

    <Container>

        <div
            className="
                grid
                gap-16
                lg:grid-cols-3
            "
        >

            {/* Desktop : gauche */}
            {/* Mobile : troisième */}

            <div
                className="
                    order-3
                    lg:order-1
                    flex
                    justify-center
                "
            >
                <AboutImage />
            </div>

            {/* Desktop : droite */}
            {/* Mobile : premier */}

            <div
                className="
                    order-1
                    lg:order-2
                    lg:col-span-2
                "
            >
                <AboutContent />
            </div>

        </div>

    </Container>

</section>

    );

};

export default About;