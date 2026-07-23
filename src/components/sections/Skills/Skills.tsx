import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import SkillCategory from "./SkillCategory";

const Skills = () => {

    return (

        <section
            id="skills"
            className="py-32"
        >

            <Container>

                <SectionTitle

                    title="My Skills"

                    subtitle="Technologies & Tools"

                />

                <SkillCategory category="Backend"/>

                <SkillCategory category="Frontend"/>

                <SkillCategory category="Mobile"/>

                <SkillCategory category="AI"/>

                <SkillCategory category="Database"/>

                <SkillCategory category="Tools"/>

            </Container>

        </section>

    );

};

export default Skills;