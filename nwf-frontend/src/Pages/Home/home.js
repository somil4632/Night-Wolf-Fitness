import React from 'react'
import wolfimage from '../../assets/wolfimage.png'
const Home = () => {
    return (
        <div className="w-full">
            <div className="border-3 border-slate-800 bg-zinc-950 text-cyan-400 p-6 font-semibold text-2xl">
                Welcome To Night Wolf Fitness
            </div>
               <div className="w-full">
                <img 
                src={wolfimage}
                alt="Night Wolf Fitness"
                className="w-full h-auto object-contain"
                />
               </div>
            </div>
    )
}
export default Home 