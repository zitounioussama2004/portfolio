import Container from "../../ui/Container";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {

    return (

        <section
            id="about"
            className="py-32"
        >

            <Container>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-16

                        lg:grid-cols-3
                        lg:items-center
                    "
                >

                    {/* Informations */}

                    <div
                        className="
                            order-1
                            lg:order-2
                            lg:col-span-2
                        "
                    >

                        <AboutContent />

                    </div>

                    {/* Photo */}

                    <div
                        className="
                            order-2
                            lg:order-1

                            flex
                            justify-center
                            lg:justify-start
                        "
                    >

                        <AboutImage />

                    </div>

                </div>

            </Container>

        </section>

    );

};

export default About;