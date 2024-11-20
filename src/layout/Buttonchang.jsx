import React from 'react'

const Buttonchang = () => {
  return (
    <div>
          <div class="">
          
          
   

      
    <select name="favoriteOnly" id="favoriteOnly" className='px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'>
      <option><button onclick="changeLanguage('fr')">Français</button></option>
      <option> <button onclick="changeLanguage('en')">English</button></option>
      <option> <button onclick="changeLanguage('en')">arabe</button></option>
     
    </select>
    
  </div>
    </div>
  )
}

export default Buttonchang