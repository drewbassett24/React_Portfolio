  import React, { useRef } from "react";
import { NavItem } from "reactstrap";

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
        
        />

      
    </nav>
  );
};

export default Navbar;