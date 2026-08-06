import React from "react";
import { motion } from "framer-motion";
import wolfImage from "../../assets/wolfimage.png";

const Hero =() => {
    return (
        <section className ="h-screen bg-black overflow-hidden">
            <div className="w-full h-full max-w-[1500px] mx-auto px-10 lg:px-20 xl:px-28">
                <div className="grid lg:grid-cols-[38%_62%] items-center h-full">
                    <motion.div className="relative z-10"
                    initial={{ x: -80 , opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 1}}>
                        <div className=" space-y-4flex flex-col  justify-center h-full">
                        <p className="text-cyan-400 tracking-[4px] uppercase text-2xl mt-1">
                            Welcome To
                        </p>
                        <h1 className="text-white text-5xl xl:text-6xl font-black leading-[0.9]">
                            NIGHT WOLF
                        </h1>
                        <h2 className="text-4xl xl:text-5xl font-black text-cyan-400 leading-[0.9] text-center w-full">
                            FITNESS
                        </h2>
                        <div className="flex justify-center -mt-1 mb-2">
                        <div className="w-44 h-1 bg-cyan-400 mt-2 rounded-full"></div>
                        </div>
                        <h3 className=" text-white text-2xl font-semibold">
                            Unleash Your Inner Strength
                        </h3>
                        <p className="text-gray-400 text-lg leading-8 max-w-lg">
                            At Night Wolf Fitness, we Believe in pushing limits, breaking barriers, and becoming the strongest version of yourself....
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
                    className="flex justify-center items-end h-full"
                    initial={{ y: 0 }}
                    animate={{ y:[0, -10 , 0],}}
                    transition={{duration: 4, repeat: Infinity,}}>
                        <img 
                        src={wolfImage}
                        alt="Night Wolf"
                        className="h-[75vh] lg:h-[82vh] xl:h-[88vh] w-auto object-contain object-bottom"
                        />
                    </motion.div>
                </div>
            </div>
            </section>
    )
}
export default Hero;