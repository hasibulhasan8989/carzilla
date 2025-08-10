import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [passError, setPassError] = useState("");
  const { updateUser, signUp, setUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^.{6,}$/.test(password)) {
      return setPassError("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return setPassError(
        " Password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return setPassError(
        " Password must contain at least one lowercase letter."
      );
    }

    try {
      await signUp(email, password);
      await updateUser(name, photo);
      setUser({ ...user, displayName: name, photoURL: photo });

      setPassError("");
      form.reset();
      toast.success("Registration Successful");
      if (location.state) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration Unsuccessful")
    }

    setPassError("");

    console.log(name, photo, email, password);
  };

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

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="url"
              name="photo"
              placeholder="Display Photo URL"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f75d34]"
            />
            {passError && <p className="text-sm text-red-600">{passError}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-[#f75d34] text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login"  className="text-[#f75d34] underline font-medium">
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
