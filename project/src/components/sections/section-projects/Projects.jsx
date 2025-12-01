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
                <h1 className={css.title}>{"< Projects  />"}</h1>
                <ul className={css.project_cards_list}>
                    {
                    projects.map((project, project_index)=>{
                        return(
                            <li className={css.project_card} key={"project_card_" + project_index}>
                                <h2>{project.name}</h2>
                                <ul className={css.technologies_list}>
                                    {
                                    project.technologies.map((technology, technology_index)=>{
                                        return(
                                            <li 
                                                key={
                                                    "technology_" + technology_index + "_card_" + project_index 
                                                }
                                            >
                                                {technology}
                                            </li>
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