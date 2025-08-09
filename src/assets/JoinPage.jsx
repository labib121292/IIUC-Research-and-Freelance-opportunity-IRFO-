import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFreelanceContext } from "./FreelanceContext"; // 🔑 Auth context

export default function JoinPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsAuthenticated, setUserRole: setContextRole } = useFreelanceContext();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive sizing
  const getContainerStyles = () => {
    // Base styles that apply to all screen sizes
    const baseStyles = {
      height: "auto",
      minHeight: "550px",
    };

    // Adjust width based on screen size
    if (windowWidth < 640) {
      // Small mobile
      return {
        ...baseStyles,
        maxWidth: "90%",
        sidePanelWidth: "40%"
      };
    } else if (windowWidth < 768) {
      // Mobile
      return {
        ...baseStyles,
        maxWidth: "90%",
        sidePanelWidth: "40%"
      };
    } else if (windowWidth < 1024) {
      // Tablet
      return {
        ...baseStyles,
        maxWidth: "80%",
        sidePanelWidth: "40%"
      };
    } else {
      // Desktop
      return {
        ...baseStyles,
        maxWidth: "680px",
        sidePanelWidth: "40%"
      };
    }
  };

  const styles = getContainerStyles();

  const handleLogin = async () => {
    if (!email || !password || !userRole) {
      setError("Please fill all fields and select a role.");
      return;
    }
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: userRole }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsAuthenticated(true);         // ✅ Mark as authenticated
        setContextRole(userRole);         // ✅ Store role globally
        navigate(`/${userRole}`);         // ✅ Redirect based on role
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Server error, please try again later.");
    }
  };

  const handleSignUp = async () => {
    if (!name || !email || !password || !userRole) {
      setError("Please fill all fields and select a role.");
      return;
    }
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role: userRole }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully! Please login.");
        setIsSignUp(false);
        setName("");
        setEmail("");
        setPassword("");
        setUserRole("");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      setError("Server error, please try again later.");
    }
  };

  const handleSubmit = () => {
    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  const RoleDropdown = () => (
    <label className="block mb-4 text-black">
      <span className="uppercase text-xs tracking-wide">Role</span>
      <select
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
        className="mt-2 block w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 box-border text-black"
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
    </label>
  );

  const TextInput = ({ label, type, value, setValue }) => (
    <label className="block mb-4 text-black">
      <span className="uppercase text-xs tracking-wide">{label}</span>
      <input
        type={type}
        placeholder={`Enter your ${label.toLowerCase()}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 block w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 box-border text-black"
      />
    </label>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 p-4 md:p-14">
      {/* Outer container with responsive width */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl flex overflow-hidden w-full"
        style={{ maxWidth: styles.maxWidth, minHeight: styles.minHeight }}
      >
        {/* Sliding container width adjusts based on container size */}
        <div
          className={`flex w-[200%] transition-transform duration-1000 ease-in-out ${
            isSignUp ? "-translate-x-1/2" : "translate-x-[48%]"
          }`}
        >
          {/* Sign In Form */}
          <form className="w-1/2 p-6 sm:p-8 box-border flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-blue-900">
              Welcome Back
            </h2>
            {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
            <TextInput label="Email" type="email" value={email} setValue={setEmail} />
            <TextInput label="Password" type="password" value={password} setValue={setPassword} />
            <RoleDropdown />
            <p className="text-xs text-right text-blue-700 cursor-pointer hover:underline mb-4 sm:mb-6">
              Forgot password?
            </p>
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-blue-700 text-white py-2 sm:py-3 rounded-full w-full font-semibold hover:bg-blue-800 transition"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Form */}
          <form className="w-1/2 p-6 sm:p-8 box-border flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-pink-700">
              Create Account
            </h2>
            {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
            <TextInput label="Name" type="text" value={name} setValue={setName} />
            <TextInput label="Email" type="email" value={email} setValue={setEmail} />
            <TextInput label="Password" type="password" value={password} setValue={setPassword} />
            <RoleDropdown />
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-pink-700 text-white py-2 sm:py-3 rounded-full w-full font-semibold hover:bg-pink-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Side panel - always visible, responsive width */}
        <div
          className={`absolute top-0 h-full text-white px-3 sm:px-6 py-10 sm:py-20 flex flex-col justify-center items-center transition-transform duration-700 ease-in-out bg-gradient-to-tl from-purple-900 via-blue-900 to-pink-900 ${
            isSignUp ? "translate-x-0 right-0" : "left-0"
          }`}
          style={{ width: styles.sidePanelWidth }}
        >
          {!isSignUp ? (
            <>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                Don't have an account?
              </h3>
              <p className="text-xs sm:text-sm mb-6 sm:mb-10 text-center">
                Sign up and start collaborating today!
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white rounded-full px-4 sm:px-6 py-1 sm:py-2 uppercase tracking-wider hover:bg-white hover:text-purple-900 transition text-xs sm:text-sm"
                type="button"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                Already have an account?
              </h3>
              <p className="text-xs sm:text-sm mb-6 sm:mb-10 text-center">
                Sign in and continue your journey!
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white rounded-full px-4 sm:px-6 py-1 sm:py-2 uppercase tracking-wider hover:bg-white hover:text-purple-900 transition text-xs sm:text-sm"
                type="button"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}