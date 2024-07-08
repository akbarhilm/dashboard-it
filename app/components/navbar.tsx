"use client";

import { useState } from "react";
import {
  FaAngleLeft,
  FaChartPie,
  FaDiagramProject,
  FaComputer,
} from "react-icons/fa6";
import { FaHome, FaPoll } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="max-lg:hidden z-50">
        <div
          className={`${
            open ? "w-72" : "w-24"
          } transition-all duration-500 relative`}
        >
          <div
            className={`bg-transparentwhite50 backdrop-blur-md fixed h-full p-8 pt-8 border-r-2 border-gray-100 ${
              open ? "w-72" : "w-24"
            } transition-all duration-500`}
          >
            <FaAngleLeft
              className={`drop-shadow p-1.5 bg-gray-50 
              text-gray-400 hover:text-gray-800 transition-all duration-500 text-2xl font-bold rounded-full 
              absolute top-8 z-50 cursor-pointer -right-3 ${
                !open && "rotate-180"
              } `}
              onClick={() => setOpen(!open)}
            />
            <div className="inline-flex">
              <FaChartPie
                className={`text-gray-800 text-2xl cursor-pointer block float-left duration-500 ${
                  open && "rotate-[360deg]"
                } ${!open ? "mr-0" : "mr-4"}`}
              />
              <h3
                className={`text-gray-800  font-bold origin-left duration-300 ${
                  !open && "-scale-x-0"
                }`}
              >
                Dashboard
              </h3>
            </div>
            <ul className="pt-4">
              <li>
                <Link
                  href="/"
                  className={`hover:text-gray-800 active:text-gray-800 cursor-pointer py-2 duration-500 flex items-center gap-x-4 active ${
                    !open && "px-1"
                  }`}
                >
                  <span>
                    <FaHome />
                  </span>
                  <span
                    className={`origin-left duration-300 ${
                      !open && "-scale-x-0"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`hover:text-gray-800 active:text-gray-800 cursor-pointer py-2 duration-500 flex items-center gap-x-4 active ${
                    !open && "px-1"
                  }`}
                >
                  <span>
                    <FaPoll />
                  </span>
                  <span
                    className={`origin-left duration-300 ${
                      !open && "-scale-x-0"
                    }`}
                  >
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className={`hover:text-gray-800 active:text-gray-800 cursor-pointer py-2 duration-500 flex items-center gap-x-4 active ${
                    !open && "px-1"
                  }`}
                >
                  <span>
                    <FaComputer />
                  </span>
                  <span
                    className={`origin-left duration-300 ${
                      !open && "-scale-x-0"
                    }`}
                  >
                    Resources
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
