import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const reUser = /^[a-zA-Z0-9]+.{3,20}$/;
  const rePassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
  };
  useEffect(() => {
    if (localStorage.getItem("user") || localStorage.getItem("admin")) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  const handleValidation = (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (!rePassword.test(password)) {
      toast.error("Must use A-Z, a-z, 0-9 and !@#$%^&*()", toastOptions);
    } else if (!reUser.test(username)) {
      toast.error("Use correct Username.", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, password } = user;
      const { data } = await axios.post("/api/login", {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        border: "2px solid green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "52vh",
          width: "30vw",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "rgb(153 153 153 / 50%) 0px 0px 9px 3px",
        }}
      >
        <h3 className="text-center">Login</h3>
        <div>
          <form>
            {/* <!-- Username input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlor="loginName">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                onClick={handleChange}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onClick={handleChange}
              />
            </div>

            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary btn-block mb-4 "
              >
                Sign in
              </button>
            </div>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>
                Not a member? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
export default Login;
