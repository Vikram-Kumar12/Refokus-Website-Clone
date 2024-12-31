import React from "react";
import Button from "./Button";
function Navbar(){
  return (
    // max-w-screen-lg -> ye hamko total screen ka 1000px deta hai ragbhag
    // mx-auto -> ye hamko center position mein karega
    <div className="fixed top-0 left-0 w-[100%] pl-[5%] pr-[5%]  bg-zinc-900 z-50 shadow-md    py-6  flex items-center justify-between border-b-[1px] border-zinc-700">
        <div className="flex items-center">
          <img src="https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
          <div className="links flex gap-16 ml-24">
            {["Home","Work","Culture", "", "News"].map((elem,index)=>(
              elem.length === 0 ? <span key={index} className="w-[1px] h-5 bg-zinc-500"></span> : <a key={index} className="font-thin text-sm flex gap-1 items-center" href="#">
              {/* span tag basically chhote chij ko banane ke liye use kiya jata hai */}
            {index === 1 ? ( <span style={{boxShadow: "0 0 0.45em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>) : null}
            {elem}
            </a>))}
          </div>
          
        </div>

       <Button/>
    </div>
  )
}
export default Navbar;