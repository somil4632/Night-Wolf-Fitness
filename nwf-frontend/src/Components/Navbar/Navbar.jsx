import React from "react";
const Navbar = () => {
    return (
        <nav className ="w-full fixed top-0 left-0 z-50 bg black/40 backdrop-blur-md border-b border-cyan-500/20">
            <div className ="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
                <div className ="text-3xl font-bold text-cyan-400 tracking-wider">
                    Night Wolf Fitness
                </div>
                <ul className ="hidden md:flex gap-10 text-white font-medium">
                    <li className ="hover:text-cyan-400 cursor-pointer transition duration-300">
                        Home
                    </li>
                    <li className ="hover:text-cyan-400 cursor-pointer transition duration-300">
                        About
                    </li>
                    <li className ="hover:text-cyan-400 cursor-pointer transition duration-300">
                        Programs
                    </li>
                    <li className ="hover:text-cyan-400 cursor-pointer transition duration-300">
                        Contact
                    </li>
                </ul>
                <div className ="flex gap-4">
                    <button className ="border border-cyan-400 px-5 py-2 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
                        Login
                    </button>
                    <button className ="bg-cyan-400 px-5 py-2 rounded-lg text-black font-semibold hover:bg-cyan-300 transition duration-300">
                        Sign Up
                    </button>
                </div>
                </div>
        </nav>
    )
}
export default Navbar;