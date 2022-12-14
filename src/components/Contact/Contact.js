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
import { useSelector } from 'react-redux'
import { selectLang } from '../../store/slices/langs/langsSlice'

function Contact() {
    const lang = useSelector(selectLang)
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
                <h2 className='sent' ref={sent}>{lang === 'eng' ? contactLang.eng.mesSent : lang === 'rus' ? contactLang.ru.mesSent : contactLang.am.mesSent}</h2>    
                <h2 className='err' ref={errorMes}>{lang === 'eng' ? contactLang.eng.mesError : lang === 'rus' ? contactLang.ru.mesError : contactLang.am.mesError}</h2>    
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
                            {lang === 'eng' ? contactLang.eng.getIn : lang === 'rus' ? contactLang.ru.getIn : contactLang.am.getIn}
                            <span 
                                className='touch'>
                                {/* Touch */}    
                                {lang === 'eng' ? contactLang.eng.touch : lang === 'rus' ? contactLang.ru.touch : contactLang.am.touch}
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
                                {lang === 'eng' ? contactLang.eng.dontShi : lang === 'rus' ? contactLang.ru.dontShi : contactLang.am.dontShi}
                            </h2>
                            <p 
                                style={{color: color}}>
                                {/* ContancP */}    
                                {lang === 'eng' ? contactLang.eng.contactP : lang === 'rus' ? contactLang.ru.contactP : contactLang.am.contactP}
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
                                    {lang === 'eng' ? contactLang.eng.addres : lang === 'rus' ? contactLang.ru.addres : contactLang.am.addres}
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
                                    placeholder={lang === 'eng' ? contactLang.eng.plName : lang === 'rus' ? contactLang.ru.plName : contactLang.am.plName}/>
                                    {/* plemail */}
                                <input 
                                    name="user_email"
                                    type="txt" 
                                    placeholder={lang === 'eng' ? contactLang.eng.plEmail : lang === 'rus' ? contactLang.ru.plemail : contactLang.am.plEmail} />
                            </div>
                                    {/* Subject */}
                                <input
                                    name="subject_txt" 
                                    type="text" 
                                    placeholder={lang === 'eng' ? contactLang.eng.subject : lang === 'rus' ? contactLang.ru.subject : contactLang.am.subject}/>
                                    {/* Message */}
                                <textarea
                                    name="message" 
                                    placeholder={lang === 'eng' ? contactLang.eng.message : lang === 'rus' ? contactLang.ru.message : contactLang.am.message}>
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
                                        {lang === 'eng' ? contactLang.eng.sendM : lang === 'rus' ? contactLang.ru.sendM : contactLang.am.sendM}
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