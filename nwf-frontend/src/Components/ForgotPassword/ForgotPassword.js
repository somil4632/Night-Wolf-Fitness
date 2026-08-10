import React, {useState} from 'react'
const ForgotPassword = () => {
    const [emailSubmit,setEmailSubmit] = useState(false);
    const [otpValidate,setOtpValidate] = useState(false);
    const [contentVal,setContentValue] = useState("Submit Your Email ");
     const handleSubmit = () => {
        if (!emailSubmit) {
             setEmailSubmit(true)
             setContentValue("Submit Your OTP")
        } else if(emailSubmit && !otpValidate) {
            setOtpValidate(true)
            setContentValue("Submit Your New Password")
           }
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
           {     
                otpValidate &&  ( <div className='w-full mb-5'>
                <div className='text-white mb-2 font-semibold text-lg'>Enter Your New Password</div>
                  <input type="text" className="w-full p-2 rounded-lg bg-teal-950 text-white border-2 border-white " placeholder="Enter New Password"/>     
              </div>
                )
          }
            <div className='bg-teal-700 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-bold text-xl hover:bg-teal-950 border-2 border-white cursor-pointer' onClick={handleSubmit}>{contentVal}</div>
         </div>
    )
}
export default ForgotPassword