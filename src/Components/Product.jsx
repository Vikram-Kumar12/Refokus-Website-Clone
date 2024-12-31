// import React from "react";
// import Button from "./Button";
// function Product({val,mover,idx,image}){
//     return (
//         <div className="w-full h-[23rem]">
//            <div onMouseEnter={()=>mover(idx)}
//               className={`max-w-screen-xl mx-auto  flex items-center justify-between p-2 bg-cover bg-center`}
//               style={{ backgroundImage: `url(${image.image})` }}>
//                 {/* <img className="bg-cover bg-center" src={image.image} alt="" /> */}
//                <h1 className="text-5xl font-medium">{val.title}</h1>
//                <div className="dets w-1/3">
//                    <p className="w-[60%]">{val.description}</p>
//                    <div className="flex items-center  gap-10 ">
//                     {val.livebutton && <button className="mt-4"><Button title='Live Website'/></button>}
//                     {val.casebutton && <button className="mt-4"><Button title='Case Study'/></button>}
//                     </div>
//                </div>
//            </div>
//         </div>
//     )
// }
// export default Product;

import React, { useState } from "react";
import Button from "./Button";
function Product({ val, mover, idx, image }) {
  const [bgImageVisible, setBgImageVisible] = useState(false);

  return (
    <div className="w-full h-[23rem]">
      <div
        onMouseEnter={() => {
          setBgImageVisible(true);
          mover(idx);
        }}
        onMouseLeave={() => setBgImageVisible(false)}
        className={`w-full h-[20vw] pl-10  flex items-center justify-between p-2 bg-cover bg-center`}
        style={{
          backgroundImage: bgImageVisible ? `url(${image.image})` : 'none',
          backgroundColor: bgImageVisible ? 'none' : '#161618', // You can set any background color here
        }}
      >
        <h1 className="text-5xl font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="w-[60%]">{val.description}</p>
          <div className="flex items-center gap-10">
            {val.livebutton && (
              <button className="mt-4">
                <Button title="Live Website" />
              </button>
            )}
            {val.casebutton && (
              <button className="mt-4">
                <Button title="Case Study" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
