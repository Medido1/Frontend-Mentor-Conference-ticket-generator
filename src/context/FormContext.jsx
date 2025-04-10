import { Children, createContext, useReducer } from "react";

export const formContext = createContext();

const initialState = { 
  fullName : "",
  email: "",
  userName: "",
  avatar: null,
  isValid: false,
}

  /* const initialState = {
    fullName: "Mehdi Bousalah",
    email: "medi1222@gmail.com",
    userName: "Medidoss",
    avatar: '../assets/images/image-avatar.jpg',
    isValid : true
  } */

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FULLNAME":
      return {...state, fullName: action.payload}
    case "SET_EMAIL":
      return {...state, email: action.payload}
    case "SET_USERNAME":
      return {...state, userName: action.payload}
    case "UPDATE_AVATAR":
      return {...state, avatar: action.file}
    case "VALIDATE_FORM":
      return {...state, isValid: action.payload}
    default:
      return state
  }
}

export const FormProvider = ({children}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <formContext.Provider value={{state, dispatch}}>
      {children}
    </formContext.Provider>
  )
}