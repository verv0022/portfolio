import React from "react"
import "./header.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <button onClick={() => scrollTo(".home")} className="link-button">
          Home
        </button>
        <button onClick={() => scrollTo(".projects")} className="link-button">
          Projects
        </button>
        <button onClick={() => scrollTo(".contact")} className="link-button">
          Contact
        </button>
      </div>
    </header>
  )
}

export default Header
