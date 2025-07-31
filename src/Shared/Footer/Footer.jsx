import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#f75d34]">CarZilla</h2>
          <p className="text-gray-400">
            CarZilla brings you the best car deals, trusted services, and expert advice to fuel your journey with confidence and style.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to="/shop">Browse Cars</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Help Center</li>
            <li>Warranty Policy</li>
            <li>Delivery & Returns</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-[#f75d34] text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} CarZilla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
