import React from "react";
function Stripe({val,ind}){
    return (
        ind !== 4 ? (
            <div className="w-[30%] px-10 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
                <img src={val.image} alt="" />
                <span className="font-semibold">{val.number}</span>
            </div>
        ) : (
            <div className="w-[13%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
                <img className="ml-5" src={val.image} alt="" />
            </div>
        )
    );
}
export default Stripe;