"use client"
import { project, projects } from "@/lib/utils";
import Image from "next/image";
import React, { useRef } from "react";
import Project from "./Project";

const Projects = () => {
  const ref = useRef("work")
  return (
    <div className="mt-20 md:mt-5 w-full min-h-[90vh]" id="work" ref={ref}>
      <div className=" my-10 px-10  flex flex-col gap-10 justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image src={"/assets/projects.png"} width={1000} height={200}  alt="projects"/>
          <h2 className="text-2xl sm:text-3xl mt-[-40px] font-[500] md:font-[700] md:text-5xl text-[#FFFFFF] md:mt-[-70px]">
            My Projects Highlight
          </h2>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap w-full">
          {projects.map((project, index) => (
            <React.Fragment key={index} >
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
