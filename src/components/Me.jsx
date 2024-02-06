import Image from "next/image";

const Me = () => {
  return (
    <div className=" w-full min-h-[90vh]">
      <div className=" my-10 px-10  flex flex-col gap-10  md:flex-row justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl md:text-5xl text-[#FFFFFF] font-[700]">
            Let’s get know about me closer
          </h2>
          <p className="text-[#A8A8A8] font-[400] text-lg">
            Kashan Mir, a dedicated UX/UI designer, brings a focus on creating
            seamless digital experiences. Based in Pakistan, his
            portfolio highlights a versatile skill set, encompassing everything
            from intuitive mobile interfaces to visually captivating web
            designs.
          </p>
        <button className="flex justify-center items-center py-3 px-6 w-max rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">Discover More About Me</button>

        </div>
        <div className="flex-1 flex justify-center items-center">
            <Image src={"/assets/me.png"} width={450} height={450} alt="me"/>
        </div>
      </div>
    </div>
  );
};

export default Me;
