import css from './Experience.module.css';
import { forwardRef } from 'react';

const educational_experience = [
    {
        institution: 'ETEC Lauro Gomes - BRAZIL',
        course: 'Systems analysis and development',
        period: 'JAN/2020 - DEC/2022',
        degree: 'Technical',
    },
    {
        institution: 'UFABC - Federal Universisty of ABC - BRAZIL',
        course: 'Computer Science',
        period: 'MAY/2023 - DEC/2027',
        degree: "Bachelor's",
    },
];

const professional_experience = [
    {
        company: 'ITW Delfast from Brazil',
        area: 'IT - Intern',
        duties: "",
    },
    {
        company: 'ITW Delfast from Brazil',
        area: 'IT - Apprentice',
        duties: "",
    },
]


const Experience = forwardRef(
    (
        props,
        ref
    ) => {

        return (
            <section ref={ref} className={css.section_experience}>

                <div className={css.educational_experience}>

                </div>

                <div className={css.professional_experience}>

                </div>

            </section>
        )
    }
)

export default Experience