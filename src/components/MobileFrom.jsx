import uploadIcon from '../assets/images/icon-upload.svg';
import infoIcon from '../assets/images/icon-info.svg';

function MobileForm() {
  return (
    <form className="px-2">
      <h1 className="text-3xl font-display font-semibold text-white !important">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-xl font-display text-[#d2d1d6] mt-6 font-medium">
        Secure your spot at next year's biggest coding conference.
      </p>
      <div className="pt-6 flex flex-col items-start gap-2">
        <label className="text-xl font-display text-white font-light" htmlFor="avatarInput">
          Upload Avatar
        </label>
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 
        bg-blue-950 w-full">
          <img 
            src={uploadIcon} 
            alt="upload file"
            className='cursor-pointer bg-gray-700 mx-auto rounded-md p-2' 
          />
          <p className='text-lg font-display text-[#d2d1d6] font-light mt-4'>
            Drag and drop or click to upload
          </p>
        </div>
        <div className='flex justify-center gap-2'>
          <img src={infoIcon} alt="info" />
          <p className='text-xs font-display text-[#d2d1d6] font-thin'>
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        </div>
        
        <input type="file" id="avatarInput"/>
      </div>
    </form>
  )
}

export default MobileForm;

