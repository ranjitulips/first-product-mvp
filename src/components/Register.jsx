import { useState } from "react";
import "./Register.css";
import Display from "./Display";
import { useNavigate } from "react-router-dom";

function Register() {
  let email = "default";

  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState(true);

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/course");
    console.log("handdle click");
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    validator(value);
    setEmailValue(value);
  };

  const validator = (value) => {
    const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isError = regexPattern.test(value);

    isError ? setError(false) : setError("Email in not correct");
  };

  return (
    <div class="login-container">
      <h1 class="heading">Sign in</h1>

      <form>
        <p class="para">
          <b>Email</b>
        </p>
        <input onChange={handleOnChange} class="user-details" type="text" />
        <Display inputValue={error} />

        <button
          style={{ backgroundColor: !!error ? "grey" : "yellow" }}
          disabled={!!error}
          onClick={handleClick}
          class="login-btn"
        >
          Continue
        </button>
        <p>
          By continuing, you agree to Amazon's
          <a class="link1" href="Conditions.html">
            Conditions of Use
          </a>
          and
          <a class="link2" href="privacypolicy.html">
            Privacy No
          </a>
        </p>
      </form>

      <div class="help-container">
        <button class="help-btn">Need Help?</button>
        <div class="help-dropdown">
          <a href="password.html">Forgot Password</a>
          <a href="issue.html">Other Issue</a>
        </div>
      </div>

      <hr />
      <div class="buy">
        <p class="para2">
          <b>Buying for work?</b>
        </p>
        <a class="shop-link" href="#">
          Shop on Amazon Business
        </a>
      </div>
    </div>
  );
}

export default Register;
