import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <div className="w-full lg:flex gap-40">

               <div className="w-1/3 p-10 mt-20 ml-20 bg-teal-950 bg-opacity-50 h-fit">
                 <div className="font-sans text-white text-center font-bold text-3xl">Login</div>
                 <input type="text" className="w-full my-10 p-2 rounded-lg" placeholder="Enter Username"/>              
                 <input type="password" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Password"/>
                 <div className="p-2 w-[80%] border-2 bg-teal-700 mx-auto rounded-lg text-white text-center text-lg hover:bg-teal-950 font-semibold  cursor-pointer">Submit</div>
                </div>

              <div className="w-1/3 p-10 mt-20 ml-20 bg-teal-950 bg-opacity-50 h-[450px] overflow-y-auto">
                 <div className="font-sans text-white text-center font-bold text-3xl">Sign Up here </div>
                <input type="text" className="w-full my-10 p-2 rounded-lg" placeholder="Enter Email"/>              
                <input type="text" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Gym Name"/>
                <input type="text" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Username"/>        
                <input type="password" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Password"/>
                <div className="font-sans text-white text-center text-2xl">Upload Your Profile Image </div>
                <input type="file" className="w-full mt-5 p-2 rounder-lg"/>
                <div className="p-2 w-[80%] border-2 bg-teal-700 mx-auto rounded-lg text-white text-center text-lg hover:bg-teal-950 font-semibold  cursor-pointer">Sign In</div>
            </div>

        </div>
        </div>
    )
}
    
export default Home ;