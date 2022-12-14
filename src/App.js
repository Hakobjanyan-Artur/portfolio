import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import HomeWrapper from './components/Pages/HomeWrapper'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog';
import { createContext } from 'react';
import changes from './hoc/changes';
import Modal from './components/Modal/Modal';

export const navCangeContext = createContext()
function App({navhiden, changeNav, theme, toggleTheme}) {

  return (
    <div className="app"
    style={{
      background: theme === 'dark' ? '#181818' : '#fff'
    }}
    >
        <Modal />
           < navCangeContext.Provider value={{navhiden, changeNav, theme, toggleTheme}}> 
              <Routes>
              <Route path='/' element={<HomeWrapper />}>
                  <Route index element={<Home />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='contact' element={<Contact />}/>
                  <Route path='blog' element={<Blog />}/>
              </Route>
              </Routes>
            </navCangeContext.Provider> 
    </div>
  );
}

export default changes(App);
