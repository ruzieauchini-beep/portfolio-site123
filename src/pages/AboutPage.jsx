import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import girl from "../assets/Girl.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-4xl md:text-7xl font-bold tracking-wider">
            Portfolio Template
          </h1>
          <div className="w-full h-px bg-white"></div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-relaxed">
            Export your designs to HTML code
          </h2>

          {/* Icons row */}
          <div className="flex flex-row flex-wrap gap-8 mt-8">
            <img src={icon1} alt="icon1" className="w-12 h-12" />
            <img src={icon2} alt="icon2" className="w-12 h-12" />
            <img src={icon3} alt="icon3" className="w-12 h-12" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col bg-white text-black rounded-lg shadow-lg w-full md:w-[600px] h-auto p-8 justify-between gap-6">
          <p className="text-xs font-semibold">Branding | Image making</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Visual <br /> Designer
          </h1>
          <p className="text-sm font-light">
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          {/* Contact button */}
          <Link
            to="/contact"
            className="relative flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-black to-gray-700 text-white font-semibold overflow-hidden group transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute right-4 py-2 z-10 animate-bounce">→</span>
            {/* subtle shine effect */}
            <span className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </Link>

          {/* Right image */}
          <div className="flex justify-center mt-6">
            <img
              src={girl}
              alt="Designer illustration"
              className="w-48 md:w-60 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
