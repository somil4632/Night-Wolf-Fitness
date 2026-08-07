import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <div className="w-full">
            <div className="w-1/3 p-10 mt-20 ml-20 bg-teal-950 bg-opacity-50">
            <div className="font-sans text-white text-center font-bold text-3xl">Login</div>
            <input type="text" className="w-full my-10 p-2 rounded-lg" placeholder="Enter Username"/>              
            <input type="password" className="w-full mb-10 p-2 rounded-lg" placeholder="Enter Password"/>
            <div className="p-2 w-[80%] border-2 bg-teal-700 mx-auto rounded-lg text-white text-center text-lg hover:bg-teal-950 font-semibold  cursor-pointer">Submit</div>
              </div>
        </div>
        </div>
    )
}
    
export default Home ;