import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-12 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-serif">
          {["Home", "Features", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:underline hover:text-[#8F6BFF] underline-offset-8 decoration-2 decoration-[#8F6BFF] transition font-bold"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5">
          <button className="border px-5 py-2 rounded-xl transition font-semibold hover:border-[#8F6BFF]">
            Log In
          </button>

          <button className="bg-[#8F6BFF] hover:bg-[#644AB2] px-5 py-2 rounded-xl transition font-semibold">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-800 p-4 rounded-xl">
          
          <a href="#" className="hover:text-[#8F6BFF] font-semibold">
            Home
          </a>

          <a href="#" className="hover:text-[#8F6BFF] font-semibold">
            Features
          </a>

          <a href="#" className="hover:text-[#8F6BFF] font-semibold">
            Pricing
          </a>

          <a href="#" className="hover:text-[#8F6BFF] font-semibold">
            Contact
          </a>

          <div className="flex flex-col gap-3 pt-2">
            <button className="border py-2 rounded-xl font-semibold">
              Log In
            </button>

            <button className="bg-[#8F6BFF] hover:bg-[#644AB2] py-2 rounded-xl font-semibold">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;