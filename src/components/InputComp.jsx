function InputComp({id, text, type, placeholder,value, handleChange, error}) {
  return (
    <div className="flex flex-col gap-2 w-full mb-4">
      <label 
        htmlFor={id}
        className="text-xl font-display text-white font-light text-left cursor-pointer">
        {text}
      </label>
      <input 
        type={type} 
        id={id}
        placeholder={placeholder}
        value = {value}
        onChange={handleChange}
        className="mb-2 p-3 w-full border border-gray-200 rounded-lg bg-blue-950 text-white"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  )
}

export default InputComp