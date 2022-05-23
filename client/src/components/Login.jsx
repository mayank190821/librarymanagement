import React from "react";

function Login() {
  const handleSubmit=()=>{
    
  }
  return (
    <div style={{
        display:"flex",
        height:"100vh",
        width:"100vw",
        border:"2px solid green",
        justifyContent:"center",
        alignItems:"center"
    }}>
      <div
        style={{
          height: "52vh",
          width: "30vw",
          padding: "1rem",
          borderRadius:"15px",
          boxShadow:"rgb(153 153 153 / 50%) 0px 0px 9px 3px",
        }}
      >
        <h3 className="text-center">Login</h3>
        <div>
          <form >
            {/* <!-- Username input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlor="loginName">
                Username
              </label>
              <input
                type="text"
                id="loginName"
                name="loginName"
                className="form-control"
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                className="form-control"
              />
            </div>

            {/* <!-- Submit button --> */}
            <div className="d-flex justify-content-center">
              <button onClick={handleSubmit}type="submit" className="btn btn-primary btn-block mb-4 ">
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
    </div>
  );
}
export default Login;
