import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  let location = useLocation();
  let pathName = location.pathname;

  return currentUser ? (
    <>
      <nav class="navbarCustom">
        <a className="navCustomLogo" href="/">
          WeatherApp
        </a>

        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <div className="main-container">
          <a className="navCustom-link" href="/">
            <div
              className={
                pathName === "/" ? "navCustom-item nav-active" : "navCustom-item"
              }
            >
              <h2>Home</h2>
            </div>
          </a>
          <a className="navCustom-link" href="/login">
            <div
              className={
                pathName === "/logout" ? "navCustom-item nav-active" : "navCustom-item"
              }
            >
              <h2>Logout</h2>
            </div>
          </a>
        </div>
      </nav>
    </>
  ) : (
    <>
      <nav class="navbarCustom">
        <a className="navCustomLogo" href="/">
          WeatherApp
        </a>

        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <div className="main-container">
          <a className="navCustom-link" href="/">
            <div
              className={
                pathName === "/" ? "navCustom-item nav-active" : "navCustom-item"
              }
            >
              <h2>Home</h2>
            </div>
          </a>
          <a className="navCustom-link" href="/login">
            <div
              className={
                pathName === "/login" ? "navCustom-item nav-active" : "navCustom-item"
              }
            >
              <h2>LogIn</h2>
            </div>
          </a>
          <a className="navCustom-link" href="/signUp">
            <div
              className={
                pathName === "/signUp" ? "navCustom-item nav-active" : "navCustom-item"
              }
            >
              <h2>SignUp</h2>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
