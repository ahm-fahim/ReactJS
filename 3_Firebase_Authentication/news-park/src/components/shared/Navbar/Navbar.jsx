import { Link } from "react-router-dom";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useContext} from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const navLink = [
    <li key="home">
      <Link to="/">Home</Link>
    </li>,
    <li key="about">
      <Link to="/about">About</Link>
    </li>,
    <li key="feedback">
      <Link to="/feedback">Feedback</Link>
    </li>,
  ];

  return (
    <div>
      <div className="navbar bg-base-100 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-2 ">
          <RiAccountPinCircleFill className="text-gray-900 text-3xl" />
          {user ? (
            <Link
              onClick={handleLogOut}
              className="bg-gray-900 px-5 text-white rounded-md py-0.5 "
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-gray-900 px-5 text-white rounded-md py-0.5 "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
