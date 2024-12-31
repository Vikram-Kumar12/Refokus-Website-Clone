import React from "react";
function Footer(){
    var data1 = ["Instagram","Twitter","LinkedIn"]
    var data2 = ["Home","Service","Work","Contact"]
    return (
        <div className="w-full  ">
            <div className="max-w-screen-xl mx-auto  flex gap-32">
                <div className="basis-1/2 text-[11.5rem] font-semibold leading-none tracking-tight">refokus.</div>
                <div className="basis-1/2 flex gap-20 ">
                    <div className="text-sm opacity-30">
                            <h4 >Socials</h4>
                        <div className="mt-9">
                        {data1.map((elem,index)=> <h4 key={index} className="mt-2">{elem}</h4>)}
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                            <h4 className="opacity-30 font-normal">Sitemap</h4>
                            <div className="mt-9">
                        {data2.map((elem,index)=> <h4 key={index} className="mt-2">{elem}</h4>)}
                        </div>
                    </div>
                    <div className="text-center mt-[4rem]">
                        <p className="leading-none">Refokus is a full-service Webflow agency designing and building brands and websites that empower growth.</p>
                        <button className="mt-7"><img src="https://web.archive.org/web/20221208124439im_/https://assets.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" /></button>
                    </div>
                </div>
                
            </div>
            <div className="max-w-screen-xl mx-auto flex gap-20 text-zinc-600 py-10">
               
               {["Privacy Policy","Cookie Policy","Impressum","Terms",].map((elem,index)=>(
                    <h4 key={index}>{elem}</h4>
                ))}
               
            </div>
        </div>
    )
}
export default Footer;