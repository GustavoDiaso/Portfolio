import { useRef } from "react";
import Header from "./components/header/Header.jsx";
import Sections from "./components/sections/Sections.jsx";

const App = () =>{
    
    const sectionRefs = {
        home: useRef(null),
        aboutMe: useRef(null),
        skills: useRef(null),
        experience: useRef(null),
        portfolio: useRef(null),
        contact: useRef(null),
    };

    const scrollToSection = (sectionName) => {
        
        const targetSection = sectionRefs[sectionName].current;

        if (targetSection){
            /* 
            HTMLElement.getBoundingClientRect().top: returns the distance from the top edge 
            of the viewport to the top edge of the element. 
            */
            const distFromViewportsTop = targetSection.getBoundingClientRect().top;
            const offset = 100;

            console.dir(targetSection);
            window.scrollTo(
                {
                    top: distFromViewportsTop - 100,
                    behavior: 'smooth',
                }
            )


            
            
        }   
        
    }

    return(
        <>
            <Header scrollToSection={scrollToSection}/>
            <Sections sectionRefs={sectionRefs}/>
        </>
    )
};

export default App;