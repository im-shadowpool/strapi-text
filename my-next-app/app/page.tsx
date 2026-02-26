import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSction";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container flex flex-col gap-8 py-[64px]">
        <div className="flex flex-col text-center gap-[64px] justify-between items-center">
          <div className="flex flex-col gap-4 items-center w-[70%]">
            <span className="uppercase text-gray-500">About us</span>
            <h2 className="text-4xl font-bold">
              Bringing you quality service service service
            </h2>
          </div>
          <div className="w-[70%]">
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
        <div className="flex mt-10 gap-8 items-start justify-evenly">
          <div className="flex items-center gap-4 flex-col">
            <h3 className="text-3xl font-bold">60k+</h3>
            <p className="text-gray-500">Companies</p>
          </div>
          <div className="flex items-center gap-4 flex-col">
            <h3 className="text-3xl font-bold">60k+</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="flex items-center gap-4 flex-col">
            <h3 className="text-3xl font-bold">60k+</h3>
            <p className="text-gray-500">Coutner</p>
          </div>
          <div className="flex items-center gap-4 flex-col">
            <h3 className="text-3xl font-bold">60k+</h3>
            <p className="text-gray-500">Companies</p>
          </div>
        </div>
        <button className="px-6 py-3 flex self-center cursor-pointer w-fit bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
          Get Started
        </button>
        <div className="mt-10">
          <Image
            src="https://images.unsplash.com/photo-1771682390082-eb3f9821efd7"
            alt="Image 1"
            width={1440}
            height={900}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
