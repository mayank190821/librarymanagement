import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("user")
    navigate("/login")
  }
  const image =
    "https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif";
  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand mb-0 h1">Welcome, To Library</span>
        <span style={{ color: "white" }}>
          Hi,
          <img src={image} alt="hi" style={{ width: "30px" }} />
          <span style={{ fontSize: "20px" }} className="me-1 ms-1">
            {/* <b>{{request.user.first_name}}</b> */}
          </span>
          <button
            className="logout ms-2 pe-2 pt-1 pb-1 ps-2"
            style={{
              borderRadius: "3px",
              color: "white",
              outline: "none",
              border: "none",
              backgroundColor: "#0078cd",
            }}
          >
            <a
              onClick={handleLogout}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
                width: "inherit",
                height: "inherit",
              }}
            >
              Logout
            </a>
          </button>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
