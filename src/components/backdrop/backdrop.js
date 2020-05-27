import React from "react"
import styles from "./backdrop.module.css"

const Backdrop = props => (
  <div
    className={styles.backdrop}
    onClick={props.click}
    role="presentation"></div>
)

export default Backdrop
