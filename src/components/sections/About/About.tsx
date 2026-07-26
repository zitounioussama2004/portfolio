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
                        items-center
                        gap-20

                        lg:grid-cols-3
                    "
                >

                    {/* Photo : 1/3 */}

                    <div
                        className="
                            flex
                            justify-center
                            lg:justify-start
                        "
                    >

                        <AboutImage />

                    </div>

                    {/* Informations : 2/3 */}

                    <div
                        className="
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