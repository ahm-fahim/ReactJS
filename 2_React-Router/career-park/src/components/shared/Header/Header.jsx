import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="hover:text-success">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-success">
        <NavLink to="/statistic">Statistic</NavLink>
      </li>
      <li className="hover:text-success">
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
      </li>
      <li className="hover:text-success">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-green-100 lg:px-16 text-black">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-xl font-anton">Career Park</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm btn-success mx-2">Start Applying</a>
        </div>

        <div className="dropdown dropdown-left lg:hidden">
          <div tabIndex={0} role="button" className="m-1">
            <CgMenuGridO className="text-4xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
