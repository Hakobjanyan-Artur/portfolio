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
import { useSelector } from 'react-redux'
import { selectLang } from '../../store/slices/langs/langsSlice'

function Home() {
    const {changeNav, theme} = useContext(navCangeContext)
    const modalIframe = useRef(null)
    const lang = useSelector(selectLang)
    
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
                        {lang === 'eng' ? homeLang.eng.myName : lang === 'rus' ? homeLang.ru.myName : homeLang.am.myName}
                    </span>
                    <span 
                        className='h1' 
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000'
                            }}
                    >
                        {/* Profession */}
                        {lang === 'eng' ? homeLang.eng.myProf : lang === 'rus' ? homeLang.ru.myProf : homeLang.am.myProf}
                    </span>
                    <p 
                        style={{
                            color: theme === 'dark' ? '#fff' : '#000'
                            }}
                    >
                        {/* ShortInfo */}
                        {lang === 'eng' ? homeLang.eng.shortInfo : lang === 'rus' ? homeLang.ru.shortInfo: homeLang.am.shortInfo}
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
                        {lang === 'eng' ? homeLang.eng.btnTXT : lang === 'rus' ? homeLang.ru.btnTXT : homeLang.am.btnTXT}
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
                                    {lang === 'eng' ? homeLang.eng.about : lang === 'rus' ? homeLang.ru.about : homeLang.am.about} 
                                    <span>
                                    {/* Me */}
                                    {lang === 'eng' ? homeLang.eng.me : lang === 'rus' ? homeLang.ru.me : homeLang.am.me}
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
                                            {lang === 'eng' ? homeLang.eng.persInfo : lang === 'rus' ? homeLang.ru.persInfo : homeLang.am.persInfo}
                                        </h2>
                                    </div>
                                    <div 
                                        className='secLeftMid'>
                                        <div 
                                        className='secLeftMidLeft'>
                                            <h3>
                                                {/* First name */}
                                                {lang === 'eng' ? homeLang.eng.firstName : lang === 'rus' ? homeLang.ru.firstName : homeLang.am.firstName}:  
                                                <span 
                                                    className='info'>
                                                    {/* Name */}    
                                                    {lang === 'eng' ? homeLang.eng.Name : lang === 'rus' ? homeLang.ru.Name : homeLang.am.Name}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Age */}    
                                                {lang === 'eng' ? homeLang.eng.age : lang === 'rus' ? homeLang.ru.age : homeLang.am.age} 
                                                <span 
                                                    className='info'>
                                                     {/* ageInfo */}   
                                                    {lang === 'eng' ? homeLang.eng.ageInfo : lang === 'rus' ? homeLang.ru.ageInfo : homeLang.am.ageInfo}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* frilance */}
                                                {lang === 'eng' ? homeLang.eng.frilance : lang === 'rus' ? homeLang.ru.frilance : homeLang.am.frilance}: 
                                                <span 
                                                    className='info av'>
                                                        {/* Avilable */}
                                                    {lang === 'eng' ? homeLang.eng.avilable : lang === 'rus' ? homeLang.ru.avilable : homeLang.am.avilable}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Phone */}
                                                {lang === 'eng' ? homeLang.eng.phone : lang === 'rus' ? homeLang.ru.phone : homeLang.am.phone}: 
                                                <span 
                                                    className='info'>
                                                    {/* Phone Number */}    
                                                    {lang === 'eng' ? homeLang.eng.phoneN : lang === 'rus' ? homeLang.ru.phoneN : homeLang.am.phoneN}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Skype */}
                                                {lang === 'eng' ? homeLang.eng.skype : lang === 'rus' ? homeLang.ru.skype : homeLang.am.skype}: 
                                                <span 
                                                    className='info'>
                                                     {/* Skype Number */}   
                                                    {lang === 'eng' ? homeLang.eng.skypeN : lang === 'rus' ? homeLang.ru.skypeN : homeLang.am.skypeN}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className='secLeftMidRight'>
                                            <h3>
                                                {/* Last name */}
                                                {lang === 'eng' ? homeLang.eng.lastName : lang === 'rus' ? homeLang.ru.lastName : homeLang.am.lastName}: 
                                                <span 
                                                    className='info'>
                                                    {/* lasnName info */}    
                                                    {lang === 'eng' ? homeLang.eng.lastNameI : lang === 'rus' ? homeLang.ru.lastNameI : homeLang.am.lastNameI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Nationality */}
                                                {lang === 'eng' ? homeLang.eng.nationality : lang === 'rus' ? homeLang.ru.nationality : homeLang.am.nationality}: 
                                                <span 
                                                    className='info'>
                                                    {/* Nation */}
                                                    {lang === 'eng' ? homeLang.eng.nation : lang === 'rus' ? homeLang.ru.nation : homeLang.am.nation}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Addres */}
                                                {lang === 'eng' ? homeLang.eng.addres : lang === 'rus' ? homeLang.ru.addres : homeLang.am.addres}: 
                                                <span 
                                                    className='info'>
                                                    {/* Addres info */}    
                                                    {lang === 'eng' ? homeLang.eng.addresI : lang === 'rus' ? homeLang.ru.addresI : homeLang.am.addresI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Email */}
                                                {lang === 'eng' ? homeLang.eng.email : lang === 'rus' ? homeLang.ru.email : homeLang.am.email}: 
                                                <span 
                                                    className='info'>
                                                    {/* Email info */}    
                                                    {lang === 'eng' ? homeLang.eng.emailI : lang === 'rus' ? homeLang.ru.emailI : homeLang.am.emailI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Languages */}
                                                {lang === 'eng' ? homeLang.eng.lang : lang === 'rus' ? homeLang.ru.lang : homeLang.am.lang}: 
                                                <span 
                                                    className='info'>
                                                    {/* Languages info */}    
                                                    {lang === 'eng' ? homeLang.eng.langI : lang === 'rus' ? homeLang.ru.langI : homeLang.am.langI}
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
                                            {lang === 'eng' ? homeLang.eng.hobbies : lang === 'rus' ? homeLang.ru.hobbies : homeLang.am.hobbies}
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
                                                {lang === 'eng' ? homeLang.eng.coding : lang === 'rus' ? homeLang.ru.coding : homeLang.am.coding}
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
                                                {lang === 'eng' ? homeLang.eng.webd : lang === 'rus' ? homeLang.ru.webd : homeLang.am.webd}
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
                                                {lang === 'eng' ? homeLang.eng.movies : lang === 'rus' ? homeLang.ru.movies : homeLang.am.movies}
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
                                                {lang === 'eng' ? homeLang.eng.videoGame : lang === 'rus' ? homeLang.ru.videoGame : homeLang.am.videoGame}
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
                                        {lang === 'eng' ? homeLang.eng.mySkils : lang === 'rus' ? homeLang.ru.mySkils : homeLang.am.mySkils}
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