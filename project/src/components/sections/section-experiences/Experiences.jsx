import css from './Experiences.module.css';
import { forwardRef } from 'react';
import {professional_experiences, educational_experiences} from './myExperiences.js'

const Experiences = forwardRef(
    (
        props,
        ref
    ) => {

        return (
            <section ref={ref} className={css.section_experiences}>
                             
                <div id='educational_experiences' className={css.experiences}>
                    <h1 className={css.title}>Educational Experiences 🧑‍🎓</h1>
                    <ul className={css.experiences_list}>
                    {
                        educational_experiences.map((experience)=>{
                            return(
                                <li key={experience.institution}>
                                    <div className={css.arrow_indicator}></div>
                                    <div className={css.experience_information}>
                                        <h2>{experience.institution}</h2>
                                        <p>{experience.period}</p>
                                        <p>{experience.degree} degree in {experience.course}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>

                <div id='professional_experiences' className={css.experiences}>
                    <h1 className={css.title}>Professional Experiences 👨‍💼</h1>
                    <ul className={css.experiences_list}>
                    {
                        professional_experiences.map((experience)=>{
                            return(
                                <li key={experience.company+experience.period}>
                                    <div className={css.arrow_indicator}></div>
                                    <div className={css.experience_information}>
                                        <h2>{experience.company}</h2>
                                        <p>{experience.period}</p>
                                        <p>{experience.area}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                

            </section>
        )
    }
)

export default Experiences