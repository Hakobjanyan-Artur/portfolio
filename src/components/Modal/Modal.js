import { useEffect, useRef, useState } from 'react'
import './Modal.css'
import modalLang from '../../lang/modalLang'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang, togglelang } from '../../store/slices/langs/langsSlice'

function Modal({setTogglelang}) {
    const lang = useSelector(selectLang)
    const dispatch = useDispatch()
    const divRef = useRef(null)
    const [num, setNum] = useState(10)

    class Userinfo {
        async position () {
          const pos = await new Promise ((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject)
          })
          return {
              long: pos.coords.longitude,
              lat: pos.coords.latitude,
              accuracy: pos.coords.accurarcy,
              altitude: pos.coords.altitude,
              heading : pos.coords.heading,
              speed: pos.coords.speed,
              timestamp: pos.timestamp
          }
      }
      async ip () {
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'))
        let data = await res.json()
        return data
    }
      }
    
      let info = new Userinfo()
    
      async function tl() {

        let loc = await info.ip()
         if (loc.countryName === 'Armenia') {
            dispatch(togglelang('am'))
         }else if (loc.countryName === 'Russia') {
            dispatch(togglelang('rus'))
         }else {
            dispatch(togglelang('eng'))
         }
      }
    
    
      function timer() {
        setTimeout(() => {
          setNum(num - 1)
        }, 1000)
      }
    
      useEffect(() => {
          tl()
      }, [])
    
      useEffect(() => {
        if (num > 0) {
          timer()
        }else{
          divRef.current.style.display = 'none'
        }
    
      }, [num])

    return (
        <div ref={divRef} className='modal'>
                <h1>{lang === 'eng' ? modalLang.eng.appTitle : lang === 'rus' ? modalLang.rus.appTitle : modalLang.am.appTitle}</h1>
                <h3>{lang === 'eng' ? modalLang.eng.appTime : lang === 'rus' ? modalLang.rus.appTime : modalLang.am.appTime}<span>{num}</span></h3>
                <button onClick={() => divRef.current.style.display = 'none'}>
                    ok
                </button>
        </div>
    )
}

export default Modal