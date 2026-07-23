import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {

    return (

        <section
            id="experience"
            className="py-32"
        >

            <Container>

                <SectionTitle
                    title="Experience"
                    subtitle="Professional Journey"
                />

                <ExperienceTimeline />

            </Container>

        </section>

    );

};

export default Experience;