import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {props.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              style={{ margin: "0px 0px 0px 0px" }}
            >
              {/* <div className="d-flex">
                <div
                  className="bg-primary rounded mx-2"
                  style={{ height: "30px", width: "30px" }}
                  onClick={() => {
                    props.toggleMode("primary");
                  }}
                >
                  {" "}
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="bg-danger rounded mx-2"
                  style={{ height: "30px", width: "30px" }}
                  // onClick={() => {
                  //   props.toggleMode("danger");
                  // }}
                >
                  {" "}
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="bg-success rounded mx-2"
                  style={{ height: "30px", width: "30px" }}
                  // onClick={() => {
                  //   props.toggleMode("success");
                  // }}
                >
                  {" "}
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="bg-warning rounded mx-2"
                  style={{ height: "30px", width: "30px" }}
                  // onClick={() => {
                  //   props.toggleMode("warning");
                  // }}
                >
                  {" "}
                </div>
              </div> */}
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: props.mode === "light" ? "black" : "white",
                  }}
                >
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
};
