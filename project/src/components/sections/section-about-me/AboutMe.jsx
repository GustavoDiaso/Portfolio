import css from "./AboutMe.module.css"
import devIMGPath from '../../../assets/images/manager.png'

function AboutMe(){

    return (
        <section className={css.section_about_me}>
            <img src={devIMGPath} alt="" className={css.dev_img}/>

            <div className={css.about_me}>
                <h1 className={css.title}>About Me</h1>

                <p className={css.text}>
                    👨‍💻 I'm a Computer Science student specializing in building efficient and 
                    scalable applications. 
                </p>
                <p className={css.text}> 
                    🐍 My core expertise lies in Python (Backend API development with Flask) 
                    and React (Modern Web UI development), anchored by a foundation in AWS Cloud infrastructure 
                    (Certified AWS Cloud Practitioner).
                </p>
                <p className={css.text}>
                    🎒 With a solid technical background acquired at UFABC and ETEC, I stand out for my ability to 
                    analyze complex problems and develop automated, high-performance solutions.
                </p>
                <p className={css.text}>
                    🤖 My expertise is 
                    proven not only by my professional experience in optimizing critical workflows and maximizing system 
                    efficiency, but also by my personal projects publicly available on my GitHub.
                </p>
            </div>
        </section>
    )
}

export default AboutMe