import './About.css'
import { AiOutlineArrowRight, } from "react-icons/ai"
import { RiCodeBoxFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { useContext } from 'react';
import { navCangeContext } from '../../App';
import cv from '../../cv/Resume Artur Hakobjanyan.pdf'
import aboutLang from '../../lang/aboutlang';
import { useSelector } from 'react-redux';
import { selectLang } from '../../store/slices/langs/langsSlice';

function About() {
    const {theme } = useContext(navCangeContext)
    const lang = useSelector(selectLang)

    return (
                    <div 
                        className="about">
                        <div 
                            className='container'>
                            <header>
                                <h1
                                style={{
                                    color: theme === 'dark' ? '#fff' : '#000'
                                }}
                                >
                                    {/* About */}
                                    {lang === 'eng' ? aboutLang.eng.about : lang === 'rus' ? aboutLang.ru.about : aboutLang.am.about} 
                                    <span>
                                    {/* Me */}
                                    {lang === 'eng' ? aboutLang.eng.me : lang === 'rus' ? aboutLang.ru.me : aboutLang.am.me}
                                    </span>
                                </h1>
                            </header>
                            <section>
                                <div 
                                    className='secLeft'>
                                    <div 
                                        className='secLeftTop'>
                                        <h2
                                        style={{
                                            color: theme === 'dark' ? '#fff' : '#000'
                                        }}
                                        >
                                            {/* Personal Info */}
                                            {lang === 'eng' ? aboutLang.eng.persInfo : lang === 'rus' ? aboutLang.ru.persInfo : aboutLang.am.persInfo}
                                        </h2>
                                    </div>
                                    <div 
                                        className='secLeftMid'>
                                        <div 
                                        className='secLeftMidLeft'>
                                            <h3>
                                                {/* First name */}
                                                {lang === 'eng' ? aboutLang.eng.firstName : lang === 'rus' ? aboutLang.ru.firstName : aboutLang.am.firstName}:  
                                                <span
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }} 
                                                    className='info'>
                                                    {/* Name */}    
                                                    {lang === 'eng' ? aboutLang.eng.Name : lang === 'rus' ? aboutLang.ru.Name : aboutLang.am.Name}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Age */}    
                                                {lang === 'eng' ? aboutLang.eng.age : lang === 'rus' ? aboutLang.ru.age : aboutLang.am.age} 
                                                <span
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }} 
                                                    className='info'>
                                                     {/* ageInfo */}   
                                                    {lang === 'eng' ? aboutLang.eng.ageInfo : lang === 'rus' ? aboutLang.ru.ageInfo : aboutLang.am.ageInfo}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* frilance */}
                                                {lang === 'eng' ? aboutLang.eng.frilance : lang === 'rus' ? aboutLang.ru.frilance : aboutLang.am.frilance}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info av'>
                                                        {/* Avilable */}
                                                    {lang === 'eng' ? aboutLang.eng.avilable : lang === 'rus' ? aboutLang.ru.avilable : aboutLang.am.avilable}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Phone */}
                                                {lang === 'eng' ? aboutLang.eng.phone : lang === 'rus' ? aboutLang.ru.phone : aboutLang.am.phone}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Phone Number */}    
                                                    {lang === 'eng' ? aboutLang.eng.phoneN : lang === 'rus' ? aboutLang.ru.phoneN : aboutLang.am.phoneN}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Skype */}
                                                {lang === 'eng' ? aboutLang.eng.skype : lang === 'rus' ? aboutLang.ru.skype : aboutLang.am.skype}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                     {/* Skype Number */}   
                                                    {lang === 'eng' ? aboutLang.eng.skypeN : lang === 'rus' ? aboutLang.ru.skypeN : aboutLang.am.skypeN}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className='secLeftMidRight'>
                                            <h3>
                                                {/* Last name */}
                                                {lang === 'eng' ? aboutLang.eng.lastName : lang === 'rus' ? aboutLang.ru.lastName : aboutLang.am.lastName}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* lasnName info */}    
                                                    {lang === 'eng' ? aboutLang.eng.lastNameI : lang === 'rus' ? aboutLang.ru.lastNameI : aboutLang.am.lastNameI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Nationality */}
                                                {lang === 'eng' ? aboutLang.eng.nationality : lang === 'rus' ? aboutLang.ru.nationality : aboutLang.am.nationality}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Nation */}
                                                    {lang === 'eng' ? aboutLang.eng.nation : lang === 'rus' ? aboutLang.ru.nation : aboutLang.am.nation}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Addres */}
                                                {lang === 'eng' ? aboutLang.eng.addres : lang === 'rus' ? aboutLang.ru.addres : aboutLang.am.addres}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Addres info */}    
                                                    {lang === 'eng' ? aboutLang.eng.addresI : lang === 'rus' ? aboutLang.ru.addresI : aboutLang.am.addresI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Email */}
                                                {lang === 'eng' ? aboutLang.eng.email : lang === 'rus' ? aboutLang.ru.email : aboutLang.am.email}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Email info */}    
                                                    {lang === 'eng' ? aboutLang.eng.emailI : lang === 'rus' ? aboutLang.ru.emailI : aboutLang.am.emailI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Languages */}
                                                {lang === 'eng' ? aboutLang.eng.lang : lang === 'rus' ? aboutLang.ru.lang : aboutLang.am.lang}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Languages info */}    
                                                    {lang === 'eng' ? aboutLang.eng.langI : lang === 'rus' ? aboutLang.ru.langI : aboutLang.am.langI}
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
                                            style={{
                                                color: theme === 'dark' ? '#fff' : '#000'
                                            }}
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
                                        <h2
                                            style={{
                                                color: theme === 'dark' ? '#fff' : '#000'
                                            }}
                                        >
                                            {/* Hobbies */}
                                            {lang === 'eng' ? aboutLang.eng.hobbies : lang === 'rus' ? aboutLang.ru.hobbies : aboutLang.am.hobbies}
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
                                                {lang === 'eng' ? aboutLang.eng.coding : lang === 'rus' ? aboutLang.ru.coding : aboutLang.am.coding}
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
                                                {lang === 'eng' ? aboutLang.eng.webd : lang === 'rus' ? aboutLang.ru.webd : aboutLang.am.webd}
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
                                                {lang === 'eng' ? aboutLang.eng.movies : lang === 'rus' ? aboutLang.ru.movies : aboutLang.am.movies}
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
                                                {lang === 'eng' ? aboutLang.eng.videoGame : lang === 'rus' ? aboutLang.ru.videoGame : aboutLang.am.videoGame}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div 
                                className='bottom'>
                                <div 
                                    className='bottomTitle'>
                                    <h2
                                        style={{
                                            color: theme === 'dark' ? '#fff' : '#000'
                                        }}
                                    >
                                        {/* My Skils */}
                                        {lang === 'eng' ? aboutLang.eng.mySkils : lang === 'rus' ? aboutLang.ru.mySkils : aboutLang.am.mySkils}
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
    )
}

export default About