import { socials } from "../../../data/social";

const HeroSocial = () => {

    return (

        <div className="mt-10 flex gap-5">

            {

                socials.map((social) => {

                    const Icon = social.icon;

                    return (

                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10"
                        >

                            <Icon size={25} />

                        </a>

                    );

                })

            }

        </div>

    );

};

export default HeroSocial;