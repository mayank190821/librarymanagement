import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddBook from "../components/AddBook";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") || localStorage.getItem("admin")) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
  function handleSubmit() {
    navigate("./addBook");
  }
  return (
    <>
      <Navbar />
      {JSON.parse(localStorage.getItem("user")).role === "admin" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{ margin: "1.5rem" }}>
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                borderRadius: "3px",
                color: "white",
                outline: "none",
                border: "none",
                backgroundColor: "#0078cd",
                padding: "0.4rem",
              }}
            >
              {" "}
              <i class="fas fa-plus"></i> Add Book
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <Table />
      <Routes>
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default HomePage;
