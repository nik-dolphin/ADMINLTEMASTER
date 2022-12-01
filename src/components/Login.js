import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/redux-action";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      const localData = JSON.parse(localStorage.getItem("registrationDataAdminLTE"));
      // eslint-disable-next-line array-callback-return
      const result = localData.find((item) => {

      let token= "jsdbkjabffqjqkwne&**#@axccxdcxzcczxvnw22842^#3j4nnkvcv#4m423"
            localStorage.setItem('authTokenADminLTE', token);
            if (item.email === data.email) {
              dispatch(loginUser(token, item));
              localStorage.setItem('loginUser', JSON.stringify(item));
              return item;
            }
      });
      if (result === undefined) {
        clearform(e);
        alert("User does not exists");
      } else {
        alert("login successfull !");
        navigate("/");
      }
  };

  const clearform = (e) => {
    e.target.email.value = "";
    e.target.password.value = "";
  }

  return (
    <>
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh', minHeight: '466px'}}>
      <div className="login-box" style={{width: '30em'}}>
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="/" className="h1 text-decoration-none text-dark">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg text-center">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text" style={{height: '100%'}}>
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text" style={{height: '100%'}}>
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" style={{textSize: '2em', padding: '10px'}}>Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mt-2 mb-3 d-flex flex-column">
              <a href="/" className="btn btn-block btn-primary mb-2">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="/" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div>

            <div className='text-center'>
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <Link to='/register' className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
