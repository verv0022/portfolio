import React from "react"
import "./Header.css"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => {

  return (
    <header className="header">
      <div className="navbar">
        <div onClick={() => scrollTo('.about')}>About</div>
        <div onClick={() => scrollTo('.projects-content')}>Projects</div>
        <div>Contact</div>
      </div>
    </header>
  );
};

export default Header
