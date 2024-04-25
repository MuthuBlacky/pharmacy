import {
  BadgePercent,
  CircleUserRound,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between p-3">
        <div className="flex w-[10%] items-center justify-around">
          <Image
            width={40}
            height={40}
            alt="pharmacy-logo"
            src={"/pharmacy2-logo.jpeg"}
          />
          <p className="text-2xl font-extrabold">Tronix</p>
        </div>
        {/* <span className="text-[#f28b82]">T</span>
      <span className="text-[#fdd663]">r</span>
      <span className="text-[#8ab4f7]">o</span>
      <span className="text-[#81c995]">n</span>
      <span className="text-[#c58af9]">i</span>
      <span className="text-[#587b82]">x</span> */}
        <div className="w-[25%] flex items-center justify-evenly">
          <BadgePercent />
          <ShoppingCart></ShoppingCart>
          <button className="w-32 flex justify-around items-center gap-4 rounded-md h-10 border-solid border-[1px] border-black">
            Login
            <UserRound className="h-6 text-sm w-6"></UserRound>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
