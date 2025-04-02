import './App.css'
import bgMobile from "./assets/images/background-mobile.png";
import logo from "./assets/images/logo-full.svg"
import MobileForm from './components/MobileFrom';

function App() {
  return (
    <div className='min-h-screen w-screen bg-cover bg-center
      flex justify-center text-center'
    style={{backgroundImage: `url(${bgMobile})`}}>
      <div>
        <img className='pt-8 pb-8 justify-self-center' src={logo} alt="logo" />
        <MobileForm />
      </div>
    </div>
  )
}

export default App
