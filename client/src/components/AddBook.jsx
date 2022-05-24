import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
      bookName:"",
      authorName:"",
      bookPrice:""
  });
  const handleAdd = async (e) => {
    e.preventDefault();
    const { bookName, authorName, bookPrice } = book;
    localStorage.setItem("books", JSON.stringify(book));
    const {status, data } = await axios.post("/add/book", {
        bookName,
        authorName,
        bookPrice
    });
    if (status) {
      toast.success("Book Successfully Added", toastOptions);
      navigate("/home");
    } else {
      toast.error("Something went wrong", toastOptions);
    }
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
  };
  const handleClose = () => {
    navigate(-1);
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.7)",
        position: "absolute",
        top: "0",
      }}
    >
      <span
        style={{
          position: "absolute",
          right: "2rem",
          top: "1.5rem",
          fontSize: "30px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        <i class="fas fa-times"></i>
      </span>
      <div
        style={{
          height: "60vh",
          width: "30vw",
          padding: "1rem",
          background: "white",
          borderRadius: "15px",
        }}
      >
        <h3 className="text-center">Add Book</h3>
        <div>
          <form>
            {/* <!-- Username input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlor="BookName">
                Book Name
              </label>
              <input
                type="text"
                id="BookName"
                name="bookName"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlor="AuthorName">
                Author Name
              </label>
              <input
                type="text"
                id="AuthorName"
                name="authorName"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlor="price">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="bookPrice"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                onClick={handleAdd}
                className="btn btn-primary btn-block mb-4 "
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default AddBook;
