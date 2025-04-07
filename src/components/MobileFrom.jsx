import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import { useState, useContext, useEffect } from "react";
import InputComp from "./InputComp";
import { formContext } from "../context/FormContext";

function MobileForm() {
  const {state, dispatch} = useContext(formContext);
  const {fullName, email, userName, isValid} = state;


  const [previewUrl, setPreviewUrl] = useState(null);
  const [errMsg, setErrMsg] = useState(""); /* Avatar err msg */
  const [errors, setErrors] = useState({});
 

  useEffect(() => {
    return () => {
      if (previewUrl){
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const validateForm = () => {
    const errors = {};

    if (!state.fullName.trim()) errors.fullName = "FullName is required";

    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errors.email = "Invalid email format";
    }

    if (!state.avatar) {
      setErrMsg("Please upload an avatar!!");
      return false;
    }
    

    setErrors(errors);
    return Object.keys(errors).length === 0 /* return true if there are no errors */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      dispatch({type: "VALIDATE_FORM", payload: true})
      console.log(state)
    }

  }

  const handleInputChange = (field, value) => {
    dispatch({type: `SET_${field.toUpperCase()}`, payload: value})
  } 

  const verifyFileValidity = (e) => {
    const file = e.target.files[0];
    if (file) {
      const isValidType = ["image/jpeg", "image/png"].includes(file.type);
      const isValidSize = file.size <= 500 * 1024; /* 500KB */
      if (!isValidType || !isValidSize) {
        setErrMsg("Invalid file!! Please choose a JPG or PNG image under 500KB.")
        dispatch({type: "UPDATE_AVATAR", file: null})
        e.target.value = null;
        setPreviewUrl(null)
      } else {
        const imageUrl = URL.createObjectURL(file);
        dispatch({type: "UPDATE_AVATAR", file: imageUrl})
        setPreviewUrl(imageUrl)
        setErrMsg("")
      }
    }
    else {
      setErrMsg("Upload an image!!")
    }
  };

  return (
    <div className="px-2 max-w-md relative">
      <h1 className="text-3xl font-display font-semibold text-white !important">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-xl font-display text-[#d2d1d6] mt-6 font-medium">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form 
        className="pt-6 px-4 flex flex-col items-start gap-2"
        onSubmit={handleSubmit}
        noValidate
        >
        <p
          className="text-xl font-display text-white font-light"
        >
          Upload Avatar
        </p>
        <div
          className="border-2 border-dashed border-gray-400 rounded-lg   
        bg-blue-950 w-full aspect-square relative max-h-60 flex flex-col justify-center"
        >
          <label htmlFor="avatarInput">
            {previewUrl ? (
              <img 
                src={previewUrl}
                alt="preview"
                className="absolute inset-0 w-full max-h-full cursor-pointer
                object-cover rounded-md border-2 border-white"
              />
            ) : (
              <img
              src={uploadIcon}
              alt="upload file"
              className="cursor-pointer bg-gray-700 mx-auto rounded-md p-2"
              />
            )}
          </label>
          {!previewUrl && (
            <p className="text-lg font-display text-[#d2d1d6] font-light mt-4">
              Drag and drop or click to upload
            </p>
          )}
        </div>
        {errMsg ? (
          <p className="text-red-400 text-sm mt-2">{errMsg}</p>
          ): (
            <div className="flex justify-center gap-2">
              <img src={infoIcon} alt="info" />
              <p className="text-xs font-display text-[#d2d1d6] font-thin">
                Upload your photo (JPG or PNG, max size: 500KB).
              </p>
            </div>
          )}
        <input type="file" id="avatarInput" onChange={verifyFileValidity} required/>

        <InputComp 
          id="fullName" 
          text="Full Name" 
          type="text"
          value={fullName}
          error={errors.fullName}
          handleChange={(e) => handleInputChange("fullName" , e.target.value)}/>
        <InputComp 
          id="email" 
          text="Email Address" 
          type="email" 
          placeholder="example@email.com"
          value={email}
          error={errors.email}
          handleChange={(e) => handleInputChange("email" , e.target.value)}
          />
        <InputComp 
          id="githubUserName" 
          text="GitHub Username" 
          type="text" 
          placeholder="@yourusername"
          value={userName}
          handleChange={(e) => handleInputChange("userName" , e.target.value)}
          />
        <button 
          type="submit"
          className="mb-16 w-full bg-[#FF6A5C]  text-blue-950 text-lg font-bold
          py-3 rounded-xl cursor-pointer">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default MobileForm;
