import Image from "next/image";
import Header from "./_components/Header";
import SearchBar from "./_components/SearchBar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative">
        <SearchBar />
      </div>
    </div>
  );
}
