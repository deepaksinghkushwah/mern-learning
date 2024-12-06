"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FcList } from "react-icons/fc";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" bg-blue-700 text-white px-4 py-2 max-w-full">
      {/** Desktop menu */}
      <div className="md:flex hidden justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex gap-2">
          <li>
            <Link className={`${pathName == "/" ? "active" : ""}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName == "/properties" ? "active" : ""}`}
              href="/properties"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName == "/login" ? "active" : ""}`}
              href="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/** mobile menu */}

      <div className="flex justify-between items-center md:hidden">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex">
          <FcList onClick={toggleShowMenu} />
          <ul
            className={`absolute right-5 top-10 bg-gradient-to-t from-slate-400 to-slate-100 px-4 py-2 text-black rounded shadow ${
              showMenu ? "block" : "hidden"
            } `}
          >
            <li>
              <Link className={`${pathName == "/" ? "m-active" : ""}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName == "/properties" ? "m-active" : ""}`}
                href="/properties"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName == "/login" ? "m-active" : ""}`}
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
