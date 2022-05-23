import React from "react";
import { useNavigate } from "react-router-dom";
function AddBook() {
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate("/home")
    };
    const handleClose=()=>{
        navigate(-1)
  }
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.7)",
        position:"absolute",
        top:"0"
      }}
    >
      <span
        style={{
          position: "absolute",
          right: "2rem",
          top: "1.5rem",
          fontSize:"30px",
          color:"white",
          cursor:"pointer"
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
                name="BookName"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlor="AuthorName">
                Author Name
              </label>
              <input
                type="text"
                id="AuthorName"
                name="AuthorName"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlor="price">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
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
    </div>
  );
}

export default AddBook;
