import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <button className="navbar-brand btn">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </button>
    </nav>
  );
};


export default NavBar;
