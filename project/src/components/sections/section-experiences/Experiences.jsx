import css from './Experiences.module.css';
import { forwardRef } from 'react';

const educational_experiences = [
    {
        institution: 'UFABC - Federal Universisty of ABC - BRAZIL',
        course: 'Computer Science',
        period: 'MAY/2023 - DEC/2027',
        degree: "Bachelor's",
    },
    {
        institution: 'ETEC Lauro Gomes - BRAZIL',
        course: 'Systems analysis and development',
        period: 'JAN/2020 - DEC/2022',
        degree: 'Technical',
    },
];

const professional_experiences = [
    {
        company: 'ITW Delfast from Brazil',
        area: 'IT - Intern',
        period: 'NOV/2024 - Present',
        duties: [
            `Developed applications on the PowerApps platform, optimizing internal processes and automating workflows.`,
            `Provided on-site and remote technical support to users across different departments.`,
            `Created task automations with Power Automate, reducing request completion time by 20% and contributing 
            to the operational efficiency of various teams.`,
            `Designed and conducted IT training sessions to empower employees in the use of new technologies.`,

        ],
    },
    {
        company: 'ITW Delfast from Brazil',
        area: 'IT - Apprentice',
        period: 'AUG/2023 - OCT/2024',
        duties: [
            `Administered SharePoint sites and libraries, focusing on permissions control to ensure corporate 
            file security.`,
            `Performed corrective and preventive hardware and software maintenance on computers and mobile 
            devices, ensuring maximum equipment performance for the team.`,
            `Provided technical support to users in on-site and remote settings for hardware, software, and
            network incidents, ensuring continuous employee productivity.`,
        ],
    },
]


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
                                    <div className={css.ball_indicator}></div>
                                    <div className={css.experience_information}>
                                        <h1>{experience.institution}</h1>
                                        <p>{experience.degree} degree in {experience.course}</p>
                                        <p>{experience.period}</p>
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
                                        <div className={css.ball_indicator}></div>
                                        <div className={css.experience_information}>
                                            <h1>{experience.company}</h1>
                                            <p>{experience.area}</p>
                                            <p>{experience.period}</p>
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