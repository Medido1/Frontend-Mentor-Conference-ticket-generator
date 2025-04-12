import { useContext } from "react";
import { formContext } from "../context/FormContext";
import patternTicket from '../assets/images/pattern-ticket.svg';
import logo from '../assets/images/logo-full.svg'
import gitHubicon from "../assets/images/icon-github.svg"

function Ticket() {
  const {state, dispatch} = useContext(formContext)
  const {fullName, email, userName, avatar} = state

  return (
    <div className="px-4 flex flex-col items-center max-w-sm">
      <h1 className="text-white text-2xl font-bold mb-4 ">
        Congrats,   
        <span 
          className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] 
            bg-clip-text text-transparent mx-4">
          {fullName}!
        </span>
         Your ticket is ready.
      </h1>
      <p className="text-[#d2d1d6] text-md font-light">
        We've emailed your ticket to 
        <span className="text-orange-600 mx-2">{email}</span> 
        and will send updates in the run up to the event.
      </p>

      <div className="mt-16 relative max-h-40 max-w-[400px]"> 
        <img src={patternTicket} alt="ticket" />
        <div>
          <div className="flex flex-col items-start absolute top-4 left-4 gap-2">
            <img src={logo} alt="event logo" />
            <p className="text-[#d2d1d6] text-sm ml-12 font-light">Jan 31, 2025 / Austin, Tx</p>
          </div>
        </div>
        <div className="absolute bottom-2 left-4 flex gap-4">
          <img 
            className="h-12 rounded-xl"
            src={avatar} 
            alt="avatar" />
            <div >
              <p className="text-white">{fullName}</p>
              <p className="flex itemscenter text-[#d2d1d6]">
                <img src={gitHubicon} alt="github" />
                @{userName}
              </p>
            </div>
        </div>
        <p className="text-gray-400 rotate-90 text-xl font-light
          absolute right-0 top-18">
          #01609
        </p>
      </div>

    </div>
  )
}

export default Ticket;