import { FaGoogle } from "react-icons/fa";
import loginImage from '../../assets/logo/login.jpg'
import { Link } from "react-router-dom";


const Login = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 text-gray-900">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-xl flex flex-col lg:flex-row overflow-hidden transition-all duration-500">
        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          <div className="flex justify-center">
             <h2 className="text-2xl font-bold  text-[#f75d34]">CarZilla</h2>
          </div>

          <h2 className="text-3xl font-bold text-center mt-8 mb-4">Welcome Back!</h2>
          <p className="text-center text-sm text-gray-500">Sign in to your CarZilla account</p>

          {/* Google Sign-In */}
          <button className="mt-6 w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 hover:shadow-lg transition">
            <FaGoogle></FaGoogle>
            <span>Sign in with Google</span>
          </button>

          <div className="my-8 relative">
            <hr className="border-gray-300" />
            <span className="absolute bg-white px-3 text-sm text-gray-500 left-1/2 -translate-x-1/2 -top-2.5">
              Or sign in with email
            </span>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border border-gray-200 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34] transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-200 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34] transition"
            />
            <button
              type="submit"
              className="w-full bg-[#f75d34] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-1">Don't Have Account : <Link to={'/register'} className="underline text-[#f75d34]">Register</Link></p>
             
          <p className="text-xs text-gray-500 text-center mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="underline text-[#f75d34]">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="underline text-[#f75d34]">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#f75d34]/10">
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                `url(${loginImage})`,
            }}
          />
        </div>
      </div>
    </div>
    );
};

export default Login;