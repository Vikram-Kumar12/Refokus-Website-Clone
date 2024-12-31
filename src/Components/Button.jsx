import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Start a Project" }) {
  return (
    <div className="group min-w-[12%] px-4 py-2 bg-[#F1ECFF] rounded-full text-black flex items-center justify-between transition-all duration-300 hover:bg-[#D7C9FF] hover:shadow-lg hover:scale-105">
      <span className="text-sm font-light group-hover:font-medium">{title}</span>
      <IoIosReturnRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
    </div>
  );
}

export default Button;
