import girl from "../assets/Girl.png";
import { Link } from "react-router-dom";

export default function Column2() {
  return (
    <div className="flex flex-col ml-[20px] md:ml-[124px]">
      <div className="flex flex-col md:flex-row bg-white w-full md:w-[617px] h-auto md:h-[320px] mt-[40px] md:mt-[80px] items-center justify-between px-6 md:px-[75.11px] py-6 md:py-[26.45px] rounded-lg">
        
        {/* Left text content */}
        <div className="text-black w-full md:w-[200px] flex flex-col justify-between gap-4">
          <p className="text-xs md:text-sm font-semibold">
            Branding | Image making
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">
            Visual <br /> Designer
          </h1>
          <p className="text-[10px] md:text-sm font-light">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>

          {/* Contact button */}
          <Link
            to="/contact"
            className="relative flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-black to-gray-700 text-white font-semibold overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute right-4 py-2 z-5 animate-bounce">→</span>
            {/* subtle shine effect */}
            <span className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </Link>
        </div>

        {/* Right image */}
        <div className="mt-6 md:mt-0 flex justify-center">
          <img src={girl} alt="test" className="w-[150px] md:w-[200px]" />
        </div>
      </div>
    </div>
  );
}
