import React from 'react'
import crossicon from '../../assets/crossicon.webp';
const Modal = () => {
    return (
         <div className= 'w-full h-screen fixed bg-black bg-opacity-50 text-White top-0 left-0 flex justify-center items-center z-50'>
            <div className= 'w-1/2 bg-teal-950 rounded-lg h-fit overflow-hidden p-5'>
               <div className= 'flex justify-between items-center '>
                 <div className='text-white font-bold text-2xl'> Forgot Password</div>
                 <img src={crossicon} alt="Close" className='w-5 h-5  object-contain cursor-pointer' />
               </div>
                 <div className='mt-10'>
                    Enter Your Email
                 </div>
            </div>
         </div>
    )
}
export default Modal