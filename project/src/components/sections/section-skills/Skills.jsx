import css from "./Skills.module.css"
import pythonIMGPath from "../../../assets/images/python.png"
import flaskIMGPath from "../../../assets/images/flask.png"
import reactIMGPath from "../../../assets/images/react.png"
import javaScriptIMGPath from "../../../assets/images/js.png"
import htmlIMGPath from "../../../assets/images/html.png"
import cssIMGPath from "../../../assets/images/css.png"
import gitHubIMGPath from "../../../assets/images/github.png"
import mySqlIMGPath from "../../../assets/images/mysql.png"

const skills = [
    {name: 'Python', imgSource: pythonIMGPath},
    {name: 'Flask API', imgSource: flaskIMGPath},
    {name: 'React', imgSource: reactIMGPath},
    {name: 'JavaScript', imgSource: javaScriptIMGPath},
    {name: 'HTML 5', imgSource: htmlIMGPath},
    {name: 'CSS 3', imgSource: cssIMGPath},
    {name: 'GitHub', imgSource: gitHubIMGPath},
    {name: 'MySQL', imgSource: mySqlIMGPath},
];

function Skills(){
    return (
        <section className={css.section_skills}>
            <h1 className={css.title}>Skills and Technologies</h1>
            <ul className={css.skills}>
                {
                    skills.map((skill)=>{
                        return(
                            <li className={css.skill} key={skill.name}>
                                <img src={skill.imgSource} alt="" className={css.skill_img}/>
                                {skill.name}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Skills