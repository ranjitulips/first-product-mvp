import "./Header.css";
import DigiClock from "./DigiClock";
import Cart from "./Cart";

function Header({ name }) {
  return (
    <header className="header">
      {name}

      <Cart />
    </header>
  );
}

export default Header;
