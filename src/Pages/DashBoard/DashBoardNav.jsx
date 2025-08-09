import { FaCarSide } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const DashBoardNav = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300
    ${isActive ? 'bg-[#f75d34] text-white shadow-lg' : 'text-gray-800 hover:bg-[#f75d34]/20 hover:text-[#f75d34]'}`;

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300 flex flex-col p-6 shadow-lg">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 mb-8">
        <FaCarSide className="text-[#f75d34]" size={32} />
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-gray-900 hover:text-[#f75d34] transition-colors"
        >
          Car<span className="text-[#f75d34]">Zilla</span>
        </Link>
      </div>

      {/* Admin Section */}
      <h3 className="uppercase text-xs font-bold text-gray-500 mb-2">Admin</h3>
      <nav className="flex flex-col space-y-2 mb-8">
        <NavLink to="/dashboard" end className={linkClasses}>
          <span>🏠</span>
          <span>Admin Home</span>
        </NavLink>
        <NavLink to="/dashboard/add-car" className={linkClasses}>
          <span>➕</span>
          <span>Add Car</span>
        </NavLink>
        <NavLink to="/dashboard/manage-cars" className={linkClasses}>
          <span>📋</span>
          <span>Manage Cars</span>
        </NavLink>
        <NavLink to="/dashboard/manage-bookings" className={linkClasses}>
          <span>📅</span>
          <span>Manage Bookings</span>
        </NavLink>
        
      </nav>

      {/* Divider */}
      <hr className="border-gray-400 opacity-50 mb-6" />

      {/* User Section */}
      <h3 className="uppercase text-xs font-bold text-gray-500 mb-2">User</h3>
      <nav className="flex flex-col space-y-2">
        <NavLink to="/" end className={linkClasses}>
          <span>🏠</span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/car-menu" className={linkClasses}>
          <span>📋</span>
          <span>Car Menu</span>
        </NavLink>
        <NavLink to="/shop" className={linkClasses}>
          <span>🛒</span>
          <span>Shop</span>
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          <span>✉️</span>
          <span>Contact</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default DashBoardNav;
