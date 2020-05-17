import React from "react"
import styles from "./header.module.css"

const HamburgerButton = props => (
  <button className={styles.hamburger} onClick={props.click}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
  </button>
)

export default HamburgerButton
