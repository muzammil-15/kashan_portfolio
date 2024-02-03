"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2 seconds in this case)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="w-full">
      {loading ? (
        // <div className='w-full h-[90vh] flex justify-center items-center '>
        //   <Image src={"/assets/logo.png"} width={100} height={100} alt='loading...' className="animate-spin"/>
        // </div>
        <div className='w-full h-[90vh] flex justify-center items-center '>
         <div
        className="inline-block h-10 w-10 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
        </div>
      ) : (
        <>
          <Hero />
          <Me />
          <Projects />
          <Services />
          <Testimonial />
        </>
      )}
    </main>
  );
};

export default Home;
