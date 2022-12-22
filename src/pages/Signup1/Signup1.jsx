import React from "react";
import logo from "../../asset/tego.png";
import "./Signup1.css";

const Signup1 = () => {
  return (
    <div className="signup">
      <div className="container">
        <img src={logo} alt="/" />

        <div className="container1">
          <h1>Welcome to TEGO</h1>
          <p>
            Please enter your email address or phone number and password to a
            new your account
          </p>

          <form>
            <input
              className="input"
              type="email"
              placeholder="Email Address / Phone Number"
            />{" "}
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
            />{" "}
            <br />
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
            />{" "}
            <br />
            <div className="checkbox">
              <label>
                <input className="check" type="checkbox" name="remember" />{" "}
                Remember me
              </label>
              <span>Forgot Password</span>
            </div>
          </form>

          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
