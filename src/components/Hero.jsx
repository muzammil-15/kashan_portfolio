import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className=" w-full h-[90vh] bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/hero.png')" }}
    >
      <div className="flex flex-col gap-5 justify-center h-full items-center text-white max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-center font-[700] text-[#FFFFFF] w-[80%]">Innovative UX/UI Solutions for a Connected World</h1>
        <p className="font-[500] text-base text-[#FFFFFF] text-center w-[70%]">Kashan Mir, a driven UX/UI designer, passionately crafts seamless digital experiences with a versatile skill set spanning mobile interfaces to captivating web designs</p>
        <Link href={"#work"}>
        <button  className="flex justify-center items-center py-3 px-6 rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">Explore works</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
