import React from "react"
import Img from "gatsby-image"
import styles from "./projects.module.css"

const ProjectPreviewItem = ({ name, imageData, description, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <a href={url}>
          <Img fluid={imageData} alt={name} className="project-img"></Img>
        </a>
        <div className={styles.details}>
          <h2>
            <a href={url}>{name}</a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreviewItem
