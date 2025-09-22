import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

export default function Column1() {
  return (
    <div className="flex flex-col ml-[20px] md:ml-[80px]">
      {/* Heading */}
      <h1 className="text-white text-[40px] md:text-[128px] font-bold tracking-wider mt-[40px] md:mt-[80px] w-full md:w-[430px]">
        Portfolio Template
      </h1>
      <div className="bg-white mt-[30px] md:mt-[60px] h-[1px] w-full md:w-[430px]"></div>

      {/* Subheading */}
      <h2 className="text-white text-[20px] md:text-[64px] font-semibold leading-relaxed mt-[40px] md:mt-[70px] w-full md:w-[458px]">
        Export your designs to HTML code
      </h2>

      {/* Icons row */}
      <div className="flex flex-row gap-[20px] md:gap-[32px] mt-[60px] md:mt-[136px] flex-wrap">
        <img src={icon1} alt="icon1" className="w-[32px] md:w-[60px]" />
        <img src={icon2} alt="icon2" className="w-[32px] md:w-[60px]" />
        <img src={icon3} alt="icon3" className="w-[32px] md:w-[60px]" />
      </div>
    </div>
  );
}
