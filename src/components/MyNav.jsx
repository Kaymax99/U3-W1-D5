import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="px-3 py-2"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Link to="/">
        <Navbar.Brand>
          <img
            src={logo}
            style={{ width: "100px", height: "55px" }}
            alt="dogeflix logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link
            to="/"
            className={`fw-bold nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home <span className="visually-hidden">(current)</span>
          </Link>
          <Link
            to="/tv-shows"
            className={`fw-bold nav-link ${
              location.pathname === "/tv-shows" ? "active" : ""
            }`}
          >
            TV Shows
          </Link>
          <Link
            to="/movies"
            className={`fw-bold nav-link ${
              location.pathname === "/movies" ? "active" : ""
            }`}
          >
            Movies
          </Link>
          <Link
            to="/recent"
            className={`fw-bold nav-link ${
              location.pathname === "/recent" ? "active" : ""
            }`}
          >
            Recently Added
          </Link>
          <Link
            to="/my-list"
            className={`fw-bold nav-link ${
              location.pathname === "/my-list" ? "active" : ""
            }`}
          >
            My List
          </Link>
        </Nav>
        <Nav>
          <Link to="#" className="fw-bold nav-link">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link to="#" className="nav-link">
            <div id="kids">KIDS</div>
          </Link>
          <Link to="#" className="fw-bold nav-link">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Link to="#" className="fw-bold nav-link">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
