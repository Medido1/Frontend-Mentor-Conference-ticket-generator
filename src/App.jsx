import './App.css'
import bgMobile from "./assets/images/background-mobile.png";
import logo from "./assets/images/logo-full.svg"
import MobileForm from './components/MobileFrom';
import patternTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import { formContext, FormProvider } from './context/FormContext.jsx';

function App() {
  return (
    <FormProvider>
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
    </FormProvider>
  )
}

export default App
