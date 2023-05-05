import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter }  from "react-icons/ai"
function Footer() {
  return (
    <div className=' h-[15vh] w-full max-md:flex-col   border-theme flex justify-around items-center bg-black'>
        <div className=' font-Poppins font-black  text-theme  max-[320px]:text-[0.700rem] '>
             <p>{new Date().getFullYear()} All Rights Reserved, Private Limited. </p>
        </div>
        <div className='flex justify-around items-center max-md:w-6/12 xl:w-2/12 '>
            <AiFillFacebook className='text-4xl text-theme  '/>
            <AiOutlineInstagram className='text-4xl text-theme'/>
            <AiOutlineTwitter className='text-4xl text-theme'/>
         </div>
    </div>
  )
}

export default Footer