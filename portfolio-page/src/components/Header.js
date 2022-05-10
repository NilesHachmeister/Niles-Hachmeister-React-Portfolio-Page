import React from 'react';
import '../styles/Header.css';
import image from "../styles/header-background.jpg"

function Header({ currentPage, changeFunction }) {
  return (
    <div className='header row' style={{ backgroundImage: `url(${image})`, backgroundSize: "cover"}}>


      <h1 className="nav-link col-4">
        Niles Hachmeister
      </h1>



      <a 
        href='#about-me' 
        onClick={() => changeFunction("AboutMe")} 
        className= {currentPage === "AboutMe" ? "nav-link col-2 active" : "nav-link col-2"} 
      >About me</a>

      <a 
        href='#portfolio'
        onClick={() => changeFunction("Portfolio")} className= {currentPage === "Portfolio" ? "nav-link col-2 active" : "nav-link col-2"}
      >Portfolio</a>
      
      <a className="nav-link col-2">Contact</a>
      <a className="nav-link col-2">Resume</a>

    </div>
  );
}

export default Header;
