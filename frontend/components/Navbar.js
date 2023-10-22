import React from "react";
import useGeceModu from "../hooks/useGeceModu";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleHandler}
          className={useGeceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
