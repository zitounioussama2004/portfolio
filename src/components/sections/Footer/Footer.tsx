import Container from "../../ui/Container";

import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import BackToTop from "./BackToTop";

const Footer = () => {

    return (

        <footer className="pt-32 pb-10 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400">

            <Container>

                <FooterCTA/>

                <FooterLinks/>

                <FooterSocial/>

                <FooterBottom/>

            </Container>

            <BackToTop/>

        </footer>

    );

};

export default Footer;