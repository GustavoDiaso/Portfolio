import css from "./Home.module.css"
import { useRef, useState, useEffect } from "react"
import devIMGPath from '../../../assets/images/manager.png'
import linkedinIMGPath from '../../../assets/images/linkedin.png'
import whatsappIMGPath from '../../../assets/images/whatsapp.png'
import githubIMGPath from '../../../assets/images/github.png'
import curriculumPath from '../../../assets/curriculum/EnglishCV.pdf'
import junimoDancingGIF from '../../../assets/images/junimo-dancing.gif'

const socialMedias = [
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavodiaso', imgPath: linkedinIMGPath},
    {name: 'GitHub', href: 'https://github.com/GustavoDiaso', imgPath: githubIMGPath},
    {name: 'WhatsApp', href: 'https://wa.me/5511989155761', imgPath: whatsappIMGPath},
];

function Home(){

    const junimoGIFRef = useRef(null);
    const [isJunimoJumping, setJunimoJumpingState] = useState(false);
    
    function handleJunimoClick(){
        // just check if the reference to the junimo gif exists first
        if (!junimoGIFRef.current){return}

        // If the junimo is already jumping, the animation will not be executed again
        if (isJunimoJumping){return}
            
        setJunimoJumpingState(true)

        // A timeout that will set the jumping state to false again, returning the junimo to the original position
        setTimeout(()=>{
            setJunimoJumpingState(false)
        }, 200)
        
    }


    const [iIndex, setIIndex] = useState(0);
    const [jIndex, setJIndex] = useState(0);
    const [displayedFirstName, setDisplayedFirstName] = useState('');
    const [displayedLastName, setDisplayedLastName] = useState('');

    useEffect(
        () => {
            const firstName = "Gustavo Henrique";
            const lastName = "de Oliveira Dias";

            const intervalCode = setInterval(()=>{
                setIIndex((currIIndex) => {
                    if (currIIndex < firstName.length) {
                
                        setDisplayedFirstName((currDisplayedFirstName) => {
                            return currDisplayedFirstName + firstName.charAt(currIIndex);
                        });
                        
                        return currIIndex + 1; 

                    } 
                    
                    setJIndex((currJIndex)=>{
                        if (currJIndex < lastName.length){

                            setDisplayedLastName((currDisplayedLastName)=>{
                                return currDisplayedLastName + lastName.charAt(currJIndex) 
                            });

                            return currJIndex + 1;
                        }
            
                        clearInterval(intervalCode)

                    });
                });
                    console.log('oi')
                }, 
                120
            );

        }
        , []
    )

    return(
        <section className={css.section_home}>
            <div className={css.dev_info}>
                <h3 className={css.greeting}>Greetings! 🖖</h3>
                <h1 className={css.presentation}> Hi, my name is</h1>
                <h1 className={css.name}>{displayedFirstName}</h1>
                <h1 className={css.name}>{displayedLastName}</h1>
                <h2 className={css.profession}>Software Developer - Python & JS</h2>

                <ul className={css.social_media_menu}>
                    {
                        socialMedias.map((social_media)=>{
                            return(
                                <li key={social_media.name}>
                                    <a href={social_media.href} target="_blank">
                                        <img src={social_media.imgPath} alt={social_media.name} className={css.social_media_image}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            <img src={devIMGPath} alt="dev-image.png" className={css.dev_img}/>
            
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
export default Home