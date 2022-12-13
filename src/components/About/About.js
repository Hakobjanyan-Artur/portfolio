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

function About({togglelang}) {
    const {theme } = useContext(navCangeContext)

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
                                    {togglelang === 'eng' ? aboutLang.eng.about : togglelang === 'rus' ? aboutLang.ru.about : aboutLang.am.about} 
                                    <span>
                                    {/* Me */}
                                    {togglelang === 'eng' ? aboutLang.eng.me : togglelang === 'rus' ? aboutLang.ru.me : aboutLang.am.me}
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
                                            {togglelang === 'eng' ? aboutLang.eng.persInfo : togglelang === 'rus' ? aboutLang.ru.persInfo : aboutLang.am.persInfo}
                                        </h2>
                                    </div>
                                    <div 
                                        className='secLeftMid'>
                                        <div 
                                        className='secLeftMidLeft'>
                                            <h3>
                                                {/* First name */}
                                                {togglelang === 'eng' ? aboutLang.eng.firstName : togglelang === 'rus' ? aboutLang.ru.firstName : aboutLang.am.firstName}:  
                                                <span
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }} 
                                                    className='info'>
                                                    {/* Name */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.Name : togglelang === 'rus' ? aboutLang.ru.Name : aboutLang.am.Name}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Age */}    
                                                {togglelang === 'eng' ? aboutLang.eng.age : togglelang === 'rus' ? aboutLang.ru.age : aboutLang.am.age} 
                                                <span
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }} 
                                                    className='info'>
                                                     {/* ageInfo */}   
                                                    {togglelang === 'eng' ? aboutLang.eng.ageInfo : togglelang === 'rus' ? aboutLang.ru.ageInfo : aboutLang.am.ageInfo}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* frilance */}
                                                {togglelang === 'eng' ? aboutLang.eng.frilance : togglelang === 'rus' ? aboutLang.ru.frilance : aboutLang.am.frilance}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info av'>
                                                        {/* Avilable */}
                                                    {togglelang === 'eng' ? aboutLang.eng.avilable : togglelang === 'rus' ? aboutLang.ru.avilable : aboutLang.am.avilable}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Phone */}
                                                {togglelang === 'eng' ? aboutLang.eng.phone : togglelang === 'rus' ? aboutLang.ru.phone : aboutLang.am.phone}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Phone Number */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.phoneN : togglelang === 'rus' ? aboutLang.ru.phoneN : aboutLang.am.phoneN}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Skype */}
                                                {togglelang === 'eng' ? aboutLang.eng.skype : togglelang === 'rus' ? aboutLang.ru.skype : aboutLang.am.skype}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                     {/* Skype Number */}   
                                                    {togglelang === 'eng' ? aboutLang.eng.skypeN : togglelang === 'rus' ? aboutLang.ru.skypeN : aboutLang.am.skypeN}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className='secLeftMidRight'>
                                            <h3>
                                                {/* Last name */}
                                                {togglelang === 'eng' ? aboutLang.eng.lastName : togglelang === 'rus' ? aboutLang.ru.lastName : aboutLang.am.lastName}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* lasnName info */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.lastNameI : togglelang === 'rus' ? aboutLang.ru.lastNameI : aboutLang.am.lastNameI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Nationality */}
                                                {togglelang === 'eng' ? aboutLang.eng.nationality : togglelang === 'rus' ? aboutLang.ru.nationality : aboutLang.am.nationality}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Nation */}
                                                    {togglelang === 'eng' ? aboutLang.eng.nation : togglelang === 'rus' ? aboutLang.ru.nation : aboutLang.am.nation}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Addres */}
                                                {togglelang === 'eng' ? aboutLang.eng.addres : togglelang === 'rus' ? aboutLang.ru.addres : aboutLang.am.addres}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Addres info */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.addresI : togglelang === 'rus' ? aboutLang.ru.addresI : aboutLang.am.addresI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Email */}
                                                {togglelang === 'eng' ? aboutLang.eng.email : togglelang === 'rus' ? aboutLang.ru.email : aboutLang.am.email}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Email info */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.emailI : togglelang === 'rus' ? aboutLang.ru.emailI : aboutLang.am.emailI}
                                                </span>
                                            </h3>
                                            <h3>
                                                {/* Languages */}
                                                {togglelang === 'eng' ? aboutLang.eng.lang : togglelang === 'rus' ? aboutLang.ru.lang : aboutLang.am.lang}: 
                                                <span 
                                                    style={{
                                                        color: theme === 'dark' ? '#fff' : '#000'
                                                    }}
                                                    className='info'>
                                                    {/* Languages info */}    
                                                    {togglelang === 'eng' ? aboutLang.eng.langI : togglelang === 'rus' ? aboutLang.ru.langI : aboutLang.am.langI}
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
                                            {togglelang === 'eng' ? aboutLang.eng.hobbies : togglelang === 'rus' ? aboutLang.ru.hobbies : aboutLang.am.hobbies}
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
                                                {togglelang === 'eng' ? aboutLang.eng.coding : togglelang === 'rus' ? aboutLang.ru.coding : aboutLang.am.coding}
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
                                                {togglelang === 'eng' ? aboutLang.eng.webd : togglelang === 'rus' ? aboutLang.ru.webd : aboutLang.am.webd}
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
                                                {togglelang === 'eng' ? aboutLang.eng.movies : togglelang === 'rus' ? aboutLang.ru.movies : aboutLang.am.movies}
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
                                                {togglelang === 'eng' ? aboutLang.eng.videoGame : togglelang === 'rus' ? aboutLang.ru.videoGame : aboutLang.am.videoGame}
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
                                        {togglelang === 'eng' ? aboutLang.eng.mySkils : togglelang === 'rus' ? aboutLang.ru.mySkils : aboutLang.am.mySkils}
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