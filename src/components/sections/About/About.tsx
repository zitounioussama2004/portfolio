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

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <AboutImage />

                    <AboutContent />

                </div>

            </Container>

        </section>

    );

};

export default About;