import React from "react"
import Image from "gatsby-image"
import "./projects.css"

const ProjectPreviewItem = ({ name, imageData, description, url }) => {
  return (
    <div className="project-item">
      <div className="image-container">
        <Image fluid={imageData} alt={name} className="project-img"></Image>
      </div>
      <div className="project-item-details">
        <h2 className="project-url">
          <a href={url}>{name}</a>
        </h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectPreviewItem
