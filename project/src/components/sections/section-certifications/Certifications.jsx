import { forwardRef, useEffect, useRef, useState } from "react";
import css from './Certifications.module.css';
import myCertifications from "./myCertifications.js";

const Certifications = forwardRef(
    (
        props,
        ref
    ) => {

        const certificationsList = useRef(null);

        useEffect(
            ()=>{
                if (!certificationsList.current){
                    return
                }

                const viewCertificationButtons = certificationsList.current.querySelectorAll(`.${css.btn_view_certification}`);
                // console.dir(viewCertificationButtons)
                console.dir(viewCertificationButtons)
            }, 
            []
        )

        const handleCertificationHover = (certificationID)=>{
            const certification = certificationsList.current.querySelector(`[id="${certificationID}"]`);
            console.dir(certification)
            

        }


        return (
            <section className={css.section_certifications} ref={ref}>
                <h1 className={css.title}>Certifications</h1>
                <ul className={css.certifications_list} ref={certificationsList}>
                    {
                        myCertifications.map(
                            (certification) => {
                                return(
                                    <li 
                                        className={css.certification_card} 
                                        key={certification.name}
                                        style={
                                            {
                                                backgroundImage: `
                                                    linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.92),rgba(0, 0, 0, 1)), 
                                                    url(${certification.certificationIMG})
                                                `,
                                            }
                                        }
                                        onMouseOver={()=>{handleCertificationHover(certification.id)}}
                                        id={certification.id}
                                    >
                                        <h2>{certification.name}</h2>
                                        <p>{certification.company}</p>
                                        <p>{certification.issueDate}</p>
                                        <p>{certification.link}</p>

                                        
                                        <a 
                                            href="" 
                                            className={css.btn_view_certification} 
                                        >
                                            View Certification
                                        </a>
                                        
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </section>
        )
    }
)

export default Certifications