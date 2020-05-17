import React from "react"
import styles from "./header.module.css"

const HamburgerButton = props => (
  <button className={styles.toggle_button} onClick={props.click}>
    <div className={styles.toggle_button_line}></div>
    <div className={styles.toggle_button_line}></div>
    <div className={styles.toggle_button_line}></div>
  </button>
)

export default HamburgerButton
