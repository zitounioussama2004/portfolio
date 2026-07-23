import Badge from "../../ui/Badge";

import HeroStats from "./HeroStats";
import HeroTech from "./HeroTech";
import HeroSocial from "./HeroSocial";
import HeroButtons from "./HeroButtons";

import { heroData } from "../../../data/hero";

import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {

    return (

        <div>

            <Badge>

                🟢 Available for Works 2026

            </Badge>

            <p className="mt-8 text-xl text-slate-700 dark:text-slate-300">

                Hello, I'm

            </p>

            <h1 className="mt-2 text-5xl font-black leading-tight lg:text-7xl">

                <span className="block">

                    {heroData.firstName}

                </span>

                <span
                    className="
                        mt-2
                        block
                        bg-gradient-to-r
                        from-blue-500
                        via-cyan-400
                        to-blue-600
                        bg-clip-text
                        text-transparent
                    "
                >

                    {heroData.lastName}

                </span>

            </h1>

            <TypeAnimation

                sequence={[

                    "Software Engineer",
                    2000,

                    "Full Stack Developer",
                    2000,

                    "AI Engineer",
                    2000,

                    "Java Developer",
                    2000,

                ]}

                wrapper="h2"

                speed={70}

                repeat={Infinity}

                className="
                    mt-8
                    text-3xl
                    font-bold
                    text-blue-500
                "

            />

            <p
                className="
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-8
                    text-slate-600
                    dark:text-slate-400
                "
            >

                {heroData.description}

            </p>

            {/* Buttons */}

            <HeroButtons />

            {/* Stats */}

            <HeroStats />

            {/* Technologies */}

            <HeroTech />

            {/* Social */}

            <HeroSocial />

        </div>

    );

};

export default HeroContent;
