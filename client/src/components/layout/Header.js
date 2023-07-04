import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{ paddingTop: 0, paddingBottom: 0 }}
      className="navbar navbar-expand-lg bg-body-tertiary "
    >
      <div className="container-fluid text-white bg-dark py-2">
        <Link className="navbar-brand text-white" to="/">
          Expense Management
        </Link>
        <button
          className="navbar-toggler text-white"
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
         

         <ul className="navbar-nav me-auto mb-2 mb-lg-0" > 
            <li className="nav-item text-white">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
            
          <li className="nav-item text-white">
              <Link className="nav-link text-white" to="/register">
                Register
              </Link>
            </li>
          </ul>

        
            <button className="btn btn-light " type="submit">
              Button
            </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
