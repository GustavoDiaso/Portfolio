import { forwardRef } from "react";
import css from './Contact.module.css';
import { contactOptions } from "./contactOptions";

const Contact = forwardRef(
    (props, ref)=>{
        return(
            <section ref={ref} className={css.section_contact}>
                <h1>Contact</h1>
                <ul>
                {
                    contactOptions.map((contact, contact_index)=>{
                        return(
                            <li key={`contact_${contact_index}`}>
                                {contact.name}
                            </li>
                        )
                    })
                }
                </ul>
               

            </section>
        )
    }
)

export default Contact