import { motion } from "motion/react";
import React from "react";
function Marques({imagesUrl,direction}){
   
    return (
        <div className="flex w-full overflow-hidden ">
            < motion.div
             initial={{x: direction === "left" ? "0" : "-100%"}}
             animate={{x: direction === "left" ? "-100%" : "0"}}
             transition={{ease:"linear", duration:20, repeat:Infinity}}
             className="flex flex-shrink-0 gap-20 py-10 pr-40">
                {imagesUrl.map((item,index)=>(
                    <img key={index} src={item} alt="Marques" className="" />
                ))}
            </motion.div>
            <motion.div
              initial={{x: direction === "left" ? "0" : "-100%"}}
              animate={{x: direction === "left" ? "-100%" : "0"}}
              transition={{repeat:Infinity, ease:"linear", duration:20}}
             className="flex flex-shrink-0 gap-20 py-10 pr-40">
            {imagesUrl.map((item,index)=>(
                <img key={index} src={item} alt="Marques" className="" />
            ))}
            </motion.div>
        </div>
    )
}
export default Marques;