import './App.css'
import bgMobile from "./assets/images/background-mobile.png";
import bgTablet from "./assets/images/background-tablet.png"
import logo from "./assets/images/logo-full.svg"
import MobileForm from './components/MobileFrom';
import patternTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import { formContext } from './context/FormContext.jsx';
import { useContext, useEffect, useState} from 'react';
import Ticket from "./components/Ticket.jsx"

function App() {
  const {state} = useContext(formContext);
  const [bgImg, setBgImg] = useState(bgMobile)
  const {isValid} = state;

  useEffect(() => {
    const updateBackground = () => {
      setBgImg(window.innerWidth > 768 ? bgMobile : bgTablet)
    }

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground)
  }, [])

  return (
    <main className='min-h-[140vh] w-screen bg-cover bg-center
      flex justify-center  text-center relative'
      style={{backgroundImage: `url(${bgImg})`}}>
      <div>
        <img className='pt-8 pb-8 justify-self-center' src={logo} alt="logo" />
        <img src={patternTop} 
          className="absolute top-4 right-0  w-24 object-cover z-0
            md:w-1/3"/>
        <img src={patternMobile} 
          className='absolute bottom-0 h-32  object-cover z-0
            md:h-1/3 left-0'
        />
        {!isValid ? (
          <MobileForm />
        ): (
          <Ticket />
        )}
        
      </div>
    </main>
  )
}

export default App
