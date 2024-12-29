import { useState } from "react";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";
import { useDispatch } from "react-redux";
import { hideLoginModal, login } from "../reducers/authSlice";
import { loginFailedToast, loginSuccessToast } from "../toasts/toast";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const [passViewState, setPassViewState] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePassState = (e) => {
    e.preventDefault();
    setPassViewState((prevState) => !prevState);
  };

  // Handle input changes
  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  // Submit login form
  const getLoginData = async (e) => {
    e.preventDefault();

    if (loginDetails.email && loginDetails.password) {
      setLoading(true);

      try {
        // Send login request
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/login`,
          {
            email: loginDetails.email,
            password: loginDetails.password,
          }
        );

        const { token, user } = response.data;

        // Save token and user data to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Update Redux state
        dispatch(login(user));
        dispatch(hideLoginModal());

        loginSuccessToast("Login successful!");

        // Redirect based on role
        console.log("User Role:", user.role);
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Login Error:", err.response?.data || err.message);
        loginFailedToast(
          err.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setLoading(false);
        setLoginDetails({ email: "", password: "" });
      }
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={getLoginData}>
        <div className="signup-form-heading">
          <h2 className="signup-form-heading-text">Sign in to SilverScreen</h2>
          <button
            type="button"
            className="btn-form-exit"
            onClick={() => dispatch(hideLoginModal())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="form-icon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>

        <div className="signup-form-body">
          <div className="signup-form-category">
            <label>
              Email: <span>*</span>
            </label>
            <input
              name="email"
              type="email"
              disabled={loading}
              value={loginDetails.email}
              placeholder="Enter Email"
              onChange={handleLoginDetails}
              required
            />
          </div>

          <div className="signup-form-category">
            <label>
              Enter Your Password: <span>*</span>
            </label>
            <div className="input-password">
              <input
                name="password"
                disabled={loading}
                value={loginDetails.password}
                type={passViewState ? "text" : "password"}
                placeholder="Enter Password"
                onChange={handleLoginDetails}
                required
              />
              <button
                type="button"
                className="pass-icon-btn"
                onClick={togglePassState}
              >
                {passViewState ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-reg" disabled={loading}>
            {loading ? <BarLoader color="#e6e6e8" /> : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};
