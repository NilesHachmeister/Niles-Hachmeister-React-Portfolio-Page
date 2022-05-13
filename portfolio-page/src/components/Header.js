import React from 'react';
import '../styles/Header.css';
import image from "../styles/background.jpg"

function Header({ currentPage, changeFunction }) {
  return (
    <div className="header row" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>


      <h1 className=" col-4">
        Niles Hachmeister
      </h1>



      <a
        onClick={() => changeFunction("AboutMe")}
        className={currentPage === "AboutMe" ? "nav-link col-2 active" : "nav-link col-2"}
      >About me</a>

      <a
        onClick={() => changeFunction("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link col-2 active" : "nav-link col-2"}
      >Portfolio</a>

      <a
        onClick={() => changeFunction("Contact")}
        className={currentPage === "Contact" ? "nav-link col-2 active" : "nav-link col-2"}
      >Contact</a>

      <a
        onClick={() => changeFunction("Resume")}
        className={currentPage === "Resume" ? "nav-link col-2 active" : "nav-link col-2"}
      >Resume</a>

    </div>
  );
}

export default Header;
