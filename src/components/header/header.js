import React from "react"
import "./Header.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <button onClick={() => scrollTo(".about")} className="link-button">
          About
        </button>
        <button onClick={() => scrollTo(".projects")} className="link-button">
          Projects
        </button>
        <button className="link-button">Contact</button>
      </div>
    </header>
  )
}

export default Header
