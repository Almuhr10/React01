import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm({ login, error }) {
  const url = "https://636257767521369cd06b088f.mockapi.io/FetchAPi";
  const [details, setDetails] = useState({ name: "", password: "" });
  let navigate = useNavigate();
  function loginNavigate() {
    if (details.name <= 0 || details.password <= 0) {
      alert("All fields are required!");
    } else {
      navigate("/data");
      axios.post(url, { details }).then((res) => {
        localStorage.setItem("name", details.name);
        localStorage.setItem("password", details.password);
        console.log(res.data.details.name);
      });
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const pass_field = document.querySelector(".pass-key");
  const showBtn = document.querySelector(".show");
  function showPass() {
    if (pass_field.type === "password") {
      pass_field.type = "text";
      showBtn.textContent = "HIDE";
      showBtn.style.color = "#3498db";
    } else {
      pass_field.type = "password";
      showBtn.textContent = "SHOW";
      showBtn.style.color = "#222";
    }
  }

  return (
    <div className="bg-img-form">
      <div className="content">
        {error !== "" ? <div className="error"> {error} </div> : ""}
        <header>Login Form</header>
        <form onSubmit={submitHandler}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Email or Username"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              className="pass-key"
              placeholder="Password"
              type="text"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <span className="show" onClick={showPass}>
              SHOW
            </span>
          </div>
          <div className="pass">
            <a href="/">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value="Login" onClick={loginNavigate} />
          </div>
        </form>
        <div className="login">Or login with</div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f">
              <span>Facebook</span>
            </i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram">
              <span>Instagram</span>
            </i>
          </div>
        </div>
        <div className="signup">
          Don't have account?
          <a href="/">Signup Now</a>
        </div>
      </div>
    </div>
  );
}
