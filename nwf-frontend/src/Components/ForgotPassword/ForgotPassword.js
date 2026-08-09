import React, {useState} from 'react'
const ForgotPassword = () => {
    const [emailSubmit,setEmailSubmit] = useState(false);
     const handleSubmit = () => {
             setEmailSubmit(true)
        }
    return (
        <div className="w-full ">
            <div className='w-full mb-5'>
                <div className='text-white mb-2 font-semibold text-lg'>Enter Your Email</div>
                  <input type="text" className="w-full p-2 rounded-lg bg-teal-950 text-white border-2 border-white " placeholder="Enter Email"/>     
            </div>
            {     
                emailSubmit &&  ( <div className='w-full mb-5'>
                <div className='text-white mb-2 font-semibold text-lg'>Enter Your OTP</div>
                  <input type="text" className="w-full p-2 rounded-lg bg-teal-950 text-white border-2 border-white " placeholder="Enter OTP"/>     
              </div>
                )
          }
            <div className='bg-teal-700 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-bold text-xl hover:bg-teal-950 border-2 border-white cursor-pointer' onClick={()=>handleSubmit()}>Send OTP</div>
         </div>
    )
}
export default ForgotPassword