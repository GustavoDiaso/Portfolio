import css from "./Sections.module.css";
import Home from './section-home/Home';
import AboutMe from "./section-about-me/AboutMe";
import Skills from "./section-skills/Skills";
import Experiences from "./section-experiences/Experiences";
import Certifications from "./section-certifications/Certifications";
import Projects from "./section-projects/Projects";
import Contact from "./section-contact/Contact";

/* 
    The Sections component receives an object which will hold references to all sections in our website
    For it to happen, Sections will need to pass each property of the sectionReferences obj to each
    section in the website, which will then set themselves as references inside the obj
*/ 
const Sections = ({ sectionReferences }) => {
    return (
        <section className={css.sections}>
            <Home ref={sectionReferences.home} />
            <AboutMe ref={sectionReferences.aboutMe} />
            <Skills ref={sectionReferences.skills} />
            <Experiences ref={sectionReferences.experiences} />
            <Certifications ref={sectionReferences.certifications} />
            <Projects ref={sectionReferences.projects} />
            <Contact ref={sectionReferences.contact} />
        </section>
    )
}

export default Sections