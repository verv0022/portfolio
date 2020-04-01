import React from "react"
import Image from "gatsby-image"
import styles from "./projects.module.css"

const ProjectPreviewItem = ({ name, imageData, description, url }) => {
  return (
    <div className={styles.card}>
      <Image fluid={imageData} alt={name} className="project-img"></Image>
      <div className={styles.details}>
        <h2>
          <a href={url}>{name}</a>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectPreviewItem
