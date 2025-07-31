import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-removebg-preview.png"

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>

      <li>
        <NavLink to={'/shop'}>Shop</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
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
        <div className="flex gap-1 items-center">
          <img className="w-12" src={logo} alt="" />
          <Link to={'/'} className="font-bold text-3xl ">CarZilla</Link>
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
        <CiHeart size={28}></CiHeart>
        <BsCart4 size={25}></BsCart4>
        <CgProfile size={25}></CgProfile>
      </div>
    </div>
  );
};

export default Navbar;
