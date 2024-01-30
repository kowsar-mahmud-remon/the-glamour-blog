import React from "react";
import Link from "next/link";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="">
        <Link href="/">Home</Link>
      </li>
      <li className="">
        <Link href="/blog">Blog</Link>
      </li>
    </React.Fragment>
  );

  const navbarShadow = {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div className="w-full bg-secondary sticky top-0 z-10" style={navbarShadow}>
      <div className="max-w-[1440px] mx-auto navbar flex justify-between py-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            href="/"
            className="cursor-pointer normal-case text-xl pl-1 flex items-center"
          >
            <h2 className="text-2xl font-semibold text-white">
              The Glamour Blog
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0 text-lg">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
