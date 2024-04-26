import { Search } from "lucide-react";
import React from "react";
import Image from "next/image";
import styles from "@/app/_components/style.module.css";
const SearchBar = () => {
  return (
    <div>
      <div className="w-full flex items-center bg-[#162c2a] h-[200px] mt-4">
        <img src={"/doctor1.png"} alt="" className={`h-full object-contain`} />
        <div className="w-full flex flex-col justify-center items-center h-full">
          <p className={`${styles.ele} text-center text-white text-3xl font-semibold mb-10`}>
            Buy Medicines and Essentials
          </p>
          <div className={`${styles.ele2} w-full h-[28%] relative`}>
            <Search
              size={30}
              color="#165d59"
              className={`absolute left-3 bottom-[24%] z-10`}
            ></Search>
            <p className="absolute text-gray-500 left-14 bottom-[25%] z-10">
              Search Medicines
            </p>
            <input type="text" className="w-full h-full rounded-lg z-1" />
          </div>
        </div>
        <img src={"/doctor2.png"} alt="" className={`object-contain h-full`} />
      </div>
    </div>
  );
};

export default SearchBar;
