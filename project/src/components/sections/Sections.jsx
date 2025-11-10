import css from "./Sections.module.css"
import Home from './section-home/Home'
import AboutMe from "./section-about-me/AboutMe"

function Sections(){
    return(
        <section className={css.sections}>
            <Home/>
            <AboutMe/>
        </section>
    )
}

export default Sections