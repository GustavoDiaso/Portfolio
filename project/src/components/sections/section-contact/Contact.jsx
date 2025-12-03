import { forwardRef, useEffect, useRef, useState } from "react";
import { contactOptions } from "./contactOptions";
import css from './Contact.module.css';
import pointingFingerIMG from '../../../assets/images/pointing_finger.png';

const Contact = forwardRef(
    (props, ref)=>{
        
        const [activeContactIndex, setActiveContactIndex] = useState(0);

        useEffect(()=>{
            const intervalId = setInterval(()=>{
                setActiveContactIndex((currActiveContactIndex)=>{
                    // if the current active contact index is the last one, returns to the first contact index
                    return (currActiveContactIndex + 1) % contactOptions.length;
                })
            }, 6000)/*the callback funtion will be executed every 6000 miliseconds (6 seconds) */ 

            return () => clearInterval(intervalId); // this function will be called if the component is unmounted
        }, [])

        return(
            <section ref={ref} className={css.section_contact}>
                <h1 className={css.title}>Contact</h1>
                
                <div className={css.contact_menu}>

                    <ul className={css.contact_cards_list}>
                    {
                        contactOptions.map((contact, contact_index)=>{
                            return(
                                <li key={`contact_${contact_index}`} className={css.contact_card}>
                                    <img 
                                        src={pointingFingerIMG} 
                                        id="pointing_finger"
                                        className={
                                            contact_index == activeContactIndex ? 
                                            css.pointing_finger_activated : 
                                            css.pointing_finger_deactivated
                                        } 
                                    />
                                    <a href={contact.href} target="_blank">
                                        
                                        <img src={contact.imgPath} alt="" className={css.contact_img}/>
                                        <div className={css.contact_card_info}>
                                            <p>{contact.name}</p>
                                            <p>{contact.contact}</p>
                                        </div>
                                    </a>

                                </li>
                            )
                        })
                    }
                    </ul>

                </div>
               

            </section>
        )
    }
)

export default Contact