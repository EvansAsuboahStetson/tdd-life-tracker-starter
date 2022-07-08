import NavLinks from "components/NavLinks/NavLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";
export default function Navbar({ handleLogout, loggedIn }) {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="resources">
          <NavLinks handleLogout={handleLogout} loggedIn={loggedIn} />
        </div>
      </div>
    </nav>
  );
}
