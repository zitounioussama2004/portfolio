const FooterBottom = () => {

    return (

        <div
            className="

                mt-16

                border-t

                border-slate-800

                pt-8

                text-center

            "
        >

            <p
                className="

                    text-slate-400

                "
            >

                © {new Date().getFullYear()}

                {" "}

                <span className="font-semibold text-white">

                    Zitouni Oussama

                </span>

            </p>

            <p
                className="

                    mt-3

                    text-sm

                    text-slate-500

                "
            >

                Made with ❤️ using

                {" "}

                React

                {" • "}

                TypeScript

                {" • "}

                TailwindCSS

                {" • "}

                Framer Motion

            </p>

        </div>

    );

};

export default FooterBottom;