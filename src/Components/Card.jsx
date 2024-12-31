import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, title, titl, hover}){
    
    return (
        <motion.div
         whileHover={{background : hover === "true" ? "#8155FE" : "#3E3E46" , padding:"25px"}}
         className={`bg-zinc-800 rounded-xl p-5 ${width} min-h-[25rem] flex flex-col justify-between`}>
            <div className="w-full">
                {title === true && (
                    <>
                    <div className="flex items-center justify-between">
                        <h1>Up Next: News</h1>
                            <IoIosArrowRoundForward/>
                    </div>
                    <h1 className="w-[55%] text-2xl font-medium mt-5">Insights and behind the scenes</h1>
                    </>
                )}
                {titl === true && (
                    <>
                        <div className="flex items-center justify-between">
                            <h1>Get In Touch</h1>
                            <IoIosArrowRoundForward/>
                        </div>
                        <h1 className="w-[28%] text-2xl font-medium mt-5">Let’s get to it, together.</h1>
                    </>
                )}
            </div>
            <div className="w-full">
                {
                    start === true && (
                        <div>
                            <h1 className="text-[7.5vw] font-bold">Start a Project</h1>
                            <button className="px-5 py-2 rounded-full border-[1px] bg-[#8155FE] ">Contact US</button>
                        </div> 
                    )  
                }
                {
                    para === true && (<p className="text-sm text-zinc-400">Explore what drives our team.</p>)
                }
            </div>
        </motion.div>
    )
}
export default Card;