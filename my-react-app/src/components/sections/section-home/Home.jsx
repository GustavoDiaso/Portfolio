import css from "./Home.module.css"
import devIMGPath from '../../../assets/images/manager.png'
import linkedinIMGPath from '../../../assets/images/linkedin.png'
import whatsappIMGPath from '../../../assets/images/whatsapp.png'
import githubIMGPath from '../../../assets/images/github.png'
import curriculumPath from '../../../assets/curriculum/EnglishCV.pdf'

const socialMedias = [
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavodiaso', imgPath: linkedinIMGPath},
    {name: 'GitHub', href: 'https://github.com/GustavoDiaso', imgPath: githubIMGPath},
    {name: 'WhatsApp', href: 'https://wa.me/5511989155761', imgPath: whatsappIMGPath},
];

function Home(){
    return(
        <section className={css.section_home}>
            <div className={css.dev_info}>
                <h3 className={css.greeting}>Greetings! 🖖</h3>
                <h1 className={css.name}>Gustavo Henrique <br></br> de Oliveira Dias</h1>
                <h2 className={css.presentation}>Software Developer - Python & JS</h2>

                <ul className={css.social_media_menu}>
                    {
                        socialMedias.map((social_media)=>{
                            return(
                                <li>
                                    <a href={social_media.href} target="_blank">
                                        <img src={social_media.imgPath} alt={social_media.name} className={css.social_media_image}/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
            <img src={devIMGPath} alt="" className={css.dev_img}/>
            <a href={curriculumPath} download='Gustavo_Henrique_Software_Developer' className={css.download_cv}>Donwload CV ⩡</a>

        </section>   
    )
}
export default Home