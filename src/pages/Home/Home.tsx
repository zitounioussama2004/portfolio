import MainLayout from "../../components/layouts/MainLayout";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Skills from "../../components/sections/Skills";
import Projects from "../../components/sections/Projects";
import Education from "../../components/sections/Education";
import Experience from "../../components/sections/Experience"
import Contact from "../../components/sections/Contact";

const Home = () => {
    return (
        <MainLayout>

            <Hero />

            <About />

            <Skills />

            <Projects />

            <Education />

            <Experience />

            <Contact />
            
        </MainLayout>
    );
};

export default Home;