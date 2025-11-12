import css from "./Sections.module.css"
import Home from './section-home/Home'
import AboutMe from "./section-about-me/AboutMe"
import Skills from "./section-skills/Skills"

function Sections(){
    return(
        <section className={css.sections}>
            <Home/>
            <AboutMe/>
            <Skills/>
        </section>
    )
}

export default Sections