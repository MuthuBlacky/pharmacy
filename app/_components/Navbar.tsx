import { ChevronRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around p-10">
      <div className="bg-[#E5F9F8] w-[250px] h-[80px] flex items-center justify-around rounded-lg">
        <img
          src={"/store_icon_image.webp"}
          className="w-[30px] h-[30px]"
          alt=""
        />
        <div>
          <h1 className="font-semibold "> Pharmacy Near Me</h1>
          <p className="text-xs mt-2">FIND STORE</p>
        </div>
        <ChevronRight className="w-4 h-4"/>
      </div>
      <div className="bg-[#E9FAEE]  w-[250px] h-[80px] flex items-center justify-around rounded-lg">
        <img
          src={"/store_icon_image.webp"}
          className="w-[30px] h-[30px]"
          alt=""
        />
        <div>
          <h1 className="font-semibold "> Pharmacy Near Me</h1>
          <p className="text-xs mt-2 text-[#276239]">FIND STORE</p>
        </div>
        <ChevronRight className="w-4 h-4"/>
      </div>
      <div className="bg-[#F1EDFD]  w-[250px] h-[80px] flex items-center justify-around rounded-lg">
        <img
          src={"/store_icon_image.webp"}
          className="w-[30px] h-[30px]"
          alt=""
        />
        <div>
          <h1 className="font-semibold "> Pharmacy Near Me</h1>
          <p className="text-xs mt-2 text-[#7251d4]">FIND STORE</p>
        </div>
        <ChevronRight className="w-4 h-4"/>
      </div>
      <div className="bg-[#FFF3D6]  w-[250px] h-[80px] flex items-center justify-around rounded-lg">
        <img
          src={"/store_icon_image.webp"}
          className="w-[30px] h-[30px]"
          alt=""
        />
        <div>
          <h1 className="font-semibold "> Pharmacy Near Me</h1>
          <p className="text-xs mt-2 text-[#b69547]">FIND STORE</p>
        </div>
        <ChevronRight className="w-4 h-4"/>
      </div>
      <div className="bg-[#FCEDF2]  w-[250px] h-[80px] flex items-center justify-around rounded-lg">
        <img
          src={"/store_icon_image.webp"}
          className="w-[30px] h-[30px]"
          alt=""
        />
        <div>
          <h1 className="font-semibold "> Pharmacy Near Me</h1>
          <p className="text-xs mt-2 text-[#d3517c]">FIND STORE</p>
        </div>
        <ChevronRight className="w-4 h-4"/>
      </div>
    </div>
  );
};

export default Navbar;
