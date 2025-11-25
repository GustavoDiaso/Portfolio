import { forwardRef, useEffect, useRef, useState } from "react";
import css from './Certifications.module.css';
import myCertifications from "./myCertifications.js";

const Certifications = forwardRef(
    (
        props,
        ref
    ) => {

        const certificationsCardsList = useRef(null);

        const handleCertificationCardEnter = (certificationId) => {
            if (certificationsCardsList.current === null) return;


            const certificationCard = certificationsCardsList.current.querySelector(
                `[data-certification-id="${certificationId}"]`
            );

            const certificationDonwloadMenu = certificationCard.querySelector(
                `.${css.donwload_certification_menu_hidden}`
            );

            const donwloadCertificationLink = certificationCard.querySelector(
                `a`
            );

            // increasing the intensity of the black shadow in the background of the cards
            certificationCard.style.backgroundImage = `
                linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 1)), 
                url(${certificationCard.dataset.certificationImgPath})
            `;

            certificationDonwloadMenu.classList.remove(css.donwload_certification_menu_hidden);
            certificationDonwloadMenu.classList.add(css.donwload_certification_menu_appearing);
            donwloadCertificationLink.classList.remove(css.donwload_certification_link_hidden);
            donwloadCertificationLink.classList.add(css.donwload_certification_link_appearing);

        };

        const handleCertificationCardLeave = (certificationId) => {
            if (certificationsCardsList.current === null) return;

            const certificationCard = certificationsCardsList.current.querySelector(
                `[data-certification-id="${certificationId}"]`
            );

            const certificationDonwloadMenu = certificationCard.querySelector(
                `.${css.donwload_certification_menu_appearing}`
            );

            const donwloadCertificationLink = certificationCard.querySelector(
                `a`
            );

            // decreasing the intensity of the black shadow in the background of the cards
            certificationCard.style.backgroundImage = `
                linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.96),rgba(0, 0, 0, 1)),
                url(${certificationCard.dataset.certificationImgPath})
            `;

            certificationDonwloadMenu.classList.remove(css.donwload_certification_menu_appearing);
            certificationDonwloadMenu.classList.add(css.donwload_certification_menu_hidden);
            donwloadCertificationLink.classList.remove(css.donwload_certification_link_appearing);
            donwloadCertificationLink.classList.add(css.donwload_certification_link_hidden);
        };


        return (
            <section className={css.section_certifications} ref={ref}>
                <h1 className={css.title}>Certifications</h1>
                <ul className={css.certifications_list} ref={certificationsCardsList}>
                    {
                        myCertifications.map(
                            (certification, index) => {
                                return (
                                    <li
                                        className={css.certification_card}
                                        key={certification.name}
                                        data-certification-id={index}
                                        data-certification-img-path={certification.certificationIMG}
                                        style={
                                            {
                                                backgroundImage: `
                                                    linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.96),rgba(0, 0, 0, 1)), 
                                                    url(${certification.certificationIMG})
                                                `,
                                            }
                                        }
                                        onMouseEnter={
                                            () => { handleCertificationCardEnter(index) }
                                        }
                                        onMouseLeave={
                                            () => { handleCertificationCardLeave(index) }
                                        }
                                    >
                                        <h2>{certification.name}</h2>
                                        <p>{certification.company}</p>
                                        <p>{certification.issueDate}</p>

                                        <div className={css.donwload_certification_menu_hidden}></div>

                                        <a
                                            href={certification.certificationIMG}
                                            className={css.donwload_certification_link_hidden}
                                            download={certification.name}
                                        >
                                            Donwload Certification
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