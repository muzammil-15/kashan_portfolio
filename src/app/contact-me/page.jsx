import Form from "@/components/Form";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" w-full ">
      <div className=" pt-14 pb-2 px-5 flex flex-col justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#FFF]">
            Contact Me
          </h2>
          <p className="text-[#949494] text-lg">For Any Project Knock Us</p>
          <hr className="border-[0.5px] border-[#818080b2] w-[100%] mt-10" />
        </div>
        <Form/>
        <Image src={"/assets/book.png"} width={1100} height={400} alt="macbook" className="mb-10"/>
      </div>
    </div>
  );
};

export default Contact;
