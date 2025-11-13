import css from "./Sections.module.css";
import Home from './section-home/Home';
import AboutMe from "./section-about-me/AboutMe";
import Skills from "./section-skills/Skills";

const Sections = ({sectionRefs}) => {
    return(
        <section className={css.sections}>
            <Home ref={sectionRefs.home}/>
            <AboutMe ref={sectionRefs.aboutMe}/>
            <Skills/>
        </section>
    )
}

export default Sections