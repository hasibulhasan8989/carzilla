import { CiHeart } from "react-icons/ci";
import { FaCarSide, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const { cartItems } = useCart();

  const list = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <FaCarSide className="text-[#f75d34]" size={28} />
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide text-gray-800 hover:text-[#f75d34] transition"
          >
            Car<span className="text-[#f75d34]">Zilla</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-12 font-semibold menu-horizontal px-1">
          {list}
        </ul>
      </div>
      <div
        className="navbar-end gap-6 lg:gap-10 mr-4 lg:mr-12 
      "
      >
        <Link className="relative" to={"/cart"}>
          {" "}
          <span
            className="absolute px-2.5
        rounded-full bottom-3 left-4 bg-red-500 text-white   "
          >
            {cartItems.length}
          </span>{" "}
          <BsCart4 size={25}></BsCart4>
        </Link>
        {user ? (
          <>
            {user.photoURL ? (
              <img
                title={user.displayName}
                className="w-10 h-10 rounded-full avatar cursor-pointer  border-gray-500"
                src={user.photoURL}
                alt={user.displayName || "User"}
              />
            ) : (
              <CgProfile size={25} />
            )}
            <button
              onClick={() => signOutUser()}
              className="font-bold cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <CgProfile size={25}></CgProfile>{" "}
            <Link to={"/login"} className="font-bold">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
