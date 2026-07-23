import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import EducationTimeline from "./EducationTimeline";

const Education = () => {

    return (

        <section
            id="education"
            className="py-32"
        >

            <Container>

                <SectionTitle

                    title="Education"

                    subtitle="Academic Journey"

                />

                <EducationTimeline/>

            </Container>

        </section>

    );

};

export default Education;