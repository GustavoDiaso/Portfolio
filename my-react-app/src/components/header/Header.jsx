import css from "./Header.module.css";
import logoIMGPath from "../../assets/images/logo.png"
import { useState } from "react";

const navBarLinks = [
    {text: "Home", href: "#"},
    {text: "About me", href: "#"},
    {text: "Portfolio", href: "#"},
    {text: "Skills", href: "#"},
    {text: "Contact", href: "#"},
]

function Header(){
    let [activeLink, setActiveLink] = useState('Home')
    
    function toggleLinkColor(linkClass){
        
    }

    return(
        <header className={css.header}>
            <nav>
                <ul className={css.menu_options}>
                    {
                        navBarLinks.map((link)=>{
                            <li>
                                <a 
                                    href={link.href} 
                                    className={link.text == activeLink ? css.nav_link_active : css.nav_link} 
                                    onClick={()=>{toggleLinkColor(link)}}
                                >
                                    {link.text}
                                </a>
                            </li>
                        })
                    }

                    
                </ul>
            </nav>
            <a href="#">
                <img src={logoIMGPath} alt="" className={css.logo_img}/>
            </a>
        </header>
    )
}

export default Header;