import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {

    return (

        <section
            id="contact"
            className="py-32"
        >

            <Container>

                <SectionTitle
                    title="Contact"
                    subtitle="Let's Work Together"
                />

                <div
                    className="
                        mt-20
                        grid
                        gap-12
                        lg:grid-cols-2
                    "
                >

                    <ContactInfo/>

                    <ContactForm/>

                </div>

            </Container>

        </section>

    );

};

export default Contact;