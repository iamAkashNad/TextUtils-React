import React from "react";
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  let modeText = "Enable Dark Mode";


  if(props.theme === "dark") {
    modeText = "Disable Dark Mode";
  }

  const myStyle = {
    padding: "0.2rem 0.8rem",
    cursor: "pointer",
  };

  const getThemeColor = (event) => {
    const pickedColor = event.target.dataset.color;
    if(pickedColor === "red") {
      props.setTheme("rgb(78, 0, 0)", "danger");
    } else if(pickedColor === "blue") {
      props.setTheme("rgb(0, 0, 88)", "primary");
    } else if(pickedColor === "green") {
      props.setTheme("rgb(0, 53, 0)", "success");
    } else if(pickedColor === "orange") {
      props.setTheme("rgb(109, 71, 0)", "warning");
    }
  };

  return (
    <nav className={ `navbar navbar-expand-lg navbar-${ props.colTheme ? "dark" : props.theme } bg-${ props.colTheme ? props.colTheme : props.theme }` }>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          { props.title }
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" to="/about">
                About
              </a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="mx-3 my-2">
            <span className="border border-2 rounded-circle bg-danger" data-color="red" onClick={ getThemeColor } style={ myStyle }></span>
            <span className="border border-2 rounded-circle bg-primary mx-1" data-color="blue" onClick={ getThemeColor } style={ myStyle }></span>
            <span className="border border-2 rounded-circle bg-success" data-color="green" onClick={ getThemeColor } style={ myStyle }></span>
            <span className="border border-2 rounded-circle bg-warning mx-1" data-color="orange" onClick={ getThemeColor } style={ myStyle }></span>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={ props.toggleTheme } />
            <label className={ `form-check-label text-${ props.colTheme || props.theme === "dark" ? "light" : "dark" }` } htmlFor="flexSwitchCheckDefault">{ modeText }</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "The Title",
};
