import React from "react";
import {motion} from "framer-motion";
import wolfimage from "../assets/wolfimage.png";

const Hero =() => {
    return (
        <section className ="relative h-screen w-full overflow-hidden">
            <motion.img
            src={wolfimage}
            alt="Night Wolf Fitness"
            className="w-full h-full object-cover"
            animate={{scale:[1,1.02,1],}}
            transition={{duration:5, repeate: Infinity, ease: "easeInOut,"}}/>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                initial={{ opacity: 0, y: -80}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1}}
                className="text-6xl md:text-7xl font-extrabold text-white">
                    Night Wolf 
                </motion.h1>
                <motion.h2
                initial={{ opacity: 0}}
                animate={{opacity: 1}}
                transition={{ delay: 0.5}}
                className="text-cyan-400 text-3xl md:text-4xl mt-3">
                    Fitness
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1}}
                    className="text-gray-300 mt-6 text-lg md:text-xl">
                        Unleash Your Inner Strenght and Trasnform Your Body With Night Wolf Fitness
                    </motion.p>
                    <motion.button
                    whileHover={{ scale: 1.08, boxShadow: "0 0 30px cyan",}}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold">
                        Join Now
                    </motion.button>
            </div>
        </section>
    )
}
export default Hero;