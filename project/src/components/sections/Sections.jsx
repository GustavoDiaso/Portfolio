import css from "./Sections.module.css"
import Home from './section-home/Home'

function Sections(){
    return(
        <section className={css.sections}>
            <Home/>
        </section>
    )
}

export default Sections