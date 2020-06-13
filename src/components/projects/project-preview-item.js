import React from "react"
import Img from "gatsby-image"
import styles from "./projects.module.css"
import { Link } from "gatsby"

const ProjectPreviewItem = ({ name, imageData, description, url, link }) => {
  return (
    <div className={styles.card}>
      <Img className={styles.cardImage} fluid={imageData} alt={name}></Img>
      <Link
        to={link}
        state={{
          modal: true,
        }}>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>{description}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectPreviewItem
