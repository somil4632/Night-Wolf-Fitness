import React from "react";
const Navbar = () => {
    return (
        <nav className ="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-teal-500/20">
            <div className ="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
                <div className ="text-3xl font-bold text-teal-950 tracking-wider">
                    Night Wolf Fitness
                </div>
                <ul className ="hidden md:flex gap-10 text-white font-medium">
                    <li className ="hover:text-teal-950 cursor-pointer transition duration-300">
                        Home
                    </li>
                    <li className ="hover:text-teal-950 cursor-pointer transition duration-300">
                        About
                    </li>
                    <li className ="hover:text-teal-950 cursor-pointer transition duration-300">
                        Programs
                    </li>
                    <li className ="hover:text-teal-950 cursor-pointer transition duration-300">
                        Contact
                    </li>
                </ul>
                <div className ="flex gap-4">
                    <button  className ="border border-teal-950 px-5 py-2 rounded-lg text-teal-950 hover:bg-teal-600 hover:text-white transition duration-300">
                        Login
                    </button>
                    <button className ="bg-teal-950 px-5 py-2 rounded-lg text-white font-semibold hover:bg-teal-950 transition duration-300">
                        Sign Up
                    </button>
                </div>
                </div>
        </nav>
    )
}
export default Navbar;