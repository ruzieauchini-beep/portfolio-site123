import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      {/* Logo */}
      <div className="text-2xl font-bold">MyLogo</div>

      {/* Nav Links */}
      <nav className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
