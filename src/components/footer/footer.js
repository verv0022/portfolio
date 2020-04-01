import React from "react"
import styles from "./footer.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaChevronUp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.navigate} onClick={() => scrollTo("#home-page")}>
        <FaChevronUp />
      </div>
    </footer>
  )
}

export default Footer
