import React from "react";
import './navbar.css'
  const Navbar = ({brand}) => {
    return (
      <nav className="navbar">
        <div>
          <h1>{brand}</h1>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
