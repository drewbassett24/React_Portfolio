import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        < nav className="navbar navbar-expand-sm navbar-light bg-light shadow mb-3" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Drew Bassett</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item"> 
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
