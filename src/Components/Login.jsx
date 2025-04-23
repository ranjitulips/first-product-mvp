import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={inputUsername}
          required
          onChange={(e) => setInputUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
