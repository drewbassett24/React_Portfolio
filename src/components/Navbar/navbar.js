import React from "react";
import { NavItem } from "reactstrap";

const Navbar = () => {
  import React, { useRef } from "react"
  import Navitem from "../NavItem";

  const Navbar = () => {
    const toggleRef = useRef();
    const menuRef = useRef();


    return (
      <nav className="nav body">
        <div>
          <a href="#Home" className="nav-header">
            Drew Bassett
            </a>
        </div>

        <NavItem
          links={["Home", "Projects", "Contact"]}
          toggler={menuRef}
        />

        <div id="nav-toggle" ref={toggleRef}>
          <i
            className="bx bx-menu"
            onClick={() => {
              menuRef.current.classlist.toggle("show");
            }}
          ></i>
        </div>
      </nav>
    );
  };

  export default Navbar;