import './App.css'
import bgMobile from "./assets/images/background-mobile.png";
import logo from "./assets/images/logo-full.svg"
import MobileForm from './components/MobileFrom';
import patternTop from "../src/assets/images/pattern-squiggly-line-top.svg";
import patternMobile from "../src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";

function App() {
  return (
    <div className='min-h-screen w-screen bg-cover bg-center
      flex justify-center text-center relative'
    style={{backgroundImage: `url(${bgMobile})`}}>
      <div>
        <img className='pt-8 pb-8 justify-self-center' src={logo} alt="logo" />
        <img src={patternTop} 
          className="absolute top-4 right-0  w-24 object-cover z-0"/>
        <img src={patternMobile} 
          className='absolute bottom-0 h-32  object-cover z-0'
        />
        <MobileForm />
      </div>
    </div>
  )
}

export default App
