import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import { useState, useContext } from "react";
import InputComp from "./InputComp";
import { formContext } from "../context/FormContext";

function MobileForm() {
  const {state, dispatch} = useContext(formContext);
  const {fullName, email, userName} = state;


  const [previewUrl, setPreviewUrl] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  }

  const handleFullNameChange = (e) => {
    dispatch({type : "SET_FULLNAME", payload: e.target.value})
  }

  const handleEmailChange = (e) => {
    dispatch({type: "SET_EMAIL", payload: e.target.value})
  }

  const handleUserNameChange = (e) => {
    dispatch({type: "SET_USERNAME", payload: e.target.value})
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
        <input type="file" id="avatarInput" onChange={verifyFileValidity}/>

        <InputComp 
          id="fullName" 
          text="Full Name" 
          type="text"
          value={fullName}
          handleChange={handleFullNameChange}/>
        <InputComp 
          id="email" 
          text="Email Address" 
          type="email" 
          placeholder="example@email.com"
          value={email}
          handleChange={handleEmailChange}
          />
        <InputComp 
          id="GithubUserName" 
          text="GitHub Username" 
          type="text" 
          placeholder="@yourusername"
          value={userName}
          handleChange={handleUserNameChange}
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
