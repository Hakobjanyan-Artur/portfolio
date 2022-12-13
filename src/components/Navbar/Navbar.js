import './Navbar.css'
import { MdContactPhone} from "react-icons/md"
import { AiFillHome, AiFillSetting, AiFillFlag } from "react-icons/ai"
import { BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import { FaUserAlt} from "react-icons/fa"
import { TiMessages } from "react-icons/ti"
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { navCangeContext } from '../../App'
import navbarLang from '../../lang/navbarLang'

function Navbar({togglelang, setTogglelang}) {
   
    const {navhiden} = useContext(navCangeContext)
    const {theme, toggleTheme} = useContext(navCangeContext)
    return (
        <div style={{
            display: navhiden === 'true' ? 'none' : 'flex'
        }} className='navbar'>
            <div className='setting'>
                <div className='set'><AiFillSetting /></div>
                <div className='sun-set'>
                    <div className='sun' onClick={toggleTheme} > { theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</div>
                    <div className='lang'>
                        <div className='flag'><AiFillFlag />
                            <div className='toggleLang'>
                                <h3 onClick={() => setTogglelang('eng')}>ENG</h3>
                                <h3 onClick={() => setTogglelang('rus')}>РУС</h3>
                                <h3 onClick={() => setTogglelang('arm')}>ՀԱՅ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='links'>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={togglelang === 'eng' ? navbarLang.eng.home : togglelang === 'rus' ? navbarLang.ru.home: navbarLang.am.home} to={'/'} end ><AiFillHome/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={togglelang === 'eng' ? navbarLang.eng.about : togglelang === 'rus' ? navbarLang.ru.about: navbarLang.am.about}  to={'/about'} ><FaUserAlt/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={togglelang === 'eng' ? navbarLang.eng.contact : togglelang === 'rus' ? navbarLang.ru.contact: navbarLang.am.contact}  to={'/contact'} ><MdContactPhone/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={togglelang === 'eng' ? navbarLang.eng.blog : togglelang === 'rus' ? navbarLang.ru.blog: navbarLang.am.blog}  to={'/blog'} ><TiMessages/></NavLink></div>
            </div>
        </div>
    )
}

export default Navbar