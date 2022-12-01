import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const dataArray = [];
  const [data, setData] = useState({
    name: '',
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
    dataArray.push(data);
      // concat array object with localstorage data
      const tempData = dataArray.concat(JSON.parse(localStorage.getItem('registrationDataAdminLTE')||'[]'));
      const result = JSON.stringify(tempData);
      // store data into localstorage
      localStorage.setItem('registrationDataAdminLTE', result);
      alert('Registration Successfull !');
      clearform(e);
    clearform(e);
  }

  const clearform = (e) => {
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    // e.target.confirmPassword.value = "";
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh', minHeight: '466px'}}>
        <div className="register-box" style={{width: '30em'}}>
          <div className="card-header text-center card card-outline card-primary">
            <a href="/" className="h1 text-decoration-none text-dark">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg text-center">Register a new membership</p>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    name="name"
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text" style={{height: '100%'}}>
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
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
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text" style={{height: '100%'}}>
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary m-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <Link to="/">terms</Link>
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </form>

                <p className="text-center">- OR -</p>
              <div className="social-auth-links text-center d-flex flex-column">
                <Link to="/" className="btn btn-block btn-primary mb-2">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </Link>
                <Link to="/" className="btn btn-block btn-danger mb-2">
                  <i className="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </Link>
              </div>
              <div className='text-center'>
                <Link to="/login">
                  I already have a membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
