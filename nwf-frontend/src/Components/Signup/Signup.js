import React, { useState } from 'react';
import wolf2 from '../../assets/wolf2.png';
import './Signup.css';
import Modal from '../../Components/Modal/Modal';
import ForgotPassword from '../../Components/ForgotPassword/ForgotPassword';
const Signup = () => {
    const [forgotPassword, SetForgotPassword] = useState(false);
     const handleClose = () => {
        SetForgotPassword(prev=> !prev);
     }
   
    return (
               <div className=" customSignup w-1/3 p-10 mt-20 ml-20 bg-teal-950 bg-opacity-50 h-[450px] overflow-y-auto">
                 <div className="font-sans text-white text-center font-bold text-3xl">Sign Up here </div>
                    <input type="text" className="w-full my-10 p-2 rounded-lg" placeholder="Enter Email"/>              
                    <input type="text" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Gym Name"/>
                    <input type="text" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Username"/>        
                    <input type="password" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Password"/>
                 <div className="font-sans text-white text-center text-2xl">Upload Your Profile Image </div>
                   <input type="file" className="w-full mt-5 p-2 rounder-lg bg-teal-700 hover:bg-teal-950"/>
                   <img src={wolf2} alt="Night Wolf Fitness" className=' mt-10 h-[250px] w-[250px] rounded-full border-2 border-white border-bold'/>
                  <div className="mt-10 p-2 w-[80%] border-2 bg-teal-700 mx-auto rounded-lg text-white text-center text-lg hover:bg-teal-950 font-semibold  cursor-pointer">Sign In</div>
               <div className="mt-5 p-2 w-[80%] border-2 bg-teal-700 mx-auto rounded-lg text-white text-center text-lg hover:bg-teal-950 font-semibold  cursor-pointer" onClick={()=>handleClose()}>Forgot Password</div>
                  {forgotPassword && (<Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />}/>)}
             </div>
    )
}
export default Signup;