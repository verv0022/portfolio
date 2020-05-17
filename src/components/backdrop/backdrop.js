import React from "react"
import styles from "./backdrop.module.css"

const Backdrop = props => (
  <div className={styles.backdrop} onClick={props.click}></div>
)

export default Backdrop
