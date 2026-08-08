import React from 'react'
import crossicon from '../../assets/crossicon.webp';
const Modal = () => {
    return (
         <div className= 'w-full h-screen fixed bg-black bg-opacity-50 text-White top-0 left-0 flex justify-center'>
            <div className= 'w-1/2 bg-teal-950 rounded-lg h-fit mt-32'>
               <div className= 'flex justify-between'>
                 <div Forgot Password></div>
                  <img src={crossicon} alt="Night Wolf Fitness"/>

               </div>
            </div>
         </div>
    )
}
export default Modal