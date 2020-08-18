import React from "react"
import styles from "./header.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import HamburgerButton from "./hamburger-button"
import logo from "./logo.png"

const Header = props => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo}></img>
      </div>
      <div className={styles.navbar}>
        <button onClick={() => scrollTo("#home-page")} className="linkTo">
          Home
        </button>
        <button onClick={() => scrollTo("#toolset-page")} className="linkTo">
          Toolset
        </button>
        <button onClick={() => scrollTo("#projects-page")} className="linkTo">
          Projects
        </button>
        <button onClick={() => scrollTo("#contact-page")} className="linkTo">
          Contact
        </button>
      </div>
      <div className={styles.hamburgerButton}>
        <HamburgerButton click={props.hamburgerClickHandler} />
      </div>
    </div>
  )
}

export default Header
