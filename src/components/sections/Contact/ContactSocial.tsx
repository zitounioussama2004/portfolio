import { socials } from "../../../data/social";

const ContactSocial = () => {

    return (

        <div className="mt-10 flex gap-5">

            {

                socials.map((item) => {

                    const Icon = item.icon;

                    return (

                        <a

                            key={item.name}

                            href={item.url}

                            target="_blank"

                            rel="noreferrer"

                            style={{
                                color: item.color,
                                borderColor: item.color
                            }}

                            className="
                                flex

                                h-14

                                w-14

                                items-center

                                justify-center

                                rounded-full

                                border-2

                                text-2xl

                                transition

                                hover:scale-110

                                hover:bg-white/10
                            "

                        >

                            <Icon />

                        </a>

                    );

                })

            }

        </div>

    );

};

export default ContactSocial;