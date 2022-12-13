import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import HomeWrapper from './components/Pages/HomeWrapper'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog';
import { createContext, useState} from 'react';
import changes from './hoc/changes';
import Modal from './components/Modal/Modal';

export const navCangeContext = createContext()
function App({navhiden, changeNav, theme, toggleTheme}) {
  const [togglelang, setTogglelang] = useState('eng')

  return (
    <div className="app"
    style={{
      background: theme === 'dark' ? '#181818' : '#fff'
    }}
    >
        <Modal togglelang={togglelang} setTogglelang={setTogglelang} />
           < navCangeContext.Provider value={{navhiden, changeNav, theme, toggleTheme}}> 
              <Routes>
              <Route path='/' element={<HomeWrapper togglelang={togglelang} setTogglelang={setTogglelang}/>}>
                  <Route index element={<Home togglelang={togglelang} />}/>
                  <Route path='about' element={<About togglelang={togglelang}/>}/>
                  <Route path='contact' element={<Contact togglelang={togglelang}/>}/>
                  <Route path='blog' element={<Blog togglelang={togglelang}/>}/>
              </Route>
              </Routes>
            </navCangeContext.Provider> 
    </div>
  );
}

export default changes(App);
