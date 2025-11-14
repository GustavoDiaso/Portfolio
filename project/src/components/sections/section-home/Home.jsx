import css from "./Home.module.css";
import { useRef, useState, useEffect, forwardRef } from "react";
import devIMGPath from '../../../assets/images/manager.png';
import linkedinIMGPath from '../../../assets/images/linkedin.png';
import whatsappIMGPath from '../../../assets/images/whatsapp.png';
import junimoDancingGIF from '../../../assets/images/junimo-dancing.gif';

const socialMedias = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavodiaso', imgPath: linkedinIMGPath },
    { name: 'GitHub', href: 'https://github.com/GustavoDiaso', imgPath: githubIMGPath },
    { name: 'WhatsApp', href: 'https://wa.me/5511989155761', imgPath: whatsappIMGPath },
];

const Home = forwardRef(
    (
        props,
        ref
    ) => {
        const junimoGIFRef = useRef(null);
        const [isJunimoJumping, setJunimoJumpingState] = useState(false);

        function handleJunimoClick() {
            // just check if the reference to the junimo gif exists first
            if (!junimoGIFRef.current) { return }

            // If the junimo is already jumping, the animation will not be executed again
            if (isJunimoJumping) { return }

            setJunimoJumpingState(true);

            // A timeout that will set the jumping state to false again, returning the junimo to the original position
            setTimeout(() => {
                setJunimoJumpingState(false)
            }, 200)

        }

        // State variables used inside the useEffect function. They will be used to create the effect of my
        // name being written letter by letter in the Home section whenever the Home component is mounted

        const [indexes, setIndexes] = useState({ i: 0, j: 0 });
        const [displayedFirstName, setDisplayedFirstName] = useState('');
        const [displayedLastName, setDisplayedLastName] = useState('');

        // This function will be called whenever the Home section is mounted into the DOM 
        // It's purpose is to make the effect of my name being written in the screen when the page is loaded
        useEffect(
            () => {
                const firstName = "Gustavo Henrique";
                const lastName = "de Oliveira Dias";

                const intervalCode = setInterval(
                    () => {
                        setIndexes(
                            (currIndexesValues) => {
                                const { i, j } = currIndexesValues;

                                if (i < firstName.length) {
                                    setDisplayedFirstName(
                                        currDisplayedFirstName => currDisplayedFirstName + firstName.charAt(i)
                                    );
                                    return { i: i + 1, j: 0 };
                                }

                                if (j < lastName.length) {
                                    setDisplayedLastName(
                                        currDisplayedLastName => currDisplayedLastName + lastName.charAt(j)
                                    );
                                    return { i: i, j: j + 1 };
                                }

                                clearInterval(intervalCode);
                                return currIndexesValues;

                            }
                        )
                    }, 100 // time range between letter insertions
                );
            }, []
        )

        return (
            <section className={css.section_home} ref={ref}>
                <div className={css.dev_info}>
                    <h3 className={css.greeting}>Greetings! 🖖</h3>
                    <h1 className={css.presentation}> Hi, my name is</h1>
                    <h1 className={css.name}>{displayedFirstName}</h1>
                    <h1 className={css.name}>{displayedLastName}</h1>
                    <h2 className={css.profession}>Software Developer - Python & JS</h2>

                    <ul className={css.social_media_menu}>
                        {
                            socialMedias.map((social_media) => {
                                return (
                                    <li key={social_media.name}>
                                        <a href={social_media.href} target="_blank">
                                            <img
                                                src={social_media.imgPath}
                                                alt={social_media.name}
                                                className={css.social_media_image}
                                            />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

                <img src={devIMGPath} alt="dev-image.png" className={css.dev_img} />

                <div className={css.download_menu}>
                    <img
                        src={junimoDancingGIF}
                        alt="junimo-dancing.gif"
                        ref={junimoGIFRef}
                        onClick={handleJunimoClick}
                        className={
                            isJunimoJumping ? css.junimo_jumping : css.junimo_dancing
                        }
                    />

                    <a href={curriculumPath} download='Gustavo_Henrique_Software_Developer' className={css.btn_download_cv}>
                        Donwload CV
                    </a>
                </div>

            </section>
        )
    }
);

export default Home