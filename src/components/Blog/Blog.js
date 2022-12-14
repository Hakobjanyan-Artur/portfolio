import { useContext } from 'react'
import { navCangeContext } from '../../App'
import './Blog.css'
import blogLang from '../../lang/blogLang'
import { selectLang } from '../../store/slices/langs/langsSlice'
import { useSelector } from 'react-redux'

function Blog() {
    const lang = useSelector(selectLang)
    const {theme } = useContext(navCangeContext)
    let color = theme === 'dark' ? '#fff' : '#000'

    return (
        <div 
            className='blog'>
            <div 
                className='container'>
                <div 
                    className='title'>
                    <h1 
                        style={{color: color}} >
                        {/* My */}    
                        {lang === 'eng' ? blogLang.eng.my: lang === 'rus' ? blogLang.ru.my : blogLang.am.my}  
                        <span 
                            className='blogTitle'>
                            {/* Blog */}    
                            {lang === 'eng' ? blogLang.eng.blog : lang === 'rus' ? blogLang.ru.blog : blogLang.am.blog}
                        </span>
                    </h1>
                </div>
                <section>
                    <div 
                        className='blogBlok'>
                        <div 
                            className='img'>
                            <img 
                            src="https://www.nuricanaksu.com/wp-content/uploads/2021/02/benedikt-kamberbetch-sherlock-sherlock-bbc-sherlock-holmes-2-min-1024x653.jpg" alt="" />
                        </div>
                        <div 
                            className='blokTitle'>
                            <h2>
                                {/* Blog tilte */}
                                {lang === 'eng' ? blogLang.eng.blogTitle : lang === 'rus' ? blogLang.ru.blogTitle : blogLang.am.blogTitle}
                            </h2>
                        </div>
                        <div 
                            className='blokDesc'>
                            <p>
                                {/* Blog Content */}
                                {lang === 'eng' ? blogLang.eng.blogContent : lang === 'rus' ? blogLang.ru.blogContent : blogLang.am.blogContent}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blog 