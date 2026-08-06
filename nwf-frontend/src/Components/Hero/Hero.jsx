import React from "react";
import { motion } from "framer-motion";
import wolfImage from "../../assets/wolfimage.png";

const Hero =() => {
    return (
        <section className ="h-[calc(100vh-80px)] bg-black overflow-hidden">
            <div className="w-full h-full max-w-[1500px] mx-auto px-10 lg:px-20 xl:px-28">
                <div className="grid lg:grid-cols-[45%_55%] items-center h-full">
                    <motion.div 
                    initial={{ x: -80 , opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 1}}>
                        <div className="space-y-2 flex flex-col justify-center h-full">
                        <p className="text-cyan-400 tracking-[8px]">
                            Welcome To
                        </p>
                        <h1 className="text-6xl xl:text-7xl font-black leading-none">
                            NIGHT WOLF
                        </h1>
                        <h2 className="text-6xl xl:text-7xl font-black text-cyan-400 leading-none">
                            FITNESS
                        </h2>
                        <div className="w-40 h-1 bg-cyan-400"></div>
                        <h3 className="text-2xl font-semibold">
                            Unleash Your Inner Strength
                        </h3>
                        <p className="text-gray-400 text-base leading-7 max-w-lg">
                            At Night Wolf Fitness, we Believe in pushing limits, breaking barriers, and becoming the strongest version of yourself.
                        </p>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <button className="bg-cyan-400 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
                                JOIN NOW 
                            </button>
                            <button className="border border-cyan-400 px-10 py-4 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
                                MEMBERSHIP
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                    className="flex justify-end items-end h-full"
                    initial={{ y: 0 }}
                    animate={{ y:[0, -10 , 0], scale: [1, 1.02, 1]}}
                    transition={{duration: 4, repeat: Infinity,}}>
                        <img 
                        src={wolfImage}
                        alt="Night Wolf"
                        className="w-[600px] lg:w-[700px] xl:w-[820px] object-contain object-bottom"
                        />
                    </motion.div>
                </div>
            </div>
            </section>
    )
}
export default Hero;