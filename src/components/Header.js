import React from "react";

function Header() {
  return (
    <div className="cover-slides">
      <img
        className="cover-slides"
        src={process.env.PUBLIC_URL + "/slider-01.jpg"}
        alt=""
      />
      <h1 className="text-center">
        Welcome To <br /> Tuwaiq Academy
      </h1>
    </div>
  );
}

export default Header;
