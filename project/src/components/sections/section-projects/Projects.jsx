import { forwardRef } from "react";
import css from './Projects.module.css';
import projects from './myProjects.js';

const Projects = forwardRef(
    (
        props,
        ref
    ) => {
        return(
            <section ref={ref} className={css.section_project}>
                <h1 className={css.title}>Projects</h1>
                <ul className={css.project_cards_list}>
                    {
                    projects.map((project)=>{
                        return(
                            <li className={css.project_card}>
                                <h2>{project.name}</h2>
                                <ul className={css.technologies_list}>
                                    {
                                    project.technologies.map((t)=>{
                                        return(
                                            <li>{t}</li>
                                        )
                                    })
                                    }
                                </ul>
                                <p>{project.description}</p>
                                <a href={project.gitHubLink} target="_blank">Access on GitHub</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>
        )
    }
);

export default Projects