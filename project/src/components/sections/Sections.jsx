import css from "./Sections.module.css";
import Home from './section-home/Home';
import AboutMe from "./section-about-me/AboutMe";
import Skills from "./section-skills/Skills";

const Sections = ({ sectionReferences }) => {
    return (
        <section className={css.sections}>
            <Home ref={sectionReferences.home} />
            <AboutMe ref={sectionReferences.aboutMe} />
            <Skills />
        </section>
    )
}

export default Sections