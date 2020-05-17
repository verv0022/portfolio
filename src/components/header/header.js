import React from "react"
import styles from "./header.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import HamburgerButton from "./hamburger-button"

const Header = props => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <button
          onClick={() => scrollTo("#home-page")}
          className={styles.navigate}>
          Home
        </button>
        <button
          onClick={() => scrollTo("#toolset-page")}
          className={styles.navigate}>
          Toolset
        </button>
        <button
          onClick={() => scrollTo("#projects-page")}
          className={styles.navigate}>
          Projects
        </button>
        <button
          onClick={() => scrollTo("#contact-page")}
          className={styles.navigate}>
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
