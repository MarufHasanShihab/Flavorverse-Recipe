import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex items-center justify-between w-fll py-2 md:py-3 px-4 md:px-20">
        <Link to="/" className="flex items-center text-white text-lg">
          <img
            src={logo}
            className="hidden md:block w-8 h-8 lg:w-15 lg:h-14"
            alt="nav_logo"
          />
          <h3>
            Flavor<span>verse</span>
          </h3>
        </Link>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Explore</Link>
          </li>
          <li>
            <Link>Favorites</Link>
          </li>
        </ul>
        <Button
          title={"Sign In"}
          containerStyle={
            "hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
          }
        />
        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden text-xl text-white">
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      {/* Nav Item for mobile devices */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } flex-col w-full bg-black px-4 pt-16 pb-10 text-white gap-6 text-[16px]`}>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Explore</Link>
        </li>
        <li>
          <Link>Favorites</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
