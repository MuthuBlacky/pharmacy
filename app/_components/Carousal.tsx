import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const products = [
    {
      productId: 1,
      image: "/824summer.webp",
    },
    {
      productId: 2,
      image: "/apollo_summer_essentials.webp",
    },
    {
      productId: 3,
      image: "/diabetes_reversal_program.webp",
    },
    {
      productId: 4,
      image: "/simple-apr.webp",
    },
    {
      productId: 5,
      image: "/summer2.webp",
    },
    {
      productId: 6,
      image: "/the_heat.webp",
    },
    {
      productId: 7,
      image: "/volini_offers_web.webp",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[80%] h-[250px] flex items-center"
    >
      <CarouselContent className="h-full">
        {products.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/2 lg:basis-1/3 rounded-md"
          >
            <div className="p-1">
              <img src={item.image} alt="" className="rounded-lg"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
