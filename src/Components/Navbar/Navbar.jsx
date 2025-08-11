import { CiHeart } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";

import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import GetBooking from "../../Hooks/getBooking";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const { cartItems } = useCart();
  const { bookings } = GetBooking();

  const list = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#f75d34] font-bold border-b-2 border-[#f75d34]"
              : "hover:text-[#f75d34] transition-colors duration-300 font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-[#f75d34] font-bold border-b-2 border-[#f75d34]"
              : "hover:text-[#f75d34] transition-colors duration-300 font-semibold"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#f75d34] font-bold border-b-2 border-[#f75d34]"
              : "hover:text-[#f75d34] transition-colors duration-300 font-semibold"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#f75d34] font-bold border-b-2 border-[#f75d34]"
              : "hover:text-[#f75d34] transition-colors duration-300 font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#f75d34] font-bold border-b-2 border-[#f75d34]"
              : "hover:text-[#f75d34] transition-colors duration-300 font-semibold"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white  sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-4 shadow-lg bg-white rounded-box w-52 font-semibold"
          >
            {list}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 select-none cursor-pointer"
          aria-label="CarZilla Home"
        >
          <FaCarSide className="text-[#f75d34]" size={30} />
          <span className="text-3xl font-extrabold tracking-tight text-gray-900 hover:text-[#f75d34] transition-colors duration-300">
            Car<span className="text-[#f75d34]">Zilla</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{list}</ul>
      </div>

      <div className="navbar-end flex items-center gap-6 lg:gap-10 mr-4 lg:mr-12">
        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative group" aria-label="View Cart">
          <BsCart4 size={26} className="text-gray-700 hover:text-[#f75d34] transition" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold shadow-lg animate-pulse">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Test Drive Icon with Badge */}
        <Link
          to="/testDrive"
          className="relative group"
          aria-label="View Test Drive Bookings"
        >
          <GiSteeringWheel size={28} className="text-gray-700 hover:text-[#f75d34] transition" />
          {bookings.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold shadow-lg animate-pulse">
              {bookings.length}
            </span>
          )}
        </Link>

        {/* User Profile / Login */}
        {user ? (
          <div className="flex items-center gap-4">
            {user.photoURL ? (
              <img
                title={user.displayName || "User"}
                className="w-10 h-10 rounded-full border-2 border-[#f75d34] cursor-pointer transition-transform hover:scale-110 shadow-md"
                src={user.photoURL}
                alt={user.displayName || "User"}
              />
            ) : (
              <CgProfile
                size={28}
                className="text-gray-700 hover:text-[#f75d34] cursor-pointer transition"
                title={user.displayName || "User"}
              />
            )}

            <button
              onClick={signOutUser}
              className="bg-[#f75d34] cursor-pointer text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#d94824] transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 text-[#f75d34] font-semibold hover:text-[#d94824] transition duration-300"
          >
            <CgProfile size={28} />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
