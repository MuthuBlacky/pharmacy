"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Product() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ paddingTop: "2rem" }}
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="w-full flex justify-center mt-8">
              <Image
                width={1200}
                height={600}
                alt="pharmacy-logo"
                src="/FiftyPercentOff.jpg"
                className="rounded-lg"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </CarouselItem>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <h2 className="text-xl font-bold mt-12 left-align">Summer Face Care</h2>
      <div className="flex flex-wrap justify-center  gap-3.5">
        {[
          { name: "Face Wash", src: "/face_wash_0.jpg" },
          { name: "Sunscreen", src: "/suns_creen.jpg" },
          { name: "Non Sticky Oil", src: "/non_sticky.jpg" },
          { name: "Toner", src: "/toner_d_0.jpg" },
        ].map((product) => (
          <div className="p-4">
            <Image
              width={250}
              height={250}
              alt={product.name}
              src={product.src}
              className="rounded-lg"
              style={{ borderRadius: "10px" }}
            />
            <h2 className="text-xl font-bold mt-2 text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex mt-10 justify-center w-full">
        <div className="mr-16">
          <Image
            width={500}
            height={400}
            alt="50% Off"
            src="/minimum50.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="ml-16">
          <Image
            width={500}
            height={400}
            alt="30% Off"
            src="/minimum30.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12" style={{ textAlign: "left" }}>
        Summer Body Essentials
      </h2>
      <div className="flex mt-4 gap-24">
        <div>
          <Image
            width={150}
            height={150}
            alt="30% Off"
            src="/body_wash.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
          <h2>Body Wash</h2>
        </div>

        <div>
          <Image
            width={150}
            height={150}
            alt="30% Off"
            src="/menthol_d_0.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
          <h2>Ice Menthol</h2>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="30% Off"
            src="/talcum_powder_0.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
          <h2>Dusting powder</h2>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="30% Off"
            src="/light_weight_0.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
          <h2>Light body lotion</h2>
        </div>
        <div>
          <Image
            width={150}
            height={150}
            alt="30% Off"
            src="/fragrance_d.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
          <h2>Fragrance</h2>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12">Skine Care Routine</h2>
      <div className="flex mt-4 justify-center w-full">
        <div className="mr-16">
          <Image
            width={500}
            height={400}
            alt="50% Off"
            src="/pre_protect.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="ml-16">
          <Image
            width={500}
            height={400}
            alt="30% Off"
            src="/after_sun.jpg"
            className="rounded-lg"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12">Shop By Brand</h2>
      <div className="flex mt-4 gap-24">
        <div className="flex mt-4 gap-24">
          <div>
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/lakme_d_0.jpg"
              className="rounded-lg"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
          </div>

          <div>
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/minimalist_d.jpg"
              className="rounded-lg"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
          </div>

          <div>
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/vlcc_d.jpg"
              className="rounded-lg"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
          </div>

          <div>
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/la_sheild.jpg"
              className="rounded-lg"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
          </div>

          <div>
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/cetaphil_d.jpg"
              className="rounded-lg"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-12" style={{ textAlign: "left" }}>
        Top Recomendations
      </h2>

      <div className="flex gap-12 mt-8">
        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/redgel.jpg"
              className="rounded-lg"
            />
            <p className="align-items-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/dermicool.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/neo.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/can.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/dove.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/axe.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* second line */}
      <div className="flex gap-12 mt-8">
        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/dovo.jpg"
              className="rounded-lg"
            />
            <p className="align-items-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/cet.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/lact.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/pears.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/himalaya.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/oil.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* third line */}
      <div className="flex gap-12 mt-8">
        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/lacto.jpg"
              className="rounded-lg"
            />
            <p className="align-items-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/smooth.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/shower.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/ponds12.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/safesun.jpg"
              className="rounded-lg"
            />
            <p className="justify-center">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="w-[150px]">
            <Image
              width={150}
              height={150}
              alt="30% Off"
              src="/headshoulders.jpg"
              className="rounded-lg"
            />
            <p className="mx-auto w-fit">-----------------</p>
            <CardFooter className="flex justify-between">
              <Button>Add To Card</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
