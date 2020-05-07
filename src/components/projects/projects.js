import React from "react"
import styles from "./projects.module.css"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import ProjectPreviewItem from "./project-preview-item"
import { graphql, useStaticQuery } from "gatsby"
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow"
import scrollTo from "gatsby-plugin-smoothscroll"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            id
            name
            description
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  console.log(projects)

  return (
    <div className="container" id="projects-page">
      <div className="content">
        <ScrollAnimation
          animateOnce={true}
          animateIn="fadeIn"
          initiallyVisible={false}>
          <h1 className="title">Recent Projects</h1>
        </ScrollAnimation>
        <p className="description">
          These are some projects that I've worked on
        </p>

        <div className={styles.preview}>
          {projects.map(({ node: project }) => {
            return (
              <ProjectPreviewItem
                key={project.id}
                name={project.name}
                description={project.description}
                imageData={project.image.childImageSharp.fluid}
                url={project.url}
              />
            )
          })}
        </div>
      </div>
      <button className="navigate" onClick={() => scrollTo("#contact-page")}>
        <ScrollDownArrow />
      </button>
    </div>
  )
}

export default Projects
