import { useRef } from "react";
import Header from "./components/header/Header.jsx";
import Sections from "./components/sections/Sections.jsx";

const App = () => {

	const sectionReferences = {
		home: useRef(null),
		aboutMe: useRef(null),
		skills: useRef(null),
		experiences: useRef(null),
		certifications: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
	};

	const scrollToSection = (sectionName) => {

		const targetSection = sectionReferences[sectionName].current;

		if (targetSection) { /* 
            HTMLElement.getBoundingClientRect().top: returns the distance from the top edge 
            of the viewport to the top edge of the element. 
            */
			const distFromViewportsTop = targetSection.getBoundingClientRect().top;
			const offset = 150;

			window.scrollTo({
				top: distFromViewportsTop - offset + window.scrollY,
				behavior: 'smooth',
			})
		}

	}

	return (
		<>
			<Header scrollToSection={scrollToSection} />
			<Sections sectionReferences={sectionReferences} />
		</>
	)
};

export default App;
