import css from "./Header.module.css";
import logoIMGPath from "../../assets/images/logo.png";
import openVerticalNavBtnIMG from "../../assets/images/menu.png";
import closeVerticalNavBtnIMG from "../../assets/images/close.png";
import { useState, useEffect, useRef } from "react";


const Header = (
    { scrollToSection }
) => {
    const [activeLinkText, setActiveLinkText] = useState('Home');
    const ulRef = useRef(null); // Reference to the <ul></ul> element that contains the navbar links  
    const slideRef = useRef(null); // Reference to the <div></div> element that represents the slide 
    const verticalNavbarRef = useRef(null); //References the vertical navbar element

    const navBarLinks = [
        { text: "Home", sectionOfReference: 'home' },
        { text: "About me", sectionOfReference: 'aboutMe' },
        { text: "Skills", sectionOfReference: 'skills' },
        { text: "Experiences", sectionOfReference: 'experiences' },
        { text: "Certifications", sectionOfReference: 'certifications' },
        { text: "Projects", sectionOfReference: 'projects' },
        { text: "Contact", sectionOfReference: 'contact' },
    ];

    //this function shows the vertical navbar on the screen whenever the openVerticalNavBtn is called
    const showVerticalNavbar = () => {
        if (!verticalNavbarRef.current) {return}

        const verticalNavbar = verticalNavbarRef.current;
        verticalNavbar.style.transform = `translateX(-${verticalNavbar.offsetWidth}px)`;
        
    }

    //this function hides the vertical navbar on the screen whenever the openVerticalNavBtn is called
    const hideVerticalNavbar = () => {
        if (!verticalNavbarRef.current) {return}

        const verticalNavbar = verticalNavbarRef.current;
        verticalNavbar.style.transform = `translateX(100vw)`;
        
    }

    // this function will be called every time the component is mounted or whenever activeLink suffers any changes
    useEffect(
        () => {
            //verifying rather the ulRef and slideRef variables are referencing the <ul> and <div> DOM elements respectively 
            if (!ulRef.current || !slideRef.current) { return }

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
                            () => {
                                setActiveLinkText('Home')
                                scrollToSection('home');
                            }
                        }

                    />
                </a>

                <nav className={css.horizontal_navbar}>
                    <div className={css.slide} ref={slideRef}></div>
                    <ul className={css.horizontal_navbar_link_list} ref={ulRef}>
                        {
                            navBarLinks.map((link) => {
                                return (
                                    <li
                                        key={`h_${link.text}`}
                                        className={link.text == activeLinkText ? css.nav_link_active : css.nav_link}
                                        data-status={link.text == activeLinkText ? 'active' : ''}
                                    >
                                        <a
                                            onClick={
                                                () => {
                                                    setActiveLinkText(link.text);
                                                    scrollToSection(link.sectionOfReference);
                                                }
                                            }
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <nav className={css.vertical_navbar} ref={verticalNavbarRef}>

                    <button 
                        className={css.btn_close_vertical_nav}
                        onClick={hideVerticalNavbar}
                    >
                        <img src={closeVerticalNavBtnIMG} alt="" />
                    </button>

                    <ul className={css.vertical_navbar_link_list}>
                        {
                            navBarLinks.map((link) => {
                                return (
                                    <li key={`v_${link.text}`}>
                                        <a
                                            onClick={
                                                () => {
                                                    scrollToSection(link.sectionOfReference);
                                                }
                                            }
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <button 
                    className={css.btn_show_vertical_nav} 
                    onClick={showVerticalNavbar}
                >
                    <img src={openVerticalNavBtnIMG} alt="" />
                </button>


            </div>
        </header>
    )
}

export default Header;