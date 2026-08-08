import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <div className="w-full lg:flex gap-40">

                  <Login/>
                  <Signup/>


        </div>
        </div>
    )
}
    
export default Home ;