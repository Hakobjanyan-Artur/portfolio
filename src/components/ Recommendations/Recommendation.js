import './Recommendation.css'
import img from '../../images/manager.png'
import recLang from '../../lang/recLang'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../store/slices/langs/langsSlice'
import {FaTelegramPlane} from "react-icons/fa"
import { useRef, useState } from 'react'
import { addNewRec } from '../../store/slices/recommendSlices/recommendslices'

function Recommendations() {
    const lang = useSelector(selectLang)
    const recModal = useRef(null)
    const [newName, setNewName] = useState('')
    const [newRelation, setNewRelation] = useState('')
    const [newRecommend, setNewRecommend] = useState('')
    const formRef = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewRec({name: newName, relation: newRelation, recommend: newRecommend}))
        formRef.current.reset()
    }

    return(
        <div 
            className='recommend'>
            <div 
                className='container'>
                <div 
                    className='title'>
                    <h1>
                        {lang === 'eng' ? recLang.eng.recTitle : lang === 'rus' ? recLang.ru.recTitle : recLang.am.recTitle}
                        <span>
                            {lang === 'eng' ? recLang.eng.recTitleSpan : lang === 'rus' ? recLang.ru.recTitleSpan : recLang.am.recTitleSpan}
                        </span>
                    </h1>    
                </div>
                <div
                    onClick={() => recModal.current.style.display = 'flex'} 
                    className='recModal'>
                    {lang === 'eng' ? recLang.eng.recBtn : lang === 'rus' ? recLang.ru.recBtn : recLang.am.recBtn} +
                </div>
                <section>
                    <div 
                        className='rec'>
                        <div 
                            className='header'>
                            <div 
                                className='logo'>
                                <img src={img} alt="" />    
                            </div>
                            <div 
                                className='organ'>
                                {lang === 'eng' ? recLang.eng.organ : lang === 'rus' ? recLang.ru.organ : recLang.am.organ} 
                                </div>
                            <div 
                                className='recName'>
                                Artur    
                            </div>    
                        </div>
                        <div 
                            className='section'>
                            <div 
                                className='relationship'>
                                <h2>{lang === 'eng' ? recLang.eng.relationship : lang === 'rus' ? recLang.ru.relationship : recLang.am.relationship}</h2>
                                <p>es ira director</p>    
                            </div>
                            <div 
                                className='addRec'>
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков,</p>    
                            </div>    
                        </div>    
                    </div>
                </section>
            </div>
            <div
                ref={recModal} 
                className='modal'>
                    <div 
                        className='recForm'>
                        <span
                            onClick={() => recModal.current.style.display = 'none'}> 
                            X 
                        </span>
                        <h2>
                            {lang === 'eng' ? recLang.eng.recBtn : lang === 'rus' ? recLang.ru.recBtn : recLang.am.recBtn}
                        </h2>    
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}>
                            <input
                                className='file' 
                                type="file" />
                            <input
                                onChange={(e) => setNewName(e.target.value)}
                                className='org' 
                                type="text" 
                                placeholder={lang === 'eng' ? recLang.eng.inputOrgPl: lang === 'rus' ? recLang.ru.inputOrgPl : recLang.am.inputOrgPl}/>
                            <input
                                onChange={(e) => setNewRelation(e.target.value)}
                                className='relation' 
                                type="text" 
                                placeholder={lang === 'eng' ? recLang.eng.relationship : lang === 'rus' ? recLang.ru.relationship : recLang.am.relationship}/>
                            <textarea
                            onChange={(e) => setNewRecommend(e.target.value)}
                            placeholder={lang === 'eng' ? recLang.eng.textareaPl : lang === 'rus' ? recLang.ru.textareaPl: recLang.am.textareaPl} />
                            <button>
                                <div 
                                    className='btnIcon'>
                                    < FaTelegramPlane />
                                </div>
                                <div 
                                    className='btnTxt'>
                                    {lang === "eng" ? recLang.eng.recBtnSend : lang === 'rus' ? recLang.ru.recBtnSend : recLang.am.recBtnSend}
                                </div>
                            </button>
                        </form>    
                    </div>
            </div>    
        </div>
    )
}

export default Recommendations