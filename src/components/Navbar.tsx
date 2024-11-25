import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/assets/android-chrome-192x192.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoYoutube, IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaClock, FaSquareInstagram } from "react-icons/fa6";
import { navLinks } from "./utils/Router";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-500 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 overflow-hidden">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8" alt="Logo" />
          <span className=" text-white text-2xl font-semibold whitespace-nowrap">
            arijus Techin
          </span>
        </a>
        {/** Desktop menu */}
        <div className="hidden md:flex gap-3 uppercase text-slate-100">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-1 border border-slate-400 rounded-md"
                  : "px-2 py-1 border border-slate-500 hover:border-slate-400 rounded-md"
              }
              key={link.title}
              to={link.href}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div onClick={toggleMenu} className="md:hidden text-slate-200">
          {menuOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>

        {/* Mobile menu */}
        <div
          className={
            menuOpen
              ? "md:hidden w-full h-full absolute right-0 top-16 transition-all duration-500 ease-in-out bg-slate-500"
              : "md:hidden overflow-hidden w-0 h-full absolute right-0 top-16 transition-all duration-500 ease-in-out bg-slate-500"
          }
        >
          <div className="text-slate-100 bg-slate-500 w-full flex flex-col gap-2 max-w-[80%] mx-auto">
            <div className="flex gap-2 border-b border-slate-300 mb-3 text-sm py-2 mt-5">
              <FaClock size={20} /> 8:00 - 17:00
            </div>
            {navLinks.map((link, idx) => (
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive
                    ? "px-2 py-1 border border-slate-400 rounded-md"
                    : "px-2 py-1 border border-slate-500 hover:border-slate-400 rounded-md"
                }
                to={link.href}
                key={link.title + idx}
              >
                {link.title}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 items-center justify-center border-t border-slate-300 mt-2 py-2">
              <p className="text-sm">Raskite mus kažkokiuose tinkluose</p>
              <div className="flex gap-2">
                <FaFacebook size={24} />
                <FaSquareInstagram size={24} />
                <IoLogoYoutube size={26} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
