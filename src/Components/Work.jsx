import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
function Work(){
    const [images,setimages] = useState(
        [
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"38%",left:"39%",isActive:false},
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"43%",left:"36%",isActive:false},
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"29%",left:"43%",isActive:false},
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"45%",left:"39%",isActive:false},
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"38%",left:"44%",isActive:false},
        {url:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"34%",left:"38%",isActive:false},
        ]
    );
    // for animation
    const { scrollYProgress } = useScroll()
    scrollYProgress.on("change", (data)=>{
        function imagesshow(arr){
            setimages((prev)=>
                prev.map((item,index)=>(
                    arr.indexOf(index) === -1 
                    ? {...item, isActive:false}
                    : {...item, isActive:true}
                ))
            )
        }
        switch (Math.floor(data*100)) {
            case 0:
               imagesshow([]);
                break;
            case 1:
                imagesshow([1]);
                break;
            case 2:
                imagesshow([1,2]);
                break;
            case 3:
                imagesshow([1,2,3]);
                break;
            case 4:
                imagesshow([1,2,3,4]);
                break;
            case 6:
                imagesshow([1,2,3,4,5]);
                break;
            case 7:
                imagesshow([1,2,3,4,5,6]);
                break;
        
        }
    })
    return (
        <div className="w-full mt-20 ">
            <div className=" relative max-w-screen-xl  mx-auto text-center">
                <h1 className="text-[40vw] select-none leading-none font-medium ">work</h1>
                <div className="w-full h-full  absolute top-0">
                    {images.map((elem,index)=>(
                        // -translate-x-[50%] -translate-y-[50%]
                       elem.isActive && ( <img key={index} className="absolute w-[20vw] rounded-lg  " src={elem.url} 
                        style={{top:elem.top, left:elem.left}}
                        loading="lazy"
                        alt="" />)
                    ))}
                </div>
            </div>
            
        </div>
    )
}
export default Work;