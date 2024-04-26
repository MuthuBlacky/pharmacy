import { BadgeIndianRupee, DollarSign, Percent } from "lucide-react";
import React from "react";
type CategoryOnHealthProps = {
  item: {
    category: {
      category_name: string;
      category_id: string;
      category_subproducts: {
        product_name: string;
        product_type: string;
        product_gram: number;
        product_original_prize: number;
        product_offer: number;
        product_img: string;
      }[];
    };
  };
};
const CategoryOnHealth = ({ item }: CategoryOnHealthProps) => {
  const category = item.category;
  return (
    <div className="p-9">
      <h1 className="text-2xl font-extrabold ml-8">{category.category_name}</h1>
      <br />
      <div className="flex justify-around  gap-5">
        {category.category_subproducts.map((item) => {
          return (
            <div className="flex flex-col max-w-56 gap-5 justify-center">
              <img
                className="w-[140px] h-[120px]"
                src={item.product_img || "/placeholder.png"}
                alt=""
              />
              <div>
                <div className="w-full">
                  <p className="text-gray-700 text-center text-lg font-semibold capitalize">
                    {item.product_name}
                    <br />
                    <span className="capitalize text-sm text-emerald-600">
                      {item.product_type}
                    </span>
                  </p>
                </div>

                <div className="flex justify-center items-center w-full">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center text-lg w-full font-extrabold">
                      <BadgeIndianRupee className="w-5 h-5" />
                      {"  "}
                      {item.product_original_prize -
                        (item.product_original_prize * item.product_offer) /
                          100}
                    </span>
                    <s className="text-xs">{item.product_original_prize}</s>
                    <span className="flex justify-center items-center text-sm text-[#277470]">
                      {item.product_offer} <Percent className="w-4 h-4" /> off
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-[#165d59] text-white font-semibold p-4 rounded-md">
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryOnHealth;
