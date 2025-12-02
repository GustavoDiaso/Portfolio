import { forwardRef } from "react";
import { contactOptions } from "./contactOptions";
import css from './Contact.module.css';
import purplePhoneIMG from '../../../assets/images/purple_phone.png';

const Contact = forwardRef(
    (props, ref)=>{
        return(
            <section ref={ref} className={css.section_contact}>
                <h1 className={css.title}>Contact</h1>
                
                <div className={css.contact_menu}>

                    <img src={purplePhoneIMG} alt="" className={css.cellphone_img}/>

                    <ul className={css.contact_cards_list}>
                    {
                        contactOptions.map((contact, contact_index)=>{
                            return(
                                <li key={`contact_${contact_index}`} className={css.contact_card}>
                                    <img src={contact.imgPath} alt=""/>
                                    <div className={css.contact_card_info}>
                                        <p>{contact.name}</p>
                                        <p>{contact.contact}</p>
                                    </div>
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