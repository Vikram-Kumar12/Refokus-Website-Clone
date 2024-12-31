import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
function Products(){
    
    var products = [
        {title : "Arqitel", description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-1600.webp",video:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"},

        {title : "Cula", description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",video:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"},

        {title : "TTR", description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png", video:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"},

        {title : "Maniv", description : "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png", video:"https://web.archive.org/web/20240216094731im_/https://cdn.refokus.com/website/Maniv-Compressed.mp4"},

        {title : "YIR 2022", description : "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-1600.png", video:"https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm"},

        {title : "Yahoo!", description : "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png", video:"https://web.archive.org/web/20240216094843im_/https://cdn.refokus.com/website/2022/videos/yahoo.webm"},

        {title : "Rainfall", description : "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/2022/videos/rainfall.webm"},

        {title : "Jungle", description : "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-1600.jpg", video:"https://web.archive.org/web/20240216094844im_/https://cdn.refokus.com/website/jungle-4-3-.webm"},

        {title : "Silvr", description : "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png", video:"https://web.archive.org/web/20240216094729im_/https://cdn.refokus.com/website/2022/videos/Silvr.webm"},

        {title : "Remind", description : "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094844im_/https://cdn.refokus.com/website/2022/videos/remind.webm"},

        {title : "Summon", description : "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299c0532977f3221f06f5_Summon%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094845im_/https://cdn.refokus.com/website/2022/videos/summon.webm"},

        {title : "Like Magic", description : "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.", livebutton:true, casebutton:true,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/637e6790db842e13a0e0aa51_Work-Background-p-1600.png", video:"https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/lavender-169.webm"},

        {title : "RocketChat", description : "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299e14c14ec42d53e6614_RocketChat%20bg.png", video:"https://web.archive.org/web/20240216094844im_/https://cdn.refokus.com/website/2022/videos/rocketchat.webm"},

        {title : "Haufe", description : "Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2b9a478df1ef5a0435_Haufe.de%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094845im_/https://cdn.refokus.com/website/2022/videos/haufe.webm"},

        {title : "YIR 2021", description : "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299a728ba3624405c1f46_Year%20in%20Review%202022%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094845im_/https://cdn.refokus.com/website/2022/videos/yearinreview.webm"},

        {title : "Weglot", description : "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299d5545a912e9e4a9cb4_Weglot%20for%20Germany%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094843im_/https://cdn.refokus.com/website/2022/videos/weglot.webm"},

        {title : "Candid Health", description : "A complete redesign of a health-startup website, followed by cutting edge development.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b7dbf5f12bc6fafbfb90fa_Candid%20Work%20Background.jpg", video:"https://web.archive.org/web/20240216094845im_/https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm"},

        {title : "Showcase", description : "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.", livebutton:true, casebutton:false,image:"https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg-p-1600.png", video:"https://web.archive.org/web/20240216094845im_/https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4"},
    ]
    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 23);
    };
    return (
        <div className="relative mt-52">
        {products.map((elem,index)=><Product key={index} val={elem} mover={mover} idx={index} image={elem}
        />)}
        <div className="absolute w-full h-full top-0 pointer-events-none">
        {products.map((elem,index)=>(
            <motion.div
                initial={{y:pos , x:"-50%"}}
                animate={{y: pos+'rem'}}
                transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}}
                className="window absolute w-[30rem] h-[23rem] left-[45%]  overflow-hidden  ">
                <motion.div 
                    animate={{ y: -pos + index*23 + 'rem' }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                    className="singleSeen w-full h-full ">
                       
                    <div className="w-full h-full overflow-hidden rounded-3xl">
                        <video 
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl overflow-hidden" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            loading="lazy">
                            <source 
                            src={elem.video}
                            type="" />
                        </video>

                    </div>
                </motion.div>
                </motion.div>
                 ))}
            </div>
        </div>
    )
}
export default Products;
