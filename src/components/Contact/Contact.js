import './Contact.css'
import { FaMap, FaPhoneSquareAlt, FaTelegramPlane} from "react-icons/fa"
import { HiMailOpen} from "react-icons/hi"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { useContext } from 'react'
import { navCangeContext } from '../../App'
import contactLang from '../../lang/contactLang'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import preloadImg from '../../images/loading-11.gif'

function Contact({togglelang}) {

    const {theme } = useContext(navCangeContext)
    let color = theme === 'dark' ? '#fff' : '#000'
    const form = useRef(null)
    const load = useRef(null)
    const sent = useRef(null)
    const errorMes = useRef(null)
    const imgLoad = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();
        load.current.style.display = 'flex'
        emailjs.sendForm('service_6i8jovt', 'template_4pkq3hg', form.current, 'PEAShtUceGWmqfxPS')
          .then((result) => {
            imgLoad.current.style.display = 'none'
            sent.current.style.display = 'block'
            setTimeout(() => {
                load.current.style.display = 'none'
                sent.current.style.display = 'none'
            }, 2000)  
          }, (error) => {
            errorMes.current.style.display = 'block'
            setTimeout(() => {
                imgLoad.current.style.display = 'none'
                load.current.style.display = 'none'
                errorMes.current.style.display = 'none'
            }, 2000)
          })
          form.current.reset()
          imgLoad.current.style.display = 'block'
      }

    return (
        <div 
            className="contact">
            <div
                ref={load} 
                className='load'>
                <h2 className='sent' ref={sent}>{togglelang === 'eng' ? contactLang.eng.mesSent : togglelang === 'rus' ? contactLang.ru.mesSent : contactLang.am.mesSent}</h2>    
                <h2 className='err' ref={errorMes}>{togglelang === 'eng' ? contactLang.eng.mesError : togglelang === 'rus' ? contactLang.ru.mesError : contactLang.am.mesError}</h2>    
                <img ref={imgLoad} src={preloadImg} alt="" />
            </div>
            <div 
                className='container'>
                <header>
                    <div 
                        className='contactTitle'>
                        <h1 
                            style={{color: color}}>
                                {/* Get in */}
                            {togglelang === 'eng' ? contactLang.eng.getIn : togglelang === 'rus' ? contactLang.ru.getIn : contactLang.am.getIn}
                            <span 
                                className='touch'>
                                {/* Touch */}    
                                {togglelang === 'eng' ? contactLang.eng.touch : togglelang === 'rus' ? contactLang.ru.touch : contactLang.am.touch}
                            </span>
                        </h1>
                    </div>
                </header>
                <section>
                    <div 
                        className='contSecLeft'>
                        <div 
                            className='contSecLeftTitle'>
                            <h2 
                                style={{color: color}}>
                                    {/* Dont shi */}
                                {togglelang === 'eng' ? contactLang.eng.dontShi : togglelang === 'rus' ? contactLang.ru.dontShi : contactLang.am.dontShi}
                            </h2>
                            <p 
                                style={{color: color}}>
                                {/* ContancP */}    
                                {togglelang === 'eng' ? contactLang.eng.contactP : togglelang === 'rus' ? contactLang.ru.contactP : contactLang.am.contactP}
                            </p>
                        </div>
                        <div 
                            className='contSecLeftMid'>
                            <div 
                                className='contI addres'>
                                <span 
                                    className='contIcon'>
                                    <FaMap />
                                </span>
                                <h3 
                                    style={{color: color}}>
                                    {togglelang === 'eng' ? contactLang.eng.addres : togglelang === 'rus' ? contactLang.ru.addres : contactLang.am.addres}
                                </h3>
                            </div>
                            <div 
                                className='contI email'>
                                <span 
                                    className='contIcon'>
                                    <HiMailOpen />
                                </span>
                                <h3 
                                    style={{color: color}}>
                                    hakobjanyanartur@gmai.com
                                </h3>
                            </div>
                            <div 
                                className='contI tel'>
                                <span 
                                    className='contIcon'>
                                    <FaPhoneSquareAlt />
                                </span>
                                <h3 
                                    style={{color: color}}>
                                    +374 (93)308017
                                </h3>
                            </div>
                        </div>
                        <div 
                            className='contSecBottom'>
                            <a 
                                href="https://www.facebook.com/artur.hakobjanyan">
                                <BsFacebook />
                            </a>
                            <a 
                                href="https://www.instagram.com/arturo199175/">
                                <AiFillInstagram />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/artur-hakobjanyan-20b811258/">
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>
                    <div 
                        className='contSecRight'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div 
                                className='topInp'>
                                     {/* PlName */} 
                                <input
                                    name="user_name" 
                                    type="text"
                                    placeholder={togglelang === 'eng' ? contactLang.eng.plName : togglelang === 'rus' ? contactLang.ru.plName : contactLang.am.plName}/>
                                    {/* plemail */}
                                <input 
                                    name="user_email"
                                    type="txt" 
                                    placeholder={togglelang === 'eng' ? contactLang.eng.plEmail : togglelang === 'rus' ? contactLang.ru.plemail : contactLang.am.plEmail} />
                            </div>
                                    {/* Subject */}
                                <input
                                    name="subject_txt" 
                                    type="text" 
                                    placeholder={togglelang === 'eng' ? contactLang.eng.subject : togglelang === 'rus' ? contactLang.ru.subject : contactLang.am.subject}/>
                                    {/* Message */}
                                <textarea
                                    name="message" 
                                    placeholder={togglelang === 'eng' ? contactLang.eng.message : togglelang === 'rus' ? contactLang.ru.message : contactLang.am.message}>
                                </textarea>
                                <button 
                                    className='contBtn'>
                                    <span 
                                        className='btnIcon'>
                                        <FaTelegramPlane />
                                    </span> 
                                    <span 
                                        style={{color: color}} 
                                        className='btnTXT'>
                                        {togglelang === 'eng' ? contactLang.eng.sendM : togglelang === 'rus' ? contactLang.ru.sendM : contactLang.am.sendM}
                                    </span>
                                </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact