import css from "./Header.module.css";
import logoIMGPath from "../../assets/images/logo.png"
import { useState, useEffect, useRef } from "react";

const navBarLinks = [
    { text: "Home", href: "#" },
    { text: "About me", href: "#" },
    { text: "Skills", href: "#" },
    { text: "Portfolio", href: "#" },
    { text: "Contact", href: "#" },
]

function Header() {
    const [activeLinkText, setActiveLinkText] = useState('Home');
    const ulRef = useRef(null); // Reference to the <ul></ul> element that contains the navbar links  
    const slideRef = useRef(null); // Reference to the <div></div> element that represents the slide 

    // this function will be called every time the component is mounted or whenever activeLink suffers any changes
    useEffect(
        ()=>{
            //verifying rather the ulRef and slideRef variables are referencing the <ul> and <div> DOM elements respectively 
            if (!ulRef.current || !slideRef.current){return}
            
            const slide = slideRef.current;
            const activeLinkElement = ulRef.current.querySelector('[data-status="active"]');
            
            // defining the size of the slide element based on the active link he's behind
            slide.style.width = `${activeLinkElement.offsetWidth}px`
            slide.style.height = `${activeLinkElement.offsetHeight}px`;

            // positioning the slide element behing the active link 
            // slide.style.transform = `translateX(${activeLinkElement.offsetLeft}px)`;
            slide.style.transform = `translateX(calc(${activeLinkElement.offsetLeft}px - ${slide.offsetLeft}px))`;

        },
        [activeLinkText]
    );

    return (
        <header className={css.header}>
            <div className={css.header_content}>
                <a href={navBarLinks[0].href}>
                    <img 
                        src={logoIMGPath}  
                        alt="logo image" 
                        className={css.logo_img} onClick={
                            ()=>{
                                setActiveLinkText('Home')
                            }
                        }
                    />
                </a>

                <nav>
                    <div className={css.slide} ref={slideRef}></div>
                    <ul className={css.menu_options} ref={ulRef}>
                        {
                            navBarLinks.map((link) => {
                                return (
                                    <li 
                                        key={link.text} 
                                        className={link.text == activeLinkText ? css.nav_link_active : css.nav_link} 
                                        data-status={link.text == activeLinkText ? 'active' : ''}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => { setActiveLinkText(link.text) }}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;