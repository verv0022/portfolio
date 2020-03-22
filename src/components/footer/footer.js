import React from "react"
import "./footer.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaChevronUp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="up-arrow" onClick={() => scrollTo(".home-container")}>
          <FaChevronUp />
        </div>
      </div>
    </footer>
  )
}

export default Footer
