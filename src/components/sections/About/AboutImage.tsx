import { aboutData } from "../../../data/about";

const AboutImage = () => {

    return (

        <div className="relative flex justify-center">

            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

            <img
                src={aboutData.image}
                alt="About"
                className="
                    relative
                    w-[420px]
                    rounded-3xl
                    border
                    border-white/10
                    shadow-2xl
                "
            />

        </div>

    );

};

export default AboutImage;