import Project from "@/components/Project";
import Projects from "@/components/Projects";
import Social from "@/components/social";
import { projects, social } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className=" w-full ">
      <div className=" pt-14 pb-2 px-5 flex flex-col justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#FFF]">
            About Me
          </h2>
          <p className="text-[#949494] text-lg">Little Brief About Myself</p>
          <hr className="border-[0.5px] border-[#818080b2] w-[100%] mt-10" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-[#FFF] flex-1">
            My mission is to make design easier.
          </h2>
          <p className="text-xl text-[#949494] font-[600] flex-1">
            Create custom Designs with kashan that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with KASHAN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without a problem.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col md:flex-row justify-start items-start gap-10">
            <Image src={"/assets/k.png"} width={400} height={500} alt="me" />
            <Image src={"/assets/k1.png"} width={800} height={500} alt="me" />
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/contact-me"} className="w-[150px]">
              <button className="w-full flex justify-center items-center py-3 px-6 rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">
                CONTACT ME
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={"/assets/f.png"} width={1000} height={200}  alt="projects"/>
            <div className="flex justify-center items-center gap-10 flex-wrap w-full">
          {social.map((social, index) => (
            <React.Fragment key={index} >
              <Social {...social} />
            </React.Fragment>
          ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
