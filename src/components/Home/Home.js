import './Home.css'
import myImage from '../../images/Me-2.png'
import { AiOutlineArrowRight } from "react-icons/ai"
import { useContext, useRef} from 'react'
import { navCangeContext } from '../../App'
import { RiCodeBoxFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import homeLang from '../../lang/homeLang'
import cv from '../../cv/Resume Artur Hakobjanyan.pdf'

function Home({togglelang}) {
    const {changeNav, theme} = useContext(navCangeContext)
    const modalIframe = useRef(null)
    
    const addClass = () => {
        modalIframe.current.classList.add('mh')
        changeNav()
    }

    const removeClass = () => {
        changeNav()
        modalIframe.current.classList.remove('mh')
    }
    
    return (
        <div className='home'>
            <div className='container'>
                <div className='homeLeft'>
                    <div className='homeImg'>
                        <img src={myImage} alt="" />
                    </div>
                </div>
                <div className='homeRigth'>
                    <span 
                        className='span'> 
                        {/* Name */}
                        {togglelang === 'eng' ? homeLang.eng.myName : togglelang === 'rus' ? homeLang.ru.myName : homeLang.am.myName}
                    </span>
                    <span 
                        className='h1' 
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000'
                            }}
                    >
                        {/* Profession */}
                        {togglelang === 'eng' ? homeLang.eng.myProf : togglelang === 'rus' ? homeLang.ru.myProf : homeLang.am.myProf}
                    </span>
                    <p 
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000'
                            }}
                    >
                        {/* ShortInfo */}
                        {togglelang === 'eng' ? homeLang.eng.shortInfo : togglelang === 'rus' ? homeLang.ru.shortInfo: homeLang.am.shortInfo}
                    </p>
                    <button 
                        onClick={addClass}>
                    <span 
                        className='btnIcon'>
                             <AiOutlineArrowRight />
                    </span> 
                    <span 
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000'
                            }}
                        className='btnTXT'>
                            {/* BtnTxt */}
                        {togglelang === 'eng' ? homeLang.eng.btnTXT : togglelang === 'rus' ? homeLang.ru.btnTXT : homeLang.am.btnTXT}
                        </span>
                    </button>
                </div>
            </div>

                            {/* About Iframe */}
            <div 
                onClick={removeClass} 
                ref={modalIframe} 
                className='about-iframe'>
                <div 
                    className='iframe'>
                    <div 
                        className="about">
                        <div 
                            className='container'>
                            <header>
                                <h1>
                                    {/* About */}
                                    {togglelang === 'eng' ? homeLang.eng.about : togglelang === 'rus' ? homeLang.ru.about : homeLang.am.about} 
                                    <span>
                                    {/* Me */}
                                    {togglelang === 'eng' ? homeLang.eng.me : togglelang === 'rus' ? homeLang.ru.me : homeLang.am.me}
                                    </span>
                                </h1>
                            </header>
                            <section>
                                <div 
                                    className='secLeft'>
                                    <div 
                                        className='secLeftTop'>
                                        <h2>
                                            {/* Personal Info */}
                                            {togglelang === 'eng' ? homeLang.eng.persInfo : togglelang === 'rus' ? homeLang.ru.persInfo : homeLang.am.persInfo}
                                        </h2>
                                    </div>
                                    <div 
                                        className='secLeftMid'>
                                        <div 
                                        className='secLeftMidLeft'>
                                            <h3>
                                                {/* First name */}
                                                {togglelang === 'eng' ? homeLang.eng.firstName : togglelang === 'rus' ? homeLang.ru.firstName : homeLang.am.firstName}:  
                                                <span 
                                                    className='info'>
                                                    {/* Name */}    
                                                    {togglelang === 'eng' ? homeLang.eng.Name : togglelang === 'rus' ? homeLang.ru.Name : homeLang.am.Name}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Age */}    
                                                {togglelang === 'eng' ? homeLang.eng.age : togglelang === 'rus' ? homeLang.ru.age : homeLang.am.age} 
                                                <span 
                                                    className='info'>
                                                     {/* ageInfo */}   
                                                    {togglelang === 'eng' ? homeLang.eng.ageInfo : togglelang === 'rus' ? homeLang.ru.ageInfo : homeLang.am.ageInfo}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* frilance */}
                                                {togglelang === 'eng' ? homeLang.eng.frilance : togglelang === 'rus' ? homeLang.ru.frilance : homeLang.am.frilance}: 
                                                <span 
                                                    className='info av'>
                                                        {/* Avilable */}
                                                    {togglelang === 'eng' ? homeLang.eng.avilable : togglelang === 'rus' ? homeLang.ru.avilable : homeLang.am.avilable}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Phone */}
                                                {togglelang === 'eng' ? homeLang.eng.phone : togglelang === 'rus' ? homeLang.ru.phone : homeLang.am.phone}: 
                                                <span 
                                                    className='info'>
                                                    {/* Phone Number */}    
                                                    {togglelang === 'eng' ? homeLang.eng.phoneN : togglelang === 'rus' ? homeLang.ru.phoneN : homeLang.am.phoneN}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Skype */}
                                                {togglelang === 'eng' ? homeLang.eng.skype : togglelang === 'rus' ? homeLang.ru.skype : homeLang.am.skype}: 
                                                <span 
                                                    className='info'>
                                                     {/* Skype Number */}   
                                                    {togglelang === 'eng' ? homeLang.eng.skypeN : togglelang === 'rus' ? homeLang.ru.skypeN : homeLang.am.skypeN}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className='secLeftMidRight'>
                                            <h3>
                                                {/* Last name */}
                                                {togglelang === 'eng' ? homeLang.eng.lastName : togglelang === 'rus' ? homeLang.ru.lastName : homeLang.am.lastName}: 
                                                <span 
                                                    className='info'>
                                                    {/* lasnName info */}    
                                                    {togglelang === 'eng' ? homeLang.eng.lastNameI : togglelang === 'rus' ? homeLang.ru.lastNameI : homeLang.am.lastNameI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Nationality */}
                                                {togglelang === 'eng' ? homeLang.eng.nationality : togglelang === 'rus' ? homeLang.ru.nationality : homeLang.am.nationality}: 
                                                <span 
                                                    className='info'>
                                                    {/* Nation */}
                                                    {togglelang === 'eng' ? homeLang.eng.nation : togglelang === 'rus' ? homeLang.ru.nation : homeLang.am.nation}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Addres */}
                                                {togglelang === 'eng' ? homeLang.eng.addres : togglelang === 'rus' ? homeLang.ru.addres : homeLang.am.addres}: 
                                                <span 
                                                    className='info'>
                                                    {/* Addres info */}    
                                                    {togglelang === 'eng' ? homeLang.eng.addresI : togglelang === 'rus' ? homeLang.ru.addresI : homeLang.am.addresI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Email */}
                                                {togglelang === 'eng' ? homeLang.eng.email : togglelang === 'rus' ? homeLang.ru.email : homeLang.am.email}: 
                                                <span 
                                                    className='info'>
                                                    {/* Email info */}    
                                                    {togglelang === 'eng' ? homeLang.eng.emailI : togglelang === 'rus' ? homeLang.ru.emailI : homeLang.am.emailI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Languages */}
                                                {togglelang === 'eng' ? homeLang.eng.lang : togglelang === 'rus' ? homeLang.ru.lang : homeLang.am.lang}: 
                                                <span 
                                                    className='info'>
                                                    {/* Languages info */}    
                                                    {togglelang === 'eng' ? homeLang.eng.langI : togglelang === 'rus' ? homeLang.ru.langI : homeLang.am.langI}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='secbotbtn'>
                                        <a 
                                         href={cv} download 
                                         className='aboutSecBTN'>  
                                        <span 
                                            className='btnIcon'>
                                            <AiOutlineArrowRight />
                                        </span> 
                                        <span 
                                            className='btnTXT'>
                                            Download CV
                                        </span>
                                        </a>
                                    </div>
                                </div>
                                <div 
                                    className='secRight'>
                                    <div 
                                        className='secRightTitle'>
                                        <h2>
                                            {/* Hobbies */}
                                            {togglelang === 'eng' ? homeLang.eng.hobbies : togglelang === 'rus' ? homeLang.ru.hobbies : homeLang.am.hobbies}
                                        </h2>
                                    </div>
                                    <div 
                                        className='cubs'>
                                        <div 
                                            className='secRightCub'>
                                            <span 
                                                className='cubIcon'><RiCodeBoxFill /></span>
                                                <h2>
                                                {/* Coding */}
                                                {togglelang === 'eng' ? homeLang.eng.coding : togglelang === 'rus' ? homeLang.ru.coding : homeLang.am.coding}
                                                </h2>
                                        </div>
                                        <div 
                                            className='secRightCub'>
                                            <span 
                                                className='cubIcon'>
                                                <MdDesignServices />
                                            </span>
                                            <h2>
                                                {/* Web Desinger */}    
                                                {togglelang === 'eng' ? homeLang.eng.webd : togglelang === 'rus' ? homeLang.ru.webd : homeLang.am.webd}
                                            </h2>
                                        </div>
                                        <div 
                                            className='secRightCub'>
                                            <span 
                                                className='cubIcon'>
                                                <BiMoviePlay />
                                            </span>
                                            <h2>
                                                {/* Movies */}
                                                {togglelang === 'eng' ? homeLang.eng.movies : togglelang === 'rus' ? homeLang.ru.movies : homeLang.am.movies}
                                            </h2>
                                        </div>
                                        <div 
                                            className='secRightCub'>
                                            <span 
                                                className='cubIcon'>
                                                <IoLogoGameControllerB />
                                            </span>
                                            <h2>
                                                {/* Video games */}
                                                {togglelang === 'eng' ? homeLang.eng.videoGame : togglelang === 'rus' ? homeLang.ru.videoGame : homeLang.am.videoGame}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div 
                                className='bottom'>
                                <div 
                                    className='bottomTitle'>
                                    <h2>
                                        {/* My Skils */}
                                        {togglelang === 'eng' ? homeLang.eng.mySkils : togglelang === 'rus' ? homeLang.ru.mySkils : homeLang.am.mySkils}
                                    </h2>
                                </div>
                                <div 
                                    className='bottomSkills'>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                HTML 
                                                <span 
                                                className='num'>
                                                    5
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                CSS 
                                                <span 
                                                    className='num'>
                                                        3
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                JavaScript
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                React. 
                                                <span 
                                                    className='num'>
                                                        js
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Redux. 
                                                <span 
                                                    className='num'>
                                                        js
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Git
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Github
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Figma
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Firebasa
                                            </h3>
                                        </div>
                                    </div>
                                    <div 
                                        className='skills'>
                                        <div 
                                            className='round'>
                                            <h3>
                                                Photoshop
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home