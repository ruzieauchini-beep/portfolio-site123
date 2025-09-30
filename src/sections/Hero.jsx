import heroImg from "../assets/hero-image.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-end justify-between px-8 py-16 bg-gray-50">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I’m <span className="text-blue-600">Shikhar</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          I’m a frontend developer passionate about building modern, responsive web apps.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src={heroImg}
          alt="Shikhar working"
          className="w-80 md:w-[400px] rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
