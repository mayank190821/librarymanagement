import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Register() {
  function fin(e) {
    e.target.nextElementSibling.style.display = "block";
  }
  function fout(e) {
    e.target.nextElementSibling.style.display = "none";
  }
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
  };
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword:""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const reUser = /^[a-zA-Z0-9]+.{3,20}$/;
  const reName = /^[a-zA-Z]+.{3,20}$/;
  let rePassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  const handleValidation = () => {
    const { name, username, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      console.log(user,"yha hu")
      toast.error("Password and confirm password should be same", toastOptions);
      return false;
    } else if (!rePassword.test(password)) {
      toast.error("Must use A-Z, a-z, 0-9 and !@#$%^&*()", toastOptions);
    } else if (!reUser.test(username)) {
      toast.error("Use correct Username.", toastOptions);
      return false;
    } else if (!reName.test(name)) {
      toast.error("Use correct name.", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { name, username, email, password,confirmPassword } = user;
      console.log(name,"is par");
      const { data } = await axios.post("/api/register", {
        name,
        username,
        email,
        password,
      });
      console.log(data)
      if(data.status){
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/login");
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          padding: "1rem",
          minWidth: "320px",
          width: "30vw",
          borderRadius: "15px",
          boxShadow: "rgb(153 153 153 / 50%) 0px 0px 9px 3px",
        }}
      >
        <div className="tab-pane active" id="pills-register">
          <h3 className="text-center">Register</h3>
          <form>
            {/* <!-- Name input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlfor="name">
                Name
              </label>
              <input
                type="text"
                id="registerName"
                onFocus={fin}
                onBlur={fout}
                name="name"
                className="form-control"
                onChange={handleChange}
                required
              />
              <div
                className="validate"
                id="nameValid"
                style={{ display: "none" }}
              >
                Use Alphabet Only
              </div>
            </div>

            {/* <!-- Username input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlfor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                onFocus={fin}
                onBlur={fout}
                name="username"
                className="form-control"
                onChange={handleChange}
                required
              />
              <div
                className="validate"
                id="usernameValid"
                style={{ display: "none" }}
              >
                Use aplhabets and numbers only
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlfor="email">
                Email
              </label>
              <input
                type="email"
                id="registerEmail"
                onFocus={fin}
                onBlur={fout}
                name="email"
                className="form-control"
                onChange={handleChange}
                required
              />
              <div
                className="validate"
                id="emailValid"
                style={{ display: "none" }}
              >
                Enter valid email Id Only
              </div>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" for="registerPassword">
                Password
              </label>
              <input
                type="password"
                id="password"
                onFocus={fin}
                onBlur={fout}
                name="password"
                onChange={handleChange}
                className="form-control"
                required
              />
              <div
                className="validate"
                id="passValid"
                style={{ display: "none" }}
              >
                Must use A-Z, a-z, 0-9, and special character like
                @,#,$,$,%,^,&,*,(,). Atleast one of each type
              </div>
            </div>

            {/* <!-- Repeat Password input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" for="registerRepeatPassword">
                Repeat password
              </label>
              <input
                type="password"
                id="confirmPassword"
                onFocus={fin}
                // onBlur={fout}
                name="confirmPassword"
                onChange={handleChange}
                className="form-control"
                required
              />
              <div
                className="validate"
                id="rePassValid"
                style={{ display: "none" }}
              >
                Must use A-Z, a-z, 0-9, and special character like
                @,#,$,$,%,^,&,*,(,). Atleast one of each type
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary btn-block mb-3"
              >
                Sign up
              </button>
            </div>
            {/* <!-- Login Button --> */}
            <div className="text-center">
              <p>
                Already a member? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default Register;
