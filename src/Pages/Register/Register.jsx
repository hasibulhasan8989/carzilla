import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 text-gray-900 px-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Form Section */}
        <div className="w-full p-8 sm:p-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-[#f75d34]">CarZilla</h2>
          </div>

          <h2 className="text-3xl font-bold text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Register to join the CarZilla community
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="url"
              placeholder="Display Photo URL"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#f75d34] text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#f75d34] underline font-medium">
              Login
            </Link>
          </p>

          <p className="text-xs text-center text-gray-400 mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="underline text-[#f75d34]">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-[#f75d34]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
