import { useContext } from 'react'
import { navCangeContext } from '../../App'
import './Blog.css'
import blogLang from '../../lang/blogLang'

function Blog({togglelang}) {

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
                        {togglelang === 'eng' ? blogLang.eng.my: togglelang === 'rus' ? blogLang.ru.my : blogLang.am.my}  
                        <span 
                            className='blogTitle'>
                            {/* Blog */}    
                            {togglelang === 'eng' ? blogLang.eng.blog : togglelang === 'rus' ? blogLang.ru.blog : blogLang.am.blog}
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
                                {togglelang === 'eng' ? blogLang.eng.blogTitle : togglelang === 'rus' ? blogLang.ru.blogTitle : blogLang.am.blogTitle}
                            </h2>
                        </div>
                        <div 
                            className='blokDesc'>
                            <p>
                                {/* Blog Content */}
                                {togglelang === 'eng' ? blogLang.eng.blogContent : togglelang === 'rus' ? blogLang.ru.blogContent : blogLang.am.blogContent}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blog 