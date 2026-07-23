import ContactCard from "./ContactCard";
import ContactItem from "./ContactItem";
import ContactSocial from "./ContactSocial";
import ContactMap from "./ContactMap";


import {

    Mail,

    Phone,

    MapPin

} from "lucide-react";

const ContactInfo = () => {

    return (

        <ContactCard>

            <h2
                className="
                    text-4xl

                    font-bold

                    text-white
                "
            >

                Get In Touch

            </h2>

            <p
                className="
                    mt-5

                    leading-8

                    text-slate-400
                "
            >

                I'm always interested in discussing new opportunities,
                freelance work, innovative ideas or collaboration on exciting projects.

            </p>

            <div className="mt-10 space-y-5">

                <ContactItem

                    icon={<Mail />}

                    title="Email"

                    value="zitounioussama2004@gmail.com"

                />

                <ContactItem

                    icon={<Phone />}

                    title="Phone"

                    value="+213 556 60 27 28"

                />

                <ContactItem

                    icon={<MapPin />}

                    title="Location"

                    value="Bordj Bou Arreridj, Algeria"

                />

            </div>

            <ContactSocial />
            <ContactMap />

        </ContactCard>

    );

};

export default ContactInfo;