import css from "./Sections.module.css";
import Home from './section-home/Home';
import AboutMe from "./section-about-me/AboutMe";
import Skills from "./section-skills/Skills";
import Experiences from "./section-experiences/Experiences"

const Sections = ({ sectionReferences }) => {
    return (
        <section className={css.sections}>
            <Home ref={sectionReferences.home} />
            <AboutMe ref={sectionReferences.aboutMe} />
            <Skills ref={sectionReferences.skills} />
            <Experiences ref={sectionReferences.experiences} />
        </section>
    )
}

export default Sections