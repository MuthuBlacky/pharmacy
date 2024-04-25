import Image from "next/image";
import Header from "./_components/Header";
import SearchBar from "./_components/SearchBar";
import Navbar from "./_components/Navbar";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSize } from "./_components/Carousal";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative">
        <SearchBar />
      </div>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <CarouselSize />
      </div>
    </div>
  );
}
