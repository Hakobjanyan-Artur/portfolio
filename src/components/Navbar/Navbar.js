import './Navbar.css'
import { MdContactPhone} from "react-icons/md"
import { AiFillHome, AiFillSetting, AiFillFlag, AiTwotoneLike } from "react-icons/ai"
import { BsFillSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import { FaUserAlt} from "react-icons/fa"
import { TiMessages } from "react-icons/ti"
import { NavLink } from 'react-router-dom'
import { memo, useContext } from 'react'
import { navCangeContext } from '../../App'
import navbarLang from '../../lang/navbarLang'
import { selectLang, togglelang } from '../../store/slices/langs/langsSlice'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
    const lang = useSelector(selectLang)
    const dispatch = useDispatch()
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
                                <h3 onClick={() => dispatch(togglelang('eng'))}>ENG</h3>
                                <h3 onClick={() => dispatch(togglelang('rus'))}>РУС</h3>
                                <h3 onClick={() => dispatch(togglelang('am'))}>ՀԱՅ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='links'>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={lang === 'eng' ? navbarLang.eng.home : lang === 'rus' ? navbarLang.ru.home: navbarLang.am.home} to={'/'} end ><AiFillHome/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={lang === 'eng' ? navbarLang.eng.about : lang === 'rus' ? navbarLang.ru.about: navbarLang.am.about}  to={'/about'} ><FaUserAlt/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={lang === 'eng' ? navbarLang.eng.contact : lang === 'rus' ? navbarLang.ru.contact: navbarLang.am.contact}  to={'/contact'} ><MdContactPhone/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={lang === 'eng' ? navbarLang.eng.blog : lang === 'rus' ? navbarLang.ru.blog: navbarLang.am.blog}  to={'/blog'} ><TiMessages/></NavLink></div>
                <div ><NavLink className={({isActive}) => isActive ? 'click' : 'content'} data-title={lang === 'eng' ? navbarLang.eng.recommendation : lang === 'rus' ? navbarLang.ru.recommendation: navbarLang.am.recommendation}  to={'/rec'} >< AiTwotoneLike /></NavLink></div>
            </div>
        </div>
    )
}

export default memo(Navbar)